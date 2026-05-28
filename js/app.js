// ============================================================
// 罗马尼亚语学习助手 — 主程序 (兼容版)
// ============================================================

var state = {
  currentView: 'dashboard',
  currentPhaseIndex: 0,
  currentLessonId: null,
  completedLessons: [],
  pace: 'normal',
  streak: 0,
  lastStudyDate: null,
  readingId: null,           // 当前阅读文章ID
  unlockMode: true,          // true=自由浏览 false=逐课解锁
};

// ---- Reading TTS State ----
var readingAudio = {
  playing: false,
  paused: false,
  speed: 1.0,
  sentences: [],
  currentIndex: 0,
  utterance: null,
};

// ---- Polyfill ----
if (!window.Set) {
  window.Set = function(arr) {
    this._data = {};
    if (arr) for (var i = 0; i < arr.length; i++) this._data[arr[i]] = true;
  };
  window.Set.prototype.has = function(v) { return !!this._data[v]; };
  window.Set.prototype.add = function(v) { this._data[v] = true; return this; };
  window.Set.prototype.delete = function(v) { var h = !!this._data[v]; delete this._data[v]; return h; };
  Object.defineProperty(window.Set.prototype, 'size', { get: function() { return Object.keys(this._data).length; } });
}

// ---- Helpers ----
function escapeHTML(str) {
  return String(str).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function toast(msg) {
  var el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(function() { el.remove(); }, 2000);
}

// ---- Init ----
function init() {
  try {
    loadState();
    updateStreak();
    // 预加载 speechSynthesis 语音列表
    if (window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = readingPreloadVoices;
      setTimeout(readingPreloadVoices, 500);
    }
    render();
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    document.getElementById('app').style.display = '';
  } catch(e) {
    document.getElementById('app').innerHTML = '<div class="card" style="margin:20px;"><h2>加载出错</h2><p>' + e.message + '</p><p>请尝试刷新页面或使用 Chrome 浏览器打开。</p></div>';
    document.getElementById('app').style.display = '';
  }
}
function loadState() {
  try {
    var saved = JSON.parse(localStorage.getItem('ro_learn_state'));
    if (saved) {
      state.completedLessons = saved.completedLessons || [];
      state.pace = saved.pace || 'normal';
      state.streak = saved.streak || 0;
      state.lastStudyDate = saved.lastStudyDate || null;
      state.unlockMode = saved.unlockMode !== undefined ? saved.unlockMode : true;
    }
  } catch(e) { state.completedLessons = []; }
}
function saveState() {
  try {
    localStorage.setItem('ro_learn_state', JSON.stringify({
      completedLessons: state.completedLessons,
      pace: state.pace,
      streak: state.streak,
      lastStudyDate: state.lastStudyDate,
      unlockMode: state.unlockMode,
    }));
  } catch(e) {}
}
function isCompleted(id) {
  return state.completedLessons.indexOf(id) !== -1;
}
function updateStreak() {
  var today = new Date().toISOString().split('T')[0];
  if (state.lastStudyDate === today) return;
  var yesterday = new Date(Date.now()-86400000).toISOString().split('T')[0];
  if (state.lastStudyDate === yesterday) { state.streak++; }
  else if (state.lastStudyDate !== today) { state.streak = 1; }
  state.lastStudyDate = today;
  saveState();
}

// ---- Navigation ----
function navigate(view, data) {
  state.currentView = view;
  if (view === 'phase') state.currentPhaseIndex = parseInt(data) || 0;
  if (view === 'lesson') state.currentLessonId = data;
  if (view === 'reading') state.readingId = data || null;
  window.location.hash = view + (data !== undefined ? ':' + data : '');
  render();
}
function handleHashChange() {
  var hash = (window.location.hash || '#dashboard').slice(1) || 'dashboard';
  var parts = hash.split(':');
  var view = parts[0];
  var param = parts.length > 1 ? parts.slice(1).join(':') : undefined;
  state.currentView = view;
  if (view === 'phase') state.currentPhaseIndex = parseInt(param) || 0;
  if (view === 'lesson') state.currentLessonId = param;
  if (view === 'reading') state.readingId = param || null;
  render();
}

// ---- Render ----
function render() {
  var app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = '';

  try {
    switch(state.currentView) {
      case 'dashboard': renderDashboard(app); break;
      case 'phase': renderPhaseView(app); break;
      case 'lesson': renderLessonView(app); break;
      case 'settings': renderSettings(app); break;
      case 'reading': renderReadingView(app); break;
      default: renderDashboard(app); break;
    }
  } catch(e) {
    app.innerHTML = '<div class="card" style="margin:20px;"><h2>渲染出错</h2><p>' + escapeHTML(e.message) + '</p></div>';
  }
}

function renderHeader(title, showBack, backFn) {
  var h = document.getElementById('header-title');
  if (h) h.textContent = title;
  var b = document.getElementById('back-btn');
  if (b) { b.style.display = showBack ? 'block' : 'none'; b.onclick = backFn || function() { navigate('dashboard'); }; }
  var nav = document.getElementById('bottom-nav');
  if (nav) nav.style.display = showBack ? 'none' : 'flex';
}

// ---- Get merged curriculum (expanded phase 1 if available) ----
function getCurriculum() {
  if (window.CURRICULUM_PHASE1 && window.CURRICULUM_PHASE1.phases) {
    var expanded = window.CURRICULUM_PHASE1.phases[0];
    var merged = { phases: [expanded] };
    for (var i = 1; i < CURRICULUM.phases.length; i++) {
      merged.phases.push(CURRICULUM.phases[i]);
    }
    return merged;
  }
  return CURRICULUM;
}

// ---- Dashboard ----
function renderDashboard(container) {
  renderHeader('🇷🇴 罗马尼亚语学习', false);

  var curriculum = getCurriculum();
  var total = 0;
  var done = state.completedLessons.length;
  curriculum.phases.forEach(function(p) { total += p.lessons.length; });
  var pct = total > 0 ? Math.round((done / total) * 100) : 0;

  var html = '';
  html += '<div class="progress-banner">';
  html += '<div class="flex-between"><div><div class="big-num">' + pct + '%</div><div class="label">整体进度</div></div>';
  html += '<div style="text-align:right"><div style="font-size:1.5rem;font-weight:800;">🔥 ' + state.streak + ' 天</div><div class="label">连续学习</div></div></div>';
  html += '<div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:' + pct + '%"></div></div>';
  html += '<div style="margin-top:8px;font-size:0.8rem;opacity:0.8">已完成 ' + done + ' / ' + total + ' 课</div></div>';

  html += '<div style="margin-bottom:12px;"><h2 style="font-size:1rem;margin-bottom:4px;">学习阶段</h2><p style="font-size:0.8rem;color:var(--text-secondary);">按顺序学习效果最佳</p></div>';

  curriculum.phases.forEach(function(phase, i) {
    var phaseDone = 0;
    phase.lessons.forEach(function(l) { if (isCompleted(l.id)) phaseDone++; });
    // 所有阶段始终开放，仅在课程内使用逐课解锁模式
    html += '<div class="card phase-card" onclick="navigate(\'phase\',' + i + ')">';
    html += '<div class="phase-icon">' + phase.icon + '</div>';
    html += '<div class="phase-info"><div class="phase-name">' + phase.title + '</div>';
    html += '<div class="phase-sub">' + phase.subtitle + '</div></div>';
    html += '<div class="phase-progress">' + phaseDone + '/' + phase.lessons.length + '</div></div>';
  });

  html += '<div class="card" onclick="navigate(\'settings\')" style="cursor:pointer;display:flex;align-items:center;gap:12px;">';
  html += '<span style="font-size:1.5rem;">⚙️</span><div><div style="font-weight:600;">学习设置</div>';
  html += '<div style="font-size:0.8rem;color:var(--text-secondary);">' + PACE_PRESETS[state.pace].name + '</div></div></div>';

  container.innerHTML = html;

  var navBtns = document.querySelectorAll('.bottom-nav button');
  for (var ni = 0; ni < navBtns.length; ni++) { navBtns[ni].classList.remove('active'); }
  var first = document.querySelector('.bottom-nav button:first-child');
  if (first) first.classList.add('active');
}

// ---- Phase View ----
function renderPhaseView(container) {
  var curriculum = getCurriculum();
  var phase = curriculum.phases[state.currentPhaseIndex];
  renderHeader(phase.title, true);

  var phaseDone = 0;
  phase.lessons.forEach(function(l) { if (isCompleted(l.id)) phaseDone++; });

  var html = '';
  html += '<div class="card"><div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">';
  html += '<span style="font-size:2rem;">' + phase.icon + '</span><div>';
  html += '<h2>' + phase.title + '</h2>';
  html += '<div style="font-size:0.8rem;color:var(--text-secondary);">' + phaseDone + '/' + phase.lessons.length + ' 课已完成</div></div></div>';
  html += '<div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:' + (phaseDone/phase.lessons.length*100) + '%"></div></div></div>';

  var typeTags = { alphabet:'字母', vocab:'词汇', sentence:'句子', grammar:'语法', reading:'阅读', review:'复习' };
  var typeClasses = { alphabet:'tag-alpha', vocab:'tag-vocab', sentence:'tag-sentence', grammar:'tag-grammar', reading:'tag-reading', review:'tag-review' };

  phase.lessons.forEach(function(lesson, i) {
    var done = isCompleted(lesson.id);
    var isCurrent = !done && (i === 0 || isCompleted(phase.lessons[i-1].id));
    // 解锁模式：未解锁的课程变灰不可点击
    var locked = !state.unlockMode && !done && !isCurrent;
    html += '<div class="card lesson-item' + (locked ? ' phase-locked' : '') + '" ' +
      (locked ? '' : 'onclick="navigate(\'lesson\',\'' + lesson.id + '\')"') +
      ' style="' + (done ? 'opacity:0.7' : '') + '">';
    html += '<div class="lesson-dot ' + (done ? 'done' : (isCurrent ? 'current' : 'pending')) + '">' + (locked ? '🔒' : (done ? '✓' : (i+1))) + '</div>';
    html += '<div style="flex:1;min-width:0;"><div style="font-weight:600;font-size:0.9rem;">' + (locked ? '🔒 ' : '') + lesson.title + '</div>';
    html += '<div style="font-size:0.75rem;color:var(--text-secondary);">' + lesson.content.length + ' 个板块</div></div>';
    html += '<span class="tag ' + (typeClasses[lesson.type] || 'tag-vocab') + '">' + (typeTags[lesson.type] || lesson.type) + '</span></div>';
  });

  // 添加阶段阅读巩固短文
  var cr = findChapterReading(state.currentPhaseIndex);
  if (cr) {
    html += '<div class="card chapter-reading" onclick="navigate(\'reading\',\'' + cr.id + '\')" style="cursor:pointer;">';
    html += '<h3>📖 阶段阅读巩固：' + cr.titleZh + '</h3>';
    html += '<div style="font-size:0.8rem;color:var(--text-secondary);">' + cr.intro + '</div>';
    html += '<div style="margin-top:8px;font-size:0.75rem;color:var(--primary);">👉 点击阅读，巩固本章所学词汇</div></div>';
  }

  container.innerHTML = html;
}

// ---- Lesson View ----
function renderLessonView(container) {
  var lesson = findLesson(state.currentLessonId);
  if (!lesson) { navigate('dashboard'); return; }

  var phase = findPhaseForLesson(state.currentLessonId);
  var curriculum = getCurriculum();
  var phaseIdx = 0;
  if (phase) {
    for (var pi = 0; pi < curriculum.phases.length; pi++) {
      if (curriculum.phases[pi].id === phase.id) { phaseIdx = pi; break; }
    }
  }
  renderHeader(lesson.title, true, function() { navigate('phase', phaseIdx); });

  var isDone = isCompleted(lesson.id);
  var typeTags = { alphabet:'字母', vocab:'词汇', sentence:'句子', grammar:'语法', reading:'阅读', review:'复习' };
  var typeClasses = { alphabet:'tag-alpha', vocab:'tag-vocab', sentence:'tag-sentence', grammar:'tag-grammar', reading:'tag-reading', review:'tag-review' };

  var html = '';
  html += '<div class="mb-3"><span class="tag ' + (typeClasses[lesson.type] || 'tag-vocab') + '">' + (typeTags[lesson.type] || lesson.type) + '</span></div>';

  lesson.content.forEach(function(block, bi) {
    switch(block.type) {
      case 'text':
        html += '<div class="content-text">' + block.text + '</div>';
        break;
      case 'practice':
        html += '<div style="margin:16px 0;"><div style="font-weight:600;margin-bottom:8px;">🎯 ' + block.instruction + '</div><div class="practice-list">';
        block.items.forEach(function(item) {
          html += '<div class="practice-item" onclick="speak(\'' + escapeHTML(item.ro) + '\', event)">';
          html += '<div><div class="ro">' + item.ro + '</div><div class="zh">' + item.zh + '</div>';
          if (item.hint) html += '<div class="hint">' + item.hint + '</div>';
          html += '</div><button class="btn-speak">🔊</button></div>';
        });
        html += '</div></div>';
        break;
      case 'vocab_list':
        html += '<div style="margin:16px 0;"><div style="font-weight:600;margin-bottom:8px;">📝 ' + block.category + '</div><div class="vocab-grid">';
        block.words.forEach(function(w) {
          html += '<div class="vocab-item" onclick="speak(\'' + escapeHTML(w.ro) + '\', event)">';
          html += '<div class="ro-word">' + w.ro + ' <span style="font-size:0.7rem;">🔊</span></div>';
          html += '<div class="zh-word">' + w.zh + '</div>';
          if (w.hint) html += '<div class="hint-word">' + w.hint + '</div>';
          if (w.root) html += '<div class="hint-word">词根: ' + w.root + '</div>';
          if (w.conj) html += '<div class="hint-word">我: ' + w.conj + '</div>';
          html += '</div>';
        });
        html += '</div></div>';
        break;
      case 'reading':
        html += '<div class="card"><h3>📖 ' + block.title + '</h3><div class="reading-text">';
        block.text.forEach(function(p) { html += '<p>' + p + '</p>'; });
        html += '</div></div>';
        break;
      case 'quiz':
        var qid = 'q_' + bi;
        html += '<div class="quiz-card" id="' + qid + '">';
        html += '<div class="quiz-question">❓ ' + block.question + '</div>';
        block.options.forEach(function(opt, oi) {
          html += '<button class="quiz-option" onclick="answerQuiz(\'' + qid + '\',' + oi + ',' + block.answer + ',this)">' + opt + '</button>';
        });
        html += '<div class="quiz-feedback" style="display:none;margin-top:8px;font-weight:600;"></div></div>';
        break;
    }
  });

  html += '<div style="margin-top:20px;text-align:center;">';
  if (isDone) {
    html += '<button class="btn btn-outline btn-block" onclick="markIncomplete(\'' + lesson.id + '\')">标记为未完成</button>';
  } else {
    html += '<button class="btn btn-success btn-block" onclick="markComplete(\'' + lesson.id + '\')">✓ 标记完成</button>';
  }
  html += '</div><div style="height:40px;"></div>';

  container.innerHTML = html;
}

// ---- Quiz ----
function answerQuiz(qid, selected, correct, btn) {
  var card = document.getElementById(qid);
  if (!card || card.getAttribute('data-answered')) return;
  card.setAttribute('data-answered', '1');

  var options = card.querySelectorAll('.quiz-option');
  for (var i = 0; i < options.length; i++) {
    options[i].disabled = true;
    if (i === correct) options[i].classList.add('correct');
    if (i === selected && selected !== correct) options[i].classList.add('wrong');
  }

  var fb = card.querySelector('.quiz-feedback');
  fb.style.display = 'block';
  fb.textContent = selected === correct ? '✅ 回答正确！' : '❌ 不对哦，正确答案已标出。';
  fb.style.color = selected === correct ? 'var(--success)' : 'var(--danger)';
}

// ---- Mark complete/incomplete ----
function markComplete(lessonId) {
  if (state.completedLessons.indexOf(lessonId) === -1) {
    state.completedLessons.push(lessonId);
  }
  saveState();
  updateStreak();
  toast('✅ 课程完成！进度已保存');
  navigate('lesson', lessonId);
}
function markIncomplete(lessonId) {
  var idx = state.completedLessons.indexOf(lessonId);
  if (idx !== -1) state.completedLessons.splice(idx, 1);
  saveState();
  navigate('lesson', lessonId);
}

// ---- Chapter Reading Helper ----
function findChapterReading(phaseIndex) {
  if (!window.CHAPTER_READINGS) return null;
  for (var i = 0; i < window.CHAPTER_READINGS.length; i++) {
    if (window.CHAPTER_READINGS[i].phase === phaseIndex + 1) return window.CHAPTER_READINGS[i];
  }
  return null;
}

// ---- Reading View (Library + Detail) ----
function renderReadingView(container) {
  // 如果有 readingId，显示阅读详情
  if (state.readingId) {
    // 先查章节阅读
    if (window.CHAPTER_READINGS) {
      for (var i = 0; i < window.CHAPTER_READINGS.length; i++) {
        if (window.CHAPTER_READINGS[i].id === state.readingId) {
          renderReadingDetail(container, window.CHAPTER_READINGS[i], true);
          return;
        }
      }
    }
    // 再查阅读库
    if (window.READING_LIBRARY) {
      for (var j = 0; j < window.READING_LIBRARY.length; j++) {
        if (window.READING_LIBRARY[j].id === state.readingId) {
          renderReadingDetail(container, window.READING_LIBRARY[j], false);
          return;
        }
      }
    }
  }
  // 默认：显示阅读库列表
  renderReadingLibrary(container);
}

function renderReadingLibrary(container) {
  renderHeader('📖 阅读文库', false);

  var html = '';
  html += '<div style="margin-bottom:12px;"><h2 style="font-size:1rem;margin-bottom:4px;">分级阅读</h2>';
  html += '<p style="font-size:0.8rem;color:var(--text-secondary);">从幼儿园到高中，点击单词查释义听发音</p></div>';

  // 先显示章节阅读
  if (window.CHAPTER_READINGS && window.CHAPTER_READINGS.length > 0) {
    html += '<div class="reading-level-header lvl-elem">📗 课程配套阅读（巩固所学词汇）</div>';
    window.CHAPTER_READINGS.forEach(function(cr) {
      html += '<div class="reading-card" onclick="navigate(\'reading\',\'' + cr.id + '\')">';
      html += '<div class="reading-title">' + cr.title + '</div>';
      html += '<div class="reading-subtitle">' + cr.titleZh + ' — ' + cr.intro + '</div>';
      html += '<div class="reading-meta"><span class="rl-tag tag-level-elem">阶段' + cr.phase + '</span></div></div>';
    });
  }

  // 分级阅读库
  if (window.READING_LIBRARY && window.READING_LIBRARY.length > 0) {
    var levels = [
      { key: 1, name: '🏫 幼儿园', cls: 'lvl-k', tag: 'tag-level-k' },
      { key: 2, name: '📘 小学', cls: 'lvl-elem', tag: 'tag-level-elem' },
      { key: 3, name: '📙 初中', cls: 'lvl-middle', tag: 'tag-level-middle' },
      { key: 4, name: '📕 高中', cls: 'lvl-high', tag: 'tag-level-high' },
    ];

    levels.forEach(function(lvl) {
      var readings = window.READING_LIBRARY.filter(function(r) { return r.level === lvl.key; });
      if (readings.length === 0) return;
      html += '<div class="reading-level-header ' + lvl.cls + '">' + lvl.name + '</div>';
      readings.forEach(function(rl) {
        html += '<div class="reading-card" onclick="navigate(\'reading\',\'' + rl.id + '\')">';
        html += '<div class="reading-title">' + rl.title + '</div>';
        html += '<div class="reading-subtitle">' + rl.titleZh + '</div>';
        html += '<div class="reading-meta"><span class="rl-tag ' + lvl.tag + '">' + rl.levelName + '</span>';
        html += '<span class="rl-tag" style="background:#f1f5f9;color:#64748b;">约' + rl.text.join(' ').split(/\s+/).length + '词</span></div></div>';
      });
    });
  }

  var navBtns = document.querySelectorAll('.bottom-nav button');
  for (var ni = 0; ni < navBtns.length; ni++) { navBtns[ni].classList.remove('active'); }
  var readingBtn = document.querySelectorAll('.bottom-nav button')[1];
  if (readingBtn) readingBtn.classList.add('active');

  container.innerHTML = html;
}

// ---- Reading Detail (with word-click) ----
function renderReadingDetail(container, reading, isChapter) {
  renderHeader(reading.title, true, function() { navigate('reading'); });

  var html = '<div class="reading-full">';
  html += '<h2>' + reading.title + '</h2>';
  html += '<div style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:4px;">' + reading.titleZh + '</div>';

  // 词汇表
  if (reading.vocab && reading.vocab.length > 0) {
    html += '<div class="vocab-section"><h4>📝 关键词汇</h4><div class="vocab-grid-sm">';
    reading.vocab.forEach(function(v) {
      html += '<span class="vocab-chip" onclick="speak(\'' + escapeHTML(v.ro) + '\', event)">';
      html += '<span class="vc-ro">' + v.ro + '</span>';
      html += '<span class="vc-zh">' + v.zh + '</span></span>';
    });
    html += '</div></div>';
  }

  // 阅读正文（带word-click）
  html += '<div class="reading-text" id="reading-text-content">';
  reading.text.forEach(function(paragraph) {
    html += '<p>';
    // 分割单词，每个单词变成可点击元素
    var words = paragraph.split(/(\s+)/);
    words.forEach(function(w) {
      if (w.trim() === '') { html += w; return; }
      // 去掉标点获取纯单词
      var cleanWord = w.replace(/^[,.!?;:„"«»()\[\]…—–-]+|[,.!?;:„"«»()\[\]…—–-]+$/g, '');
      // 大小写不敏感查找
      var wordInfo = null;
      if (reading.wordMap) {
        wordInfo = reading.wordMap[cleanWord] || reading.wordMap[cleanWord.toLowerCase()];
      }
      if (wordInfo) {
        html += '<span class="word-clickable" data-word="' + escapeHTML(cleanWord) + '" ';
        html += 'data-zh="' + escapeHTML(wordInfo.zh) + '" ';
        html += 'data-pron="' + escapeHTML(wordInfo.pronunciation || '') + '" ';
        html += 'onclick="onWordClick(event, this)">' + w + '</span>';
      } else {
        html += w;
      }
    });
    html += '</p>';
  });
  html += '</div>';

  // 语音朗读控制条
  html += '<div class="reading-audio-bar" id="reading-audio-bar">';
  html += '<div class="ab-row">';
  html += '<span class="ab-label">🔊</span>';
  html += '<button class="ab-btn ab-play" id="ab-play-btn" onclick="readingPlay()" title="朗读">▶</button>';
  html += '<button class="ab-btn ab-pause" id="ab-pause-btn" onclick="readingPause()" title="暂停" style="display:none;">⏸</button>';
  html += '<button class="ab-btn ab-stop" onclick="readingStop()" title="停止">⏹</button>';
  html += '<button class="ab-btn ab-retry" onclick="readingRetry()" title="重试加载语音" style="display:none;">🔄</button>';
  html += '<span style="font-size:0.72rem;color:var(--text-secondary);">语速：</span>';
  html += '<button class="ab-speed" data-speed="0.5" onclick="readingSetSpeed(0.5,this)">0.5x</button>';
  html += '<button class="ab-speed active-speed" data-speed="1.0" onclick="readingSetSpeed(1.0,this)">1x</button>';
  html += '<button class="ab-speed" data-speed="1.25" onclick="readingSetSpeed(1.25,this)">1.25x</button>';
  html += '<button class="ab-speed" data-speed="1.5" onclick="readingSetSpeed(1.5,this)">1.5x</button>';
  html += '</div>';
  // 可点击进度条
  html += '<div class="reading-progress-wrap" id="reading-progress-wrap" onclick="readingSeek(event)" title="点击跳转到对应句子">';
  html += '<div class="reading-progress-fill" id="reading-progress-fill" style="width:0%"></div>';
  html += '<div class="reading-progress-text" id="reading-progress-text">点击 ▶ 开始朗读</div>';
  html += '</div>';
  html += '<div class="ab-progress-text" id="ab-progress-detail"></div>';
  html += '</div>';

  // 显示中文翻译切换
  if (reading.translation) {
    html += '<div class="translation-toggle" onclick="toggleTranslation()">📋 显示/隐藏中文翻译</div>';
    html += '<div class="full-translation" id="full-translation">' + reading.translation + '</div>';
  }

  // 测验
  if (reading.quiz && reading.quiz.length > 0) {
    html += '<div style="margin-top:20px;"><h3>📋 阅读理解</h3>';
    reading.quiz.forEach(function(q, qi) {
      var qid = 'rq_' + qi;
      html += '<div class="quiz-card" id="' + qid + '">';
      html += '<div class="quiz-question">' + (qi+1) + '. ' + q.question + '</div>';
      q.options.forEach(function(opt, oi) {
        html += '<button class="quiz-option" onclick="answerQuiz(\'' + qid + '\',' + oi + ',' + q.answer + ',this)">' + opt + '</button>';
      });
      html += '<div class="quiz-feedback" style="display:none;margin-top:8px;font-weight:600;"></div></div>';
    });
    html += '</div>';
  }

  html += '<div style="height:40px;"></div></div>';
  container.innerHTML = html;
}

// ---- Word Click Handler ----
function onWordClick(evt, el) {
  evt.stopPropagation();
  // 关闭已打开的弹窗
  var existing = document.getElementById('word-popup');
  if (existing) { existing.remove(); }

  // 清除其他活动状态
  var actives = document.querySelectorAll('.word-clickable.active');
  for (var a = 0; a < actives.length; a++) { actives[a].classList.remove('active'); }
  el.classList.add('active');

  var word = el.getAttribute('data-word');
  var zh = el.getAttribute('data-zh');
  var pron = el.getAttribute('data-pron');

  // 创建弹窗
  var popup = document.createElement('div');
  popup.id = 'word-popup';
  popup.className = 'word-popup';
  popup.innerHTML = '<button class="wp-close" onclick="closeWordPopup()">✕</button>' +
    '<div class="wp-word">' + word + '</div>' +
    '<div class="wp-zh">' + zh + '</div>' +
    '<div class="wp-pron">读音：' + pron + '</div>' +
    '<button class="wp-speak" onclick="speak(\'' + escapeHTML(word) + '\', event); event.stopPropagation();">🔊 听发音</button>';

  document.body.appendChild(popup);

  // 定位弹窗
  var rect = el.getBoundingClientRect();
  var top = rect.bottom + 6;
  var left = rect.left;
  // 避免超出屏幕
  if (left + 260 > window.innerWidth) left = window.innerWidth - 270;
  if (left < 10) left = 10;
  if (top + 120 > window.innerHeight) top = rect.top - 130;
  popup.style.position = 'fixed';
  popup.style.left = left + 'px';
  popup.style.top = top + 'px';

  // 点击其他区域关闭
  setTimeout(function() {
    document.addEventListener('click', closeWordPopupOnClick);
  }, 50);
}

function closeWordPopup() {
  var popup = document.getElementById('word-popup');
  if (popup) popup.remove();
  var actives = document.querySelectorAll('.word-clickable.active');
  for (var a = 0; a < actives.length; a++) { actives[a].classList.remove('active'); }
  document.removeEventListener('click', closeWordPopupOnClick);
}

function closeWordPopupOnClick(e) {
  var popup = document.getElementById('word-popup');
  if (popup && !popup.contains(e.target) && !e.target.classList.contains('word-clickable')) {
    closeWordPopup();
  }
}

// ---- Translation Toggle ----
function toggleTranslation() {
  var el = document.getElementById('full-translation');
  if (el) { el.classList.toggle('show'); }
}

// ---- Reading TTS (Text-to-Speech) ----

// 预加载语音列表（解决 voices 异步加载问题）
var _voicesReady = false;
var _voiceRetryCount = 0;

function readingPreloadVoices() {
  if (!window.speechSynthesis) return;
  var voices = window.speechSynthesis.getVoices();
  if (voices && voices.length > 0) {
    _voicesReady = true;
    _voiceRetryCount = 0;
    return;
  }
  // voices 还没加载完，监听 voiceschanged 事件
  _voiceRetryCount++;
  if (_voiceRetryCount <= 10) {
    setTimeout(readingPreloadVoices, 300);
  }
}

// 获取最佳罗马尼亚语语音
function readingGetVoice() {
  if (!window.speechSynthesis) return null;
  var voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;
  var best = null;
  for (var i = 0; i < voices.length; i++) {
    if (voices[i].lang.indexOf('ro') === 0) {
      if (!best || voices[i].localService) {
        best = voices[i];
        if (voices[i].localService) break;
      }
    }
  }
  // 如果没有罗马尼亚语，用英语兜底
  if (!best) {
    for (var j = 0; j < voices.length; j++) {
      if (voices[j].lang.indexOf('en') === 0) {
        best = voices[j];
        break;
      }
    }
  }
  return best;
}

function readingCollectSentences() {
  var container = document.getElementById('reading-text-content');
  if (!container) return [];
  var sentences = [];
  var paras = container.querySelectorAll('p');
  for (var i = 0; i < paras.length; i++) {
    var text = paras[i].textContent || '';
    var parts = text.match(/[^.!?;]+[.!?;]*/g) || [text];
    for (var j = 0; j < parts.length; j++) {
      var s = parts[j].trim();
      if (s.length > 0) sentences.push(s);
    }
  }
  return sentences;
}

function readingUpdateProgress() {
  var total = readingAudio.sentences.length;
  if (total === 0) return;
  var idx = readingAudio.currentIndex;
  var pct = Math.round((idx / total) * 100);
  // 进度条填充
  var fill = document.getElementById('reading-progress-fill');
  if (fill) fill.style.width = pct + '%';
  // 进度文字
  var text = document.getElementById('reading-progress-text');
  if (text) text.textContent = pct + '%';
  // 详细状态
  var detail = document.getElementById('ab-progress-detail');
  if (detail) {
    if (readingAudio.playing && !readingAudio.paused) {
      detail.textContent = '朗读中 — 第 ' + (idx + 1) + ' / ' + total + ' 句';
    } else if (readingAudio.paused) {
      detail.textContent = '已暂停 — 第 ' + (idx + 1) + ' / ' + total + ' 句';
    }
  }
}

function readingPlay() {
  // 检查语音是否就绪
  if (!window.speechSynthesis) {
    alert('您的浏览器不支持语音朗读功能。请使用 Chrome 或 Edge 浏览器。');
    return;
  }
  // 确保 voices 已加载
  var voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) {
    readingPreloadVoices();
    document.getElementById('ab-progress-text').textContent = '正在加载语音引擎，请稍后再试...';
    document.getElementById('ab-progress-detail').textContent = '如持续失败请点击🔄重试';
    document.getElementById('ab-retry-btn').style.display = 'flex';
    setTimeout(function() { readingPlay(); }, 800);
    return;
  }

  // 如果暂停了，恢复播放
  if (readingAudio.paused) {
    readingAudio.paused = false;
    readingAudio.playing = true;
    readingUpdateUI();
    readingUpdateProgress();
    readingSpeakCurrent();
    return;
  }

  // 新播放
  readingStop();
  readingAudio.sentences = readingCollectSentences();
  if (readingAudio.sentences.length === 0) {
    document.getElementById('reading-progress-text').textContent = '未找到朗读内容';
    return;
  }
  readingAudio.currentIndex = 0;
  readingAudio.playing = true;
  readingAudio.paused = false;
  readingUpdateUI();
  readingUpdateProgress();
  readingSpeakCurrent();
}

