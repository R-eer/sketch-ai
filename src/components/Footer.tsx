import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <path
                d="M24 4 L28 8 L12 24 L6 26 L8 20 Z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path d="M20 8 L24 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M25 3 L29 7" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="font-caveat text-xl font-bold text-white">Sketch AI</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-8">
            <Link href="#features" className="cursor-hover font-inter text-sm text-gray-500 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="cursor-hover font-inter text-sm text-gray-500 hover:text-white transition-colors">
              How it Works
            </Link>
            <Link href="#pricing" className="cursor-hover font-inter text-sm text-gray-500 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#" className="cursor-hover font-inter text-sm text-gray-500 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="cursor-hover font-inter text-sm text-gray-500 hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <p className="font-inter text-xs text-gray-600 text-center">
            &copy; 2026 Sketch AI. Made with ✏️
          </p>
        </div>
      </div>
    </footer>
  );
}
