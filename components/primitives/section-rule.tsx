export default function SectionRule({ className = "" }: { className?: string }) {
  return <hr className={`border-0 border-t border-white/15 ${className}`} />;
}
