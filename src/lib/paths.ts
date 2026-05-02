import { resolve } from "node:path";

export const ROOT = process.cwd();
export const OUTPUT_DIR = resolve(ROOT, "output");
export const PROMPTS_DIR = resolve(ROOT, "prompts");
export const SRC_DIR = resolve(ROOT, "src");
