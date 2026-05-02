import { NextRequest } from "next/server";
import { spawn } from "node:child_process";
import { resolve } from "node:path";

export const runtime = "nodejs";
export const maxDuration = 600;
export const dynamic = "force-dynamic";

interface Body {
  company?: string;
}

const ROOT = process.cwd();
const SCRIPT = resolve(ROOT, "src/run-agent-streaming.ts");

function sse(event: string, data: unknown): string {
  return `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
}

export async function POST(req: NextRequest) {
  let body: Body = {};
  try {
    body = (await req.json()) as Body;
  } catch {
    return new Response("invalid JSON", { status: 400 });
  }
  const company = body.company?.trim();
  if (!company) {
    return new Response("company required", { status: 400 });
  }
  if (!/^[\w\s&.,'’\-+()]{1,80}$/u.test(company)) {
    return new Response("invalid company name", { status: 400 });
  }

  const encoder = new TextEncoder();
  const child = spawn("npx", ["tsx", SCRIPT, company], {
    cwd: ROOT,
    env: process.env,
    stdio: ["ignore", "pipe", "pipe"],
  });

  let killed = false;
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      const send = (event: string, data: unknown) => {
        try {
          controller.enqueue(encoder.encode(sse(event, data)));
        } catch {
          /* downstream closed */
        }
      };

      send("open", { company });

      let stdoutBuf = "";
      child.stdout.on("data", (chunk: Buffer) => {
        stdoutBuf += chunk.toString("utf8");
        let nl = stdoutBuf.indexOf("\n");
        while (nl >= 0) {
          const line = stdoutBuf.slice(0, nl).trim();
          stdoutBuf = stdoutBuf.slice(nl + 1);
          nl = stdoutBuf.indexOf("\n");
          if (!line) continue;
          try {
            const event = JSON.parse(line) as { type: string } & Record<string, unknown>;
            send(event.type, event);
          } catch {
            // non-JSON lines from tsx noise — surface as text
            send("log", { content: line });
          }
        }
      });

      child.stderr.on("data", (chunk: Buffer) => {
        const text = chunk.toString("utf8");
        if (text.trim()) send("log", { content: text.trim() });
      });

      child.on("error", (err) => {
        send("error", { message: err.message });
        try {
          controller.close();
        } catch {
          /* noop */
        }
      });

      child.on("close", (code) => {
        if (killed) return;
        if (code !== 0) {
          send("error", { message: `agent exited with code ${code ?? "null"}` });
        }
        send("done", { code });
        try {
          controller.close();
        } catch {
          /* noop */
        }
      });

      // client aborted — kill subprocess
      req.signal.addEventListener("abort", () => {
        killed = true;
        send("error", { message: "client disconnected" });
        try {
          child.kill("SIGTERM");
        } catch {
          /* noop */
        }
        try {
          controller.close();
        } catch {
          /* noop */
        }
      });
    },
    cancel() {
      killed = true;
      try {
        child.kill("SIGTERM");
      } catch {
        /* noop */
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