function readingPause() {
  readingAudio.paused = true;
  readingAudio.playing = false;
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  readingUpdateUI();
  readingUpdateProgress();
}

function readingStop() {
  readingAudio.playing = false;
  readingAudio.paused = false;
  readingAudio.currentIndex = 0;
  readingAudio.sentences = [];
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  // 清除进度
  var fill = document.getElementById('reading-progress-fill');
  if (fill) fill.style.width = '0%';
  var text = document.getElementById('reading-progress-text');
  if (text) text.textContent = '点击 ▶ 开始朗读';
  var detail = document.getElementById('ab-progress-detail');
  if (detail) detail.textContent = '';
  document.getElementById('ab-retry-btn').style.display = 'none';
  readingUpdateUI();
}

function readingRetry() {
  document.getElementById('ab-retry-btn').style.display = 'none';
  document.getElementById('reading-progress-text').textContent = '正在重新加载语音...';
  _voicesReady = false;
  _voiceRetryCount = 0;
  // 强制触发 voices 重新加载
  if (window.speechSynthesis) {
    var dummy = new SpeechSynthesisUtterance('');
    dummy.volume = 0;
    dummy.rate = 2;
    window.speechSynthesis.speak(dummy);
  }
  readingPreloadVoices();
  setTimeout(function() { readingPlay(); }, 1000);
}

