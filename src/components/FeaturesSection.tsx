const features = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        {/* Lightning bolt */}
        <path
          d="M21 4 L12 20 L18 20 L15 32 L26 14 L20 14 Z"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
    title: "Lightning Fast",
    description:
      "From idea to live website in seconds. No waiting, no loading screens — just instant sketching.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        {/* Palette */}
        <circle cx="18" cy="18" r="12" stroke="white" strokeWidth="1.8" fill="none" />
        <circle cx="13" cy="14" r="2" fill="white" />
        <circle cx="23" cy="14" r="2" fill="white" />
        <circle cx="18" cy="23" r="2" fill="white" />
        <circle cx="10" cy="20" r="1.5" fill="white" />
        <circle cx="26" cy="20" r="1.5" fill="white" />
        {/* Handle */}
        <path d="M22 27 Q28 30 30 26" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
    title: "Beautiful by Default",
    description:
      "Every site Doodle creates is beautifully designed right out of the box. No design skills required.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        {/* Rocket */}
        <path
          d="M18 6 C22 6 28 10 28 18 L18 30 L8 18 C8 10 14 6 18 6 Z"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="18" cy="17" r="3" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M12 22 L8 26 L10 28 L14 24" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        <path d="M24 22 L28 26 L26 28 L22 24" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      </svg>
    ),
    title: "One-Click Launch",
    description:
      "Deploy your website instantly. No servers, no configs, no headaches. Sketch it, launch it.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-24 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <h2 className="font-caveat text-5xl font-bold text-white text-center mb-4">
          Why Sketch AI?
        </h2>
        <p className="font-inter text-gray-500 text-center mb-16 max-w-md mx-auto">
          The simplest way to build the website you&apos;ve always imagined.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="cursor-hover relative group">
              {/* Card */}
              <div className="bg-gradient-to-b from-[#1a1a1a] to-[#111] rounded-xl p-8 h-full transition-transform group-hover:-translate-y-1 duration-300">
                {/* Sketch border SVG */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none rounded-xl"
                  viewBox="0 0 300 250"
                  preserveAspectRatio="none"
                  style={{ overflow: "visible" }}
                  aria-hidden="true"
                >
                  <filter id={`sketchy-card-${i}`}>
                    <feTurbulence
                      type="turbulence"
                      baseFrequency="0.015"
                      numOctaves="3"
                      result="noise"
                      seed={i + 5}
                    />
                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="noise"
                      scale="4"
                      xChannelSelector="R"
                      yChannelSelector="G"
                    />
                  </filter>
                  <rect
                    x="2" y="2" width="296" height="246"
                    rx="12"
                    fill="none"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1.5"
                    filter={`url(#sketchy-card-${i})`}
                  />
                </svg>

                <div className="mb-5 opacity-80">{feature.icon}</div>
                <h3 className="font-caveat text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="font-inter text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
