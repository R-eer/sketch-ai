import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-hover">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="flex-shrink-0">
            {/* Hand-drawn pencil */}
            <path
              d="M24 4 L28 8 L12 24 L6 26 L8 20 Z"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M20 8 L24 12"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M8 20 L12 24"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Eraser mark */}
            <path
              d="M25 3 L29 7"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-caveat text-2xl font-bold text-white tracking-wide">
            Sketch AI
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="font-inter text-sm text-gray-400 hover:text-white transition-colors cursor-hover"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="font-inter text-sm text-gray-400 hover:text-white transition-colors cursor-hover"
          >
            How it Works
          </Link>
          <Link
            href="#pricing"
            className="font-inter text-sm text-gray-400 hover:text-white transition-colors cursor-hover"
          >
            Pricing
          </Link>
        </div>

        {/* CTA */}
        <button className="cursor-hover relative px-5 py-2 bg-white text-black font-inter text-sm font-medium rounded-sm hover:bg-gray-100 transition-colors sketch-btn">
          Get Started
          {/* Sketch border effect */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{ overflow: "visible" }}
          >
            <rect
              x="1" y="1" width="98" height="98"
              rx="2"
              fill="none"
              stroke="black"
              strokeWidth="1.5"
              strokeDasharray="0"
              style={{ vectorEffect: "non-scaling-stroke" }}
              pathLength="200"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