function readingSpeakCurrent() {
  if (!readingAudio.playing || readingAudio.paused) return;
  if (readingAudio.currentIndex >= readingAudio.sentences.length) {
    readingAudio.playing = false;
    readingUpdateUI();
    var fill = document.getElementById('reading-progress-fill');
    if (fill) fill.style.width = '100%';
    var text = document.getElementById('reading-progress-text');
    if (text) text.textContent = '朗读完毕 ✓';
    var detail = document.getElementById('ab-progress-detail');
    if (detail) detail.textContent = '全部 ' + readingAudio.sentences.length + ' 句朗读完成';
    return;
  }

  var sentence = readingAudio.sentences[readingAudio.currentIndex];
  var utter = new SpeechSynthesisUtterance(sentence);
  utter.lang = 'ro-RO';
  utter.rate = readingAudio.speed;

  // 使用最佳语音
  var voice = readingGetVoice();
  if (voice) utter.voice = voice;

  readingAudio.utterance = utter;
  readingUpdateProgress();

  // 当前句子结束 → 读下一句
  utter.onend = function() {
    readingAudio.currentIndex++;
    readingUpdateProgress();
    if (readingAudio.playing && !readingAudio.paused) {
      setTimeout(function() { readingSpeakCurrent(); }, 150);
    }
  };

  utter.onerror = function(e) {
    if (e.error === 'canceled' || e.error === 'interrupted') {
      return;
    }
    // 出错时跳过当前句，继续下一句
    readingAudio.currentIndex++;
    readingUpdateProgress();
    if (readingAudio.playing && !readingAudio.paused) {
      setTimeout(function() { readingSpeakCurrent(); }, 300);
    }
  };

  // 使用 keep-alive 防止移动端 TTS 自动中断
  var keepAlive = setInterval(function() {
    if (window.speechSynthesis && window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    } else {
      clearInterval(keepAlive);
    }
  }, 8000);

  utter.onend = (function(origEnd) {
    return function() {
      clearInterval(keepAlive);
      origEnd();
    };
  })(utter.onend);

  utter.onerror = (function(origErr) {
    return function(e) {
      clearInterval(keepAlive);
      origErr(e);
    };
  })(utter.onerror);

  window.speechSynthesis.speak(utter);
}

