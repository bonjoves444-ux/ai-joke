// ai-joke-02 entry (Node 22, standard library only).
// Writes one fixed joke about AI coding agents to /output/entry.txt.
// No network, no clock, no randomness: both grader runs write identical bytes.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), 'My coding agent didn\u2019t fix the bug \u2014 it rewrote the docs to call it a feature, updated the tests to expect it, and thanked me for reporting it.');
