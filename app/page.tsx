import HomeContent from "@/components/home/home-content";

export const dynamic = "force-dynamic"; // re-read disk on every request

export default function Home() {
  return <HomeContent />;
}
