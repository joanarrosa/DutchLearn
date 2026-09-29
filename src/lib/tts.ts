let cachedVoice: SpeechSynthesisVoice | null | undefined;

function pickDutchVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice !== undefined) return cachedVoice;
  if (typeof window === "undefined" || !window.speechSynthesis) {
    cachedVoice = null;
    return cachedVoice;
  }
  const voices = window.speechSynthesis.getVoices();
  cachedVoice =
    voices.find((v) => v.lang === "nl-NL") ??
    voices.find((v) => v.lang?.startsWith("nl")) ??
    null;
  return cachedVoice;
}

if (typeof window !== "undefined" && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoice = undefined;
  };
}

export function isSpeechAvailable(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

const SLOW_KEY = "dutch-app-slow-speech";

/** Slow mode plays audio at a gentler pace — easier for beginners to follow. */
export function loadSlowMode(): boolean {
  try {
    return localStorage.getItem(SLOW_KEY) === "1";
  } catch {
    return false;
  }
}

export function saveSlowMode(slow: boolean): void {
  try {
    localStorage.setItem(SLOW_KEY, slow ? "1" : "0");
  } catch {
    // Setting just won't persist.
  }
}

interface SpeakOptions {
  /** Called when the utterance finishes (not when it is cancelled by another one). */
  onEnd?: () => void;
}

let current: SpeechSynthesisUtterance | null = null;

/** Cancels whatever is playing without firing its onEnd (some browsers fire "end" on cancel). */
function cancelCurrent(): void {
  if (current) current.onend = null;
  current = null;
  window.speechSynthesis.cancel();
}

export function speakDutch(text: string, { onEnd }: SpeakOptions = {}): void {
  if (!isSpeechAvailable()) return;
  cancelCurrent();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "nl-NL";
  utterance.rate = loadSlowMode() ? 0.6 : 0.85;
  const voice = pickDutchVoice();
  if (voice) utterance.voice = voice;
  utterance.onend = () => {
    if (current === utterance) current = null;
    onEnd?.();
  };
  current = utterance;
  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking(): void {
  if (isSpeechAvailable()) cancelCurrent();
}
