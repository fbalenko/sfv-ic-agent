import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const ROOT = dirname(fileURLToPath(import.meta.url));

const config: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: ROOT,
  serverExternalPackages: ["@anthropic-ai/claude-agent-sdk"],
  experimental: {
    optimizePackageImports: ["recharts", "react-markdown", "framer-motion"],
  },
};

export default config;
