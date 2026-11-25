// One Line, One Laugh — make.fun entry.
//
// The program writes a single original one-liner to /output/entry.txt.
// Deterministic: the same line on every run. No network, no clock input,
// no environment input — the line is fixed in this file.
//
// The gate requires 1 to 140 characters of non-blank UTF-8 text, so the
// line is checked against exactly that contract before it is written:
// a line that ever failed the check would fail loudly instead of
// submitting an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked my boss for a raise because of inflation. He gave me a balloon.";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${chars.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
