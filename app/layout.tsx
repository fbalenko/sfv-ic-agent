import type { Metadata } from "next";
import { Inter, Oswald, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["500", "600", "700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SFV IC Agent — AI-native financial infrastructure",
  description:
    "An IC-memo and market-map research agent for the AI-native financial infrastructure thesis at Salesforce Ventures. Built by Filip Balenko.",
  metadataBase: new URL("https://sfv-ic.com"),
  openGraph: {
    title: "SFV IC Agent",
    description:
      "Operator-grade IC memos and market maps for AI-native financial infrastructure.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${sourceSerif.variable} ${jetbrains.variable}`}
    >
      <body className="noise-bg min-h-screen flex flex-col">
        <Header />
        <main className="relative z-[1] flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
