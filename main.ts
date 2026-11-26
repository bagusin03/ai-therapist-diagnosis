// Your AI Therapist's Diagnosis — make.fun entry.
// One original line, in a calm clinical voice: a deadpan diagnosis that
// turns a human habit (checking the phone all day) into a finding, with
// the laugh arriving at the very end. Written to /output/entry.txt.
// Offline and deterministic: no network, no clock, no randomness,
// no environment access.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "Diagnosis: acute notification dependency — you unlock your phone 96 times a day, just to confirm nobody needs you.";

// Guard the sealed gate ourselves: one line, 1-200 characters, not blank,
// no stray whitespace at either end. Fail loudly instead of ever writing
// an entry the scorer would reject.
const chars = [...LINE].length;
const bytes = Buffer.byteLength(LINE, "utf8");
if (
  chars < 1 ||
  chars > 200 ||
  !LINE.trim() ||
  LINE !== LINE.trim() ||
  LINE.includes("\n")
) {
  throw new Error(`entry fails gate: ${chars} chars, ${bytes} bytes`);
}

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, LINE, "utf8");

// Verify the written file round-trips exactly, byte for byte.
const back = fs.readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("entry.txt round-trip mismatch");
}
console.log(`wrote ${chars} chars (${bytes} bytes) to ${outPath}`);