// 点击进度条跳转到对应句子
function readingSeek(event) {
  if (readingAudio.sentences.length === 0) return;
  var bar = document.getElementById('reading-progress-wrap');
  if (!bar) return;
  var rect = bar.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var pct = x / rect.width;
  if (pct < 0) pct = 0;
  if (pct > 1) pct = 1;
  var targetIndex = Math.floor(pct * readingAudio.sentences.length);
  if (targetIndex >= readingAudio.sentences.length) targetIndex = readingAudio.sentences.length - 1;

  // 取消当前朗读
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  readingAudio.currentIndex = targetIndex;
  readingAudio.paused = false;
  readingAudio.playing = true;
  readingUpdateUI();
  readingUpdateProgress();
  setTimeout(function() { readingSpeakCurrent(); }, 100);
}

function readingSetSpeed(speed, btn) {
  readingAudio.speed = speed;
  var buttons = document.querySelectorAll('.ab-speed');
  for (var b = 0; b < buttons.length; b++) {
    buttons[b].classList.remove('active-speed');
  }
  if (btn) btn.classList.add('active-speed');
  // 如果正在播放，重新开始当前句子
  if (readingAudio.playing && !readingAudio.paused) {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    setTimeout(function() { readingSpeakCurrent(); }, 100);
  }
}

