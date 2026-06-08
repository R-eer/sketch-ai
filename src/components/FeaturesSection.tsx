const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
        <path d="M21 4 L12 20 L18 20 L15 32 L26 14 L20 14 Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    title: "Lightning Fast",
    description: "From idea to live website in seconds. No waiting, no loading screens — just instant sketching.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="12" stroke="white" strokeWidth="1.8" fill="none" />
        <circle cx="13" cy="14" r="2" fill="white" />
        <circle cx="23" cy="14" r="2" fill="white" />
        <circle cx="18" cy="23" r="2" fill="white" />
        <circle cx="10" cy="20" r="1.5" fill="white" />
        <circle cx="26" cy="20" r="1.5" fill="white" />
        <path d="M22 27 Q28 30 30 26" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
    title: "Beautiful by Default",
    description: "Every site Doodle creates is beautifully designed right out of the box. No design skills required.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
        <path d="M18 6 C22 6 28 10 28 18 L18 30 L8 18 C8 10 14 6 18 6 Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="18" cy="17" r="3" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M12 22 L8 26 L10 28 L14 24" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        <path d="M24 22 L28 26 L26 28 L22 24" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      </svg>
    ),
    title: "One-Click Launch",
    description: "Deploy your website instantly. No servers, no configs, no headaches. Sketch it, launch it.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-28 relative" style={{
      background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)",
    }}>
      <div className="max-w-5xl mx-auto">
        <p className="font-[family-name:var(--font-inter)] text-xs text-gray-600 uppercase tracking-[0.2em] text-center mb-4">Why choose us</p>
        <h2 className="font-[family-name:var(--font-caveat)] text-5xl md:text-6xl font-bold text-white text-center mb-4">Why Sketch AI?</h2>
        <p className="font-[family-name:var(--font-inter)] text-gray-500 text-center mb-16 max-w-md mx-auto text-base leading-relaxed">
          The simplest way to build the website you&apos;ve always imagined.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="cursor-hover relative group">
              <div className="relative bg-gradient-to-b from-[#181818] to-[#111] rounded-2xl p-8 h-full border border-white/6 transition-all duration-300 group-hover:border-white/12 group-hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)",
                }} />
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 260" preserveAspectRatio="none" style={{ overflow: "visible" }} aria-hidden="true">
                  <filter id={`f${i}`}>
                    <feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="3" result="noise" seed={i + 5} />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                  <rect x="2" y="2" width="296" height="256" rx="14" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" filter={`url(#f${i})`} />
                </svg>
                <div className="relative z-10">
                  <div className="mb-5 w-12 h-12 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-caveat)] text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
