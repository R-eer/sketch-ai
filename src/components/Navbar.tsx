import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 cursor-hover">
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" className="flex-shrink-0">
            <path d="M24 4 L28 8 L12 24 L6 26 L8 20 Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M20 8 L24 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8 20 L12 24" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M25 3 L29 7" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="font-[family-name:var(--font-caveat)] text-2xl font-bold text-white tracking-wide">Sketch AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Features", "How it Works", "Pricing"].map((link) => (
            <Link key={link} href={`#${link.toLowerCase().replace(/ /g, "-")}`}
              className="font-[family-name:var(--font-inter)] text-sm text-gray-400 hover:text-white transition-colors cursor-hover">
              {link}
            </Link>
          ))}
        </div>

        <Link href="/chat" className="cursor-hover px-5 py-2 bg-white text-black font-[family-name:var(--font-inter)] text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
