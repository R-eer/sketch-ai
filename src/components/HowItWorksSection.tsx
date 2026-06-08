const steps = [
  { number: "1", title: "Describe your idea", description: "Type a plain-language description of your dream website into the chat." },
  { number: "2", title: "Doodle sketches it", description: "Our AI instantly generates a beautiful, fully-functional website from your words." },
  { number: "3", title: "Launch your site", description: "One click and your website is live for the world to see." },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-6 py-28 relative" style={{
      background: "linear-gradient(to bottom, #0a0a0a 0%, #0d0d0d 50%, #0a0a0a 100%)",
    }}>
      <div className="max-w-4xl mx-auto">
        <p className="font-[family-name:var(--font-inter)] text-xs text-gray-600 uppercase tracking-[0.2em] text-center mb-4">Simple process</p>
        <h2 className="font-[family-name:var(--font-caveat)] text-5xl md:text-6xl font-bold text-white text-center mb-4">How it works</h2>
        <p className="font-[family-name:var(--font-inter)] text-gray-500 text-center mb-20 max-w-md mx-auto leading-relaxed">
          Three steps from idea to live website. No experience needed.
        </p>

        <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-4">
          <div className="hidden md:block absolute top-8 left-[calc(16.66%)] right-[calc(16.66%)] h-px">
            <svg width="100%" height="20" viewBox="0 0 600 20" preserveAspectRatio="none" className="overflow-visible">
              <filter id="skline">
                <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="2" result="noise" seed="10" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <line x1="0" y1="10" x2="600" y2="10" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="10 6" filter="url(#skline)" />
            </svg>
          </div>

          {steps.map((step, i) => (
            <div key={i} className="cursor-hover flex-1 flex flex-col items-center text-center relative z-10">
              <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="absolute inset-0" aria-hidden="true">
                  <filter id={`sc${i}`}>
                    <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="3" result="noise" seed={i + 1} />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                  <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="rgba(255,255,255,0.03)" filter={`url(#sc${i})`} />
                </svg>
                <span className="font-[family-name:var(--font-caveat)] text-2xl font-bold text-white relative z-10">{step.number}</span>
              </div>
              <h3 className="font-[family-name:var(--font-caveat)] text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="font-[family-name:var(--font-inter)] text-sm text-gray-500 leading-relaxed max-w-[200px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
