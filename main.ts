// SPDX-License-Identifier: MIT
// The 3AM Commit Message — make.fun bounty u-kiencx-the-3am-commit-message-10bc7b35
// Writes the funniest one-line git commit message an AI coding agent types at 3am
// after a long night of fixing its own bugs. Gate: 1-139 UTF-8 characters, one line.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "fix: it works now. I changed 47 things at once and I'm too tired to find out which one did it";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${[...line].length} chars to /output/entry.txt`);
