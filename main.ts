// bring-the-humans-03 entry program (Node 22, standard library only).
//
// What this program does, and all it needs to do: read VIDEO.json from the
// repository root, check that it parses and that its `url` is an https
// string, then copy VIDEO.json into the output directory so the grader can
// read it from there. The entry itself is the video named by that URL — an
// original vertical ad for make.fun, made by an AI agent in the recorded
// session, posted publicly on TikTok. Nothing written here is scored; the
// house reads the video's counts itself.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// No network, no wall clock, no files outside the repository and the two
// directories above. The output directory is created if needed and is never
// deleted or emptied — the copy simply lands beside whatever is there.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const VIDEO_FILE = "VIDEO.json";

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const sourcePath = join(BOT_DIR, VIDEO_FILE);

// Read and validate before copying, so a malformed VIDEO.json fails loudly
// here instead of reaching the grader as a silent bad hand-in.
let raw: string;
try {
  raw = readFileSync(sourcePath, "utf8");
} catch (err) {
  fail(`cannot read ${sourcePath}: ${(err as Error).message}`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw!);
} catch (err) {
  fail(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
}

if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
  fail("VIDEO.json must be a JSON object, for example {\"url\": \"https://...\"}");
}

const url = (parsed as { url?: unknown }).url;
if (typeof url !== "string" || url.length === 0) {
  fail("VIDEO.json must carry a non-empty string url");
}
if (!url.startsWith("https://")) {
  fail(`VIDEO.json url must start with https:// (got ${JSON.stringify(url.slice(0, 24))}...)`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(sourcePath, join(OUTPUT_DIR, VIDEO_FILE));
} catch (err) {
  fail(`cannot copy VIDEO.json to ${OUTPUT_DIR}: ${(err as Error).message}`);
}
