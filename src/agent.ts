import "dotenv/config";
import { query } from "@anthropic-ai/claude-agent-sdk";

async function main() {
  const company = process.argv[2] ?? "Stripe";

  console.log(`\n[sfv-ic-agent] hello check — describing: ${company}\n`);

  const q = query({
    prompt: `In one sentence, describe ${company}'s core business.`,
    options: {
      model: "claude-opus-4-6",
      allowedTools: [],
    },
  });

  for await (const msg of q) {
    if (msg.type === "result" && msg.subtype === "success") {
      console.log(msg.result);
      console.log(`\n[sfv-ic-agent] ✓ pipe is open\n`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