function readingUpdateUI() {
  var playBtn = document.getElementById('ab-play-btn');
  var pauseBtn = document.getElementById('ab-pause-btn');
  if (playBtn && pauseBtn) {
    if (readingAudio.playing && !readingAudio.paused) {
      playBtn.style.display = 'none';
      pauseBtn.style.display = 'flex';
    } else {
      playBtn.style.display = 'flex';
      pauseBtn.style.display = 'none';
    }
  }
}

// ---- Settings ----
function setUnlockMode(enabled) {
  state.unlockMode = enabled;
  saveState();
  toast(enabled ? '已切换到自由浏览模式' : '已切换到逐课解锁模式');
  render();
}

function renderSettings(container) {
  renderHeader('⚙️ 学习设置', true);

  var curriculum = getCurriculum();
  var total = 0;
  curriculum.phases.forEach(function(p) { total += p.lessons.length; });

  var html = '';

  // 进度解锁模式开关
  html += '<div class="setting-group"><h3>学习模式</h3>';
  html += '<div class="setting-toggle">';
  html += '<div><div class="toggle-label">' + (state.unlockMode ? '🔓 自由浏览模式' : '🔒 逐课解锁模式') + '</div>';
  html += '<div class="toggle-desc">' + (state.unlockMode ? '所有课程开放，可自由跳转' : '学完一课才能解锁下一课') + '</div></div>';
  html += '<label class="toggle-switch"><input type="checkbox" ' + (state.unlockMode ? 'checked' : '') + ' onchange="setUnlockMode(this.checked)">';
  html += '<span class="toggle-slider"></span></label></div></div>';

  html += '<div class="setting-group"><h3>学习速度</h3>';
  Object.keys(PACE_PRESETS).forEach(function(key) {
    var p = PACE_PRESETS[key];
    html += '<button class="pace-option ' + (state.pace === key ? 'selected' : '') + '" onclick="setPace(\'' + key + '\')">';
    html += '<div class="pace-name">' + p.name + '</div><div class="pace-desc">' + p.desc + '</div></button>';
  });
  html += '</div>';

  html += '<div class="setting-group"><h3>学习数据</h3><div class="card">';
  html += '<div class="flex-between" style="margin-bottom:8px;"><span>已完成课程</span><strong>' + state.completedLessons.length + '</strong></div>';
  html += '<div class="flex-between" style="margin-bottom:8px;"><span>连续学习天数</span><strong>🔥 ' + state.streak + ' 天</strong></div>';
  html += '<div class="flex-between"><span>课程总数</span><strong>' + total + '</strong></div></div>';
  html += '<button class="btn btn-outline btn-block mt-2" onclick="resetProgress()" style="color:var(--danger);border-color:var(--danger);">🔄 重置所有进度</button></div>';

  container.innerHTML = html;
}
function setPace(pace) {
  state.pace = pace;
  saveState();
  toast('学习速度已设为：' + PACE_PRESETS[pace].name);
  render();
}
function resetProgress() {
  if (confirm('确定要重置所有学习进度吗？此操作不可恢复！')) {
    state.completedLessons = [];
    state.streak = 0;
    saveState();
    toast('进度已重置');
    navigate('dashboard');
  }
}

