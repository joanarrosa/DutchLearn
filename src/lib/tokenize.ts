export interface Token {
  text: string;
  /** True for words you can tap; false for spaces, punctuation and numbers. */
  isWord: boolean;
}

// A word is letters, optionally with apostrophes ('s, zo'n) and inner hyphens (Willem-Alexander).
const WORD_RE = /'?[\p{L}]+(?:['’][\p{L}]+)*(?:-[\p{L}]+)*/gu;

/** Splits a sentence into tappable words and the text between them. */
export function tokenize(sentence: string): Token[] {
  const tokens: Token[] = [];
  let last = 0;
  for (const match of sentence.matchAll(WORD_RE)) {
    const start = match.index ?? 0;
    if (start > last) tokens.push({ text: sentence.slice(last, start), isWord: false });
    tokens.push({ text: match[0], isWord: true });
    last = start + match[0].length;
  }
  if (last < sentence.length) tokens.push({ text: sentence.slice(last), isWord: false });
  return tokens;
}

/** The key a word is looked up by in the dictionary. */
export function normalizeWord(word: string): string {
  return word.toLowerCase().replace(/’/g, "'");
}
