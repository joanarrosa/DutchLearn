import type { SavedWord } from "../types";

const STORAGE_KEY = "dutch-app-saved-words-v1";

export function loadSavedWords(): SavedWord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SavedWord[]) : [];
  } catch {
    return [];
  }
}

function saveWords(words: SavedWord[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
  } catch {
    // localStorage unavailable — saved words just won't persist.
  }
}

export function isWordSaved(words: SavedWord[], nl: string): boolean {
  return words.some((w) => w.nl === nl);
}

/** Adds the word if it isn't saved yet, removes it if it is. Returns the new list. */
export function toggleSavedWord(word: Omit<SavedWord, "savedAt">): SavedWord[] {
  const words = loadSavedWords();
  const next = isWordSaved(words, word.nl)
    ? words.filter((w) => w.nl !== word.nl)
    : [{ ...word, savedAt: new Date().toISOString() }, ...words];
  saveWords(next);
  return next;
}

export function removeSavedWord(nl: string): SavedWord[] {
  const next = loadSavedWords().filter((w) => w.nl !== nl);
  saveWords(next);
  return next;
}
