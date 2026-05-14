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
  window.location.hash = view + (data !== undefined ? ':' + data : '');
  render();
}
function handleHashChange() {
  var hash = (window.location.hash || '#dashboard').slice(1) || 'dashboard';
  var parts = hash.split(':');
  var view = parts[0];
  var param = parts[1];
  state.currentView = view;
  if (view === 'phase') state.currentPhaseIndex = parseInt(param) || 0;
  if (view === 'lesson') state.currentLessonId = param;
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

// ---- Dashboard ----
function renderDashboard(container) {
  renderHeader('🇷🇴 罗马尼亚语学习', false);

  var total = 0;
  var done = state.completedLessons.length;
  CURRICULUM.phases.forEach(function(p) { total += p.lessons.length; });
  var pct = total > 0 ? Math.round((done / total) * 100) : 0;

  var html = '';
  html += '<div class="progress-banner">';
  html += '<div class="flex-between"><div><div class="big-num">' + pct + '%</div><div class="label">整体进度</div></div>';
  html += '<div style="text-align:right"><div style="font-size:1.5rem;font-weight:800;">🔥 ' + state.streak + ' 天</div><div class="label">连续学习</div></div></div>';
  html += '<div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:' + pct + '%"></div></div>';
  html += '<div style="margin-top:8px;font-size:0.8rem;opacity:0.8">已完成 ' + done + ' / ' + total + ' 课</div></div>';

  html += '<div style="margin-bottom:12px;"><h2 style="font-size:1rem;margin-bottom:4px;">学习阶段</h2><p style="font-size:0.8rem;color:var(--text-secondary);">按顺序学习效果最佳</p></div>';

  CURRICULUM.phases.forEach(function(phase, i) {
    var phaseDone = 0;
    phase.lessons.forEach(function(l) { if (isCompleted(l.id)) phaseDone++; });
    var prevDone = true;
    if (i > 0) {
      prevDone = CURRICULUM.phases[i-1].lessons.every(function(l) { return isCompleted(l.id); });
    }
    var isLocked = i > 0 && !prevDone && phaseDone === 0;
    html += '<div class="card phase-card ' + (isLocked ? 'phase-locked' : '') + '" onclick="navigate(\'phase\',' + i + ')">';
    html += '<div class="phase-icon">' + phase.icon + '</div>';
    html += '<div class="phase-info"><div class="phase-name">' + (isLocked ? '🔒 ' : '') + phase.title + '</div>';
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
  var phase = CURRICULUM.phases[state.currentPhaseIndex];
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
    html += '<div class="card lesson-item" onclick="navigate(\'lesson\',\'' + lesson.id + '\')" style="' + (done ? 'opacity:0.7' : '') + '">';
    html += '<div class="lesson-dot ' + (done ? 'done' : (isCurrent ? 'current' : 'pending')) + '">' + (done ? '✓' : (i+1)) + '</div>';
    html += '<div style="flex:1;min-width:0;"><div style="font-weight:600;font-size:0.9rem;">' + lesson.title + '</div>';
    html += '<div style="font-size:0.75rem;color:var(--text-secondary);">' + lesson.content.length + ' 个板块</div></div>';
    html += '<span class="tag ' + (typeClasses[lesson.type] || 'tag-vocab') + '">' + (typeTags[lesson.type] || lesson.type) + '</span></div>';
  });

  container.innerHTML = html;
}

// ---- Lesson View ----
function renderLessonView(container) {
  var lesson = findLesson(state.currentLessonId);
  if (!lesson) { navigate('dashboard'); return; }

  var phase = findPhaseForLesson(state.currentLessonId);
  var phaseIdx = phase ? CURRICULUM.phases.indexOf(phase) : 0;
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
          html += '<div class="practice-item" onclick="speak(\'' + escapeHTML(item.ro) + '\')">';
          html += '<div><div class="ro">' + item.ro + '</div><div class="zh">' + item.zh + '</div>';
          if (item.hint) html += '<div class="hint">' + item.hint + '</div>';
          html += '</div><button class="btn-speak">🔊</button></div>';
        });
        html += '</div></div>';
        break;
      case 'vocab_list':
        html += '<div style="margin:16px 0;"><div style="font-weight:600;margin-bottom:8px;">📝 ' + block.category + '</div><div class="vocab-grid">';
        block.words.forEach(function(w) {
          html += '<div class="vocab-item" onclick="speak(\'' + escapeHTML(w.ro) + '\')">';
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

// ---- Settings ----
function renderSettings(container) {
  renderHeader('⚙️ 学习设置', true);

  var total = 0;
  CURRICULUM.phases.forEach(function(p) { total += p.lessons.length; });

  var html = '<div class="setting-group"><h3>学习速度</h3>';
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

// ---- TTS ----
function speak(text) {
  if (!window.speechSynthesis) {
    toast('您的浏览器不支持语音合成');
    return;
  }
  window.speechSynthesis.cancel();
  var utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'ro-RO';
  utter.rate = 0.85;
  utter.pitch = 1;
  window.speechSynthesis.speak(utter);
}

// ---- Helpers ----
function findLesson(id) {
  for (var i = 0; i < CURRICULUM.phases.length; i++) {
    var phase = CURRICULUM.phases[i];
    for (var j = 0; j < phase.lessons.length; j++) {
      if (phase.lessons[j].id === id) return phase.lessons[j];
    }
  }
  return null;
}
function findPhaseForLesson(id) {
  for (var i = 0; i < CURRICULUM.phases.length; i++) {
    var phase = CURRICULUM.phases[i];
    for (var j = 0; j < phase.lessons.length; j++) {
      if (phase.lessons[j].id === id) return phase;
    }
  }
  return null;
}

// ---- Boot ----
document.addEventListener('DOMContentLoaded', init);
