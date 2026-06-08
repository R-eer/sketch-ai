import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-14" style={{
      background: "linear-gradient(to top, #0d0d0d 0%, #0a0a0a 100%)",
    }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          <div className="flex items-center gap-2.5">
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
              <path d="M24 4 L28 8 L12 24 L6 26 L8 20 Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M20 8 L24 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M25 3 L29 7" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="font-[family-name:var(--font-caveat)] text-xl font-bold text-white">Sketch AI</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {["Features", "How it Works", "Pricing", "Privacy", "Terms"].map((link) => (
              <Link key={link} href="#" className="cursor-hover font-[family-name:var(--font-inter)] text-sm text-gray-600 hover:text-gray-300 transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <p className="font-[family-name:var(--font-inter)] text-xs text-gray-700 text-center">
            &copy; 2026 Sketch AI. Made with ✏️
          </p>
        </div>
      </div>
    </footer>
  );
}
