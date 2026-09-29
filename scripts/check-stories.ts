// Checks that every word in every story has a dictionary entry, so tapping
// any word in the reader shows a meaning. Run: npm run check:stories
import { STORIES } from "../src/data/stories.ts";
import { DICTIONARY } from "../src/data/dictionary.ts";
import { normalizeWord, tokenize } from "../src/lib/tokenize.ts";

const missing = new Map<string, string>();
for (const story of STORIES) {
  for (const sentence of story.sentences) {
    for (const token of tokenize(sentence.nl)) {
      if (!token.isWord) continue;
      const key = normalizeWord(token.text);
      if (!(key in DICTIONARY) && !missing.has(key)) missing.set(key, story.id);
    }
  }
}

const ids = STORIES.map((s) => s.id);
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupes.length) console.error(`Duplicate story ids: ${dupes.join(", ")}`);

if (missing.size) {
  console.error(`${missing.size} words missing from the dictionary:`);
  for (const [word, story] of missing) console.error(`  ${word}  (${story})`);
}
if (missing.size || dupes.length) process.exit(1);
console.log(`OK: ${STORIES.length} stories, every word has a meaning.`);
