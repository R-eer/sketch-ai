"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

function DoodleAvatar({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="9" cy="10" r="1.2" fill="white" />
      <circle cx="15" cy="10" r="1.2" fill="white" />
      <path d="M 9 14 Q 12 17 15 14" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function HeroSection() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    router.push(`/chat?msg=${encodeURIComponent(text)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 90% 70% at 50% 20%, rgba(255,255,255,0.06) 0%, transparent 65%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,255,255,0.03) 0%, transparent 70%)" }} />

      <svg className="absolute pointer-events-none select-none" width="800" height="800" viewBox="0 0 700 700" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: 0.05 }} aria-hidden="true">
        <path d="M 350 60 C 420 50, 510 70, 570 120 C 640 175, 665 260, 655 340 C 645 425, 610 510, 555 565 C 495 625, 420 650, 345 648 C 268 646, 190 618, 138 562 C 82 502, 52 418, 55 340 C 58 260, 92 178, 148 122 C 207 63, 278 50, 350 60 Z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 350 30 C 440 24, 545 55, 608 115 C 672 178, 695 275, 680 360 C 665 448, 618 532, 552 582 C 482 635, 396 658, 310 648 C 226 638, 146 598, 94 532 C 40 464, 18 374, 30 292 C 42 208, 92 128, 158 82 C 224 36, 296 24, 350 30 Z" stroke="white" strokeWidth="0.8" fill="none" strokeDasharray="10 5" />
      </svg>

      <div className="relative z-10 mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/4 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="font-[family-name:var(--font-inter)] text-xs text-gray-400 tracking-wide">AI website builder — powered by Doodle</span>
      </div>

      <h1 className="relative z-10 font-[family-name:var(--font-caveat)] text-6xl md:text-8xl font-bold text-white text-center leading-[1.1] mb-6 tracking-tight">
        Build your website,
        <br />
        <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #ffffff 0%, #888888 100%)" }}>
          just describe it.
        </span>
      </h1>

      <p className="relative z-10 font-[family-name:var(--font-inter)] text-lg text-gray-400 text-center max-w-lg mb-12 leading-relaxed">
        Tell Doodle what you want. Watch your website come to life — no code, no design skills needed.
      </p>

      <div className="relative z-10 w-full max-w-2xl">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 160" preserveAspectRatio="none" style={{ overflow: "visible" }} aria-hidden="true">
          <filter id="sketchy-hero">
            <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="3" result="noise" seed="7" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <rect x="2" y="2" width="596" height="156" rx="18" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" filter="url(#sketchy-hero)" />
        </svg>

        <div className="bg-gradient-to-b from-[#161616] to-[#101010] rounded-[18px] overflow-hidden shadow-2xl border border-white/5">
          <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/5">
            <div className="w-8 h-8 rounded-full bg-white/8 border border-white/15 flex items-center justify-center">
              <DoodleAvatar size={18} />
            </div>
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-caveat)] text-base font-semibold text-white leading-none">Doodle</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="font-[family-name:var(--font-inter)] text-[11px] text-gray-500">ready to sketch</span>
              </div>
            </div>
          </div>

          <div className="px-5 py-4 flex gap-3">
            <div className="w-6 h-6 rounded-full bg-white/8 border border-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <DoodleAvatar size={13} />
            </div>
            <div className="bg-white/5 border border-white/8 rounded-2xl rounded-bl-sm px-4 py-2.5">
              <p className="font-[family-name:var(--font-inter)] text-sm text-gray-300 leading-relaxed">
                Hey! I&apos;m Doodle 👋 Tell me what kind of website you want to build and I&apos;ll sketch it into existence!
              </p>
            </div>
          </div>

          <div className="px-4 pb-4 flex items-end gap-3">
            <textarea
              ref={textareaRef}
              className="cursor-hover flex-1 bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 font-[family-name:var(--font-inter)] resize-none focus:outline-none focus:border-white/25 transition-colors"
              placeholder="Tell Doodle what you want to build…"
              rows={2}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="cursor-hover flex-shrink-0 w-11 h-11 rounded-xl bg-white hover:bg-gray-100 disabled:opacity-25 disabled:cursor-not-allowed transition-all flex items-center justify-center shadow-lg"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="black" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <p className="relative z-10 font-[family-name:var(--font-inter)] text-xs text-gray-700 mt-5">
        Press Enter to start chatting with Doodle
      </p>
    </section>
  );
}
