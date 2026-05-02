import "dotenv/config";
import { spawn } from "node:child_process";
import { resolve } from "node:path";

const COMPANIES = [
  "Taktile",
  "Hebbia",
  "Norm Ai",
  "Rillet",
  "Greenlite",
  "Ramp",
  "Sardine",
];

const CONCURRENCY = 3;

async function runOne(company: string): Promise<{ company: string; ok: boolean; ms: number }> {
  const start = Date.now();
  return new Promise((resolveP) => {
    const child = spawn("npx", ["tsx", resolve(process.cwd(), "src/agent.ts"), company], {
      stdio: ["ignore", "pipe", "pipe"],
      env: process.env,
    });

    let lastLine = "";
    child.stdout.on("data", (chunk) => {
      const text = chunk.toString();
      const lines = text.split("\n").filter((l: string) => l.trim());
      if (lines.length) lastLine = lines[lines.length - 1];
      // light progress signal
      process.stdout.write(`[${company}] `);
    });
    child.stderr.on("data", (chunk) => {
      process.stderr.write(`[${company} ERR] ${chunk}`);
    });
    child.on("close", (code) => {
      const ms = Date.now() - start;
      const ok = code === 0;
      console.log(`\n[${company}] ${ok ? "✓" : "✗"} (${Math.round(ms / 1000)}s) — ${lastLine}`);
      resolveP({ company, ok, ms });
    });
  });
}

async function main() {
  console.log(`\n[batch] running ${COMPANIES.length} companies, concurrency=${CONCURRENCY}\n`);
  const queue = [...COMPANIES];
  const results: Array<{ company: string; ok: boolean; ms: number }> = [];

  async function worker() {
    while (queue.length) {
      const company = queue.shift()!;
      const result = await runOne(company);
      results.push(result);
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

  console.log(`\n[batch] complete\n`);
  const ok = results.filter((r) => r.ok).length;
  const failed = results.filter((r) => !r.ok);
  console.log(`  succeeded: ${ok}/${results.length}`);
  if (failed.length) {
    console.log(`  failed:`);
    failed.forEach((f) => console.log(`    - ${f.company}`));
  }
  const totalMin = Math.round(results.reduce((a, r) => a + r.ms, 0) / 60000);
  console.log(`  total wall time: ~${Math.round(Math.max(...results.map((r) => r.ms)) / 60000)} min`);
  console.log(`  total compute: ~${totalMin} min\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