// ---- TTS (Offline-first: embedded MP3 via Blob URL, then speechSynthesis) ----
var _speechUtterance = null;
var _speechKeepAlive = null;
var _currentAudio = null;

if (window.speechSynthesis) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = function() {
    window.speechSynthesis.getVoices();
  };
}

function speak(text, evt) {
  var btn = null;
  if (evt && evt.currentTarget) {
    btn = evt.currentTarget.querySelector('.btn-speak');
    if (!btn) btn = evt.currentTarget;
    btn.classList.add('speaking');
  }

  // 1. Offline audio ready → use embedded MP3
  if (_AUDIO_READY && AUDIO_DATA[text]) {
    playBlobAudio(AUDIO_DATA[text], btn);
    return;
  }

  // 2. Audio still loading → tell user, then try TTS
  if (!_AUDIO_READY && typeof AUDIO_DATA !== 'undefined') {
    toast('语音包加载中，请稍候...');
  }

  // 3. Try browser speechSynthesis
  speakWithTTS(text, btn);
}

// ---- Play embedded MP3 via Blob URL (reliable on mobile) ----
function playBlobAudio(b64, btn) {
  cleanupAudio();

  // Convert base64 to Blob → Object URL (works everywhere, unlike data URIs)
  var binary = atob(b64);
  var bytes = new Uint8Array(binary.length);
  for (var i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  var blob = new Blob([bytes], { type: 'audio/mp3' });
  var url = URL.createObjectURL(blob);

  var audio = new Audio(url);
  _currentAudio = audio;

  audio.onended = function() {
    _currentAudio = null;
    URL.revokeObjectURL(url);
    if (btn) btn.classList.remove('speaking');
  };

  audio.onerror = function() {
    _currentAudio = null;
    URL.revokeObjectURL(url);
    if (btn) btn.classList.remove('speaking');
    toast('音频播放失败');
  };

  var promise = audio.play();
  if (promise) {
    promise.catch(function(e) {
      _currentAudio = null;
      URL.revokeObjectURL(url);
      if (btn) btn.classList.remove('speaking');
      console.log('Audio play rejected:', e.name);
    });
  }
}

// ---- Browser speechSynthesis fallback (used when audio pack not loaded) ----
function speakWithTTS(text, btn) {
  if (!window.speechSynthesis) {
    toast('您的浏览器不支持语音合成');
    if (btn) btn.classList.remove('speaking');
    return;
  }

  stopSpeech();

  var utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'ro-RO';
  utter.rate = 0.85;
  utter.pitch = 1;

  var voices = window.speechSynthesis.getVoices();
  var bestVoice = null;
  for (var i = 0; i < voices.length; i++) {
    if (voices[i].lang.indexOf('ro') === 0) {
      if (!bestVoice || voices[i].localService) {
        bestVoice = voices[i];
        if (voices[i].localService) break;
      }
    }
  }
  if (bestVoice) utter.voice = bestVoice;

  _speechUtterance = utter;

  _speechKeepAlive = setInterval(function() {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    }
  }, 10000);

  utter.onend = function() {
    _speechUtterance = null;
    if (_speechKeepAlive) { clearInterval(_speechKeepAlive); _speechKeepAlive = null; }
    if (btn) btn.classList.remove('speaking');
  };

  utter.onerror = function(e) {
    _speechUtterance = null;
    if (_speechKeepAlive) { clearInterval(_speechKeepAlive); _speechKeepAlive = null; }
    if (btn) btn.classList.remove('speaking');
    if (e.error !== 'canceled' && e.error !== 'interrupted') {
      toast('语音播放失败，请重试');
    }
  };

  window.speechSynthesis.speak(utter);
}

function cleanupAudio() {
  if (_currentAudio) {
    _currentAudio.pause();
    _currentAudio.src = '';
    _currentAudio = null;
  }
  stopSpeech();
}

function stopSpeech() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  if (_speechKeepAlive) {
    clearInterval(_speechKeepAlive);
    _speechKeepAlive = null;
  }
  _speechUtterance = null;
}

// ---- Helpers ----
function findLesson(id) {
  var curriculum = getCurriculum();
  for (var i = 0; i < curriculum.phases.length; i++) {
    var phase = curriculum.phases[i];
    for (var j = 0; j < phase.lessons.length; j++) {
      if (phase.lessons[j].id === id) return phase.lessons[j];
    }
  }
  return null;
}
function findPhaseForLesson(id) {
  var curriculum = getCurriculum();
  for (var i = 0; i < curriculum.phases.length; i++) {
    var phase = curriculum.phases[i];
    for (var j = 0; j < phase.lessons.length; j++) {
      if (phase.lessons[j].id === id) return phase;
    }
  }
  return null;
}

// ---- Boot ----
document.addEventListener('DOMContentLoaded', init);
