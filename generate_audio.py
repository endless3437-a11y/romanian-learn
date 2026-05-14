"""
Generate offline audio data for the Romanian learning app.

Extracts all unique Romanian strings from js/data.js, generates MP3 audio
for each using edge-tts (Microsoft Edge TTS, free), and outputs base64-encoded
audio data to js/audio-data.js.

Usage:
    pip install edge-tts
    python generate_audio.py
"""

import re
import os
import sys
import json
import base64
import io
import time
import asyncio
import edge_tts


# ---- Extract Romanian strings from data.js ----
def extract_strings(data_js_path):
    """Parse data.js and extract all unique Romanian text strings."""
    with open(data_js_path, 'r', encoding='utf-8') as f:
        content = f.read()

    strings = set()

    for m in re.finditer(r'ro\s*:\s*"([^"]+)"', content):
        s = m.group(1).strip()
        if s and not all(c in '0123456789,.!?;:()[]{} -–—/+=' for c in s):
            strings.add(s)

    for m in re.finditer(r"ro\s*:\s*'([^']+)'", content):
        s = m.group(1).strip()
        if s:
            strings.add(s)

    for m in re.finditer(r'combo\s*:\s*"([^"]+)"', content):
        strings.add(m.group(1).strip())

    for m in re.finditer(r'example\s*:\s*"([^"]+)"', content):
        strings.add(m.group(1).strip())

    for m in re.finditer(r'root\s*:\s*"([^"]+)"', content):
        strings.add(m.group(1).strip())

    for m in re.finditer(r'conj\s*:\s*"([^"]+)"', content):
        strings.add(m.group(1).strip())

    for m in re.finditer(r'options\s*:\s*\[([^\]]+)\]', content):
        opts = re.findall(r'"([^"]+)"', m.group(1))
        for opt in opts:
            if re.search(r'[a-zA-Z\xC4\x83\xC3\xA2\xC3\xAE\xC8\x99\xC8\x9B]', opt):
                strings.add(opt.strip())

    manual_additions = [
        "a", "ă", "â", "b", "c", "d", "e", "f", "g", "h", "i",
        "î", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
        "ș", "t", "ț", "u", "v", "w", "x", "y", "z",
    ]
    for m in manual_additions:
        strings.add(m)

    cleaned = set()
    for s in strings:
        s = s.strip()
        if not s or len(s) > 200:
            continue
        if re.search(r'[a-zA-Z]', s):
            cleaned.add(s)
        else:
            # Check for Romanian diacritics
            for ch in s:
                if ord(ch) > 127:
                    cleaned.add(s)
                    break

    return sorted(cleaned)


# ---- Generate audio using edge-tts ----
async def generate_all_audio(strings, voice='ro-RO-EmilNeural'):
    audio_data = {}
    total = len(strings)
    print(f"Generating audio for {total} strings using edge-tts ({voice})...")

    for i, text in enumerate(strings):
        try:
            communicate = edge_tts.Communicate(text, voice)
            mp3_buffer = io.BytesIO()
            async for chunk in communicate.stream():
                if chunk["type"] == "audio":
                    mp3_buffer.write(chunk["data"])
            mp3_bytes = mp3_buffer.getvalue()
            if len(mp3_bytes) < 100:
                print(f"  WARNING: Audio too short for '{text}' ({len(mp3_bytes)} bytes)")
                continue
            b64 = base64.b64encode(mp3_bytes).decode('ascii')
            audio_data[text] = b64

            if (i + 1) % 25 == 0:
                print(f"  {i + 1}/{total}")
            await asyncio.sleep(0.05)
        except Exception as e:
            print(f"  FAIL: '{text}' -> {e}")
            continue

    return audio_data


# ---- Output JS file ----
def write_audio_js(audio_data, output_path):
    json_str = json.dumps(audio_data, ensure_ascii=False, separators=(',', ':'))

    js_content = """// ============================================================
// Offline Audio Data - embedded MP3 audio for Romanian words/phrases.
// Total entries: %d
// ============================================================

var AUDIO_DATA = %s;

function getAudio(text) {
  return AUDIO_DATA[text] || null;
}
""" % (len(audio_data), json_str)

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)

    total_bytes = sum(len(v) for v in audio_data.values())
    print(f"\nWritten {len(audio_data)} audio entries to {output_path}")
    print(f"Total base64 data: {total_bytes:,} bytes (~{total_bytes * 3 // 4 // 1024} KB decoded)")
    print(f"File size: {os.path.getsize(output_path):,} bytes")


# ---- Main ----
def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    data_js = os.path.join(base_dir, 'js', 'data.js')
    output_js = os.path.join(base_dir, 'js', 'audio-data.js')

    print("Extracting Romanian strings from data.js...")
    strings = extract_strings(data_js)
    print(f"Found {len(strings)} unique strings.")

    if not strings:
        print("ERROR: No strings extracted!")
        sys.exit(1)

    audio_data = asyncio.run(generate_all_audio(strings))

    if not audio_data:
        print("\nAUDIO GENERATION FAILED - no audio was produced.")
        print("Check network connectivity to Microsoft TTS service.")
        sys.exit(1)

    write_audio_js(audio_data, output_js)
    print("\nDone! The app now supports offline pronunciation.")


if __name__ == '__main__':
    main()
