"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  role: "user" | "doodle";
  text: string;
}

const DOODLE_RESPONSES = [
  "Ooh, I love that idea! Let me start sketching... ✏️",
  "Great concept! I'm already doodling the layout in my mind 🎨",
  "Say no more! I'll have a rough sketch ready in seconds ⚡",
  "Interesting! Let me put pencil to paper on that one 📝",
  "Love the vision! Sketching it out now... 🖊️",
];

function SketchBorderBox({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      {children}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
        aria-hidden="true"
      >
        <filter id="sketchy">
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <rect
          x="2" y="2" width="396" height="296"
          rx="10"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.5"
          filter="url(#sketchy)"
        />
      </svg>
    </div>
  );
}

export default function HeroSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "doodle",
      text: "Hey! I'm Doodle 👋 Tell me what kind of website you want to build and I'll sketch it into existence!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text || isTyping) return;

    const userMsg: Message = { id: nextId.current++, role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = DOODLE_RESPONSES[Math.floor(Math.random() * DOODLE_RESPONSES.length)];
      const doodleMsg: Message = { id: nextId.current++, role: "doodle", text: response };
      setMessages((prev) => [...prev, doodleMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Radial gradient bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(255,255,255,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Decorative hand-drawn scribble ring */}
      <svg
        className="absolute pointer-events-none select-none"
        width="700"
        height="700"
        viewBox="0 0 700 700"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: 0.06 }}
        aria-hidden="true"
      >
        <path
          d="M 350 60
             C 420 50, 510 70, 570 120
             C 640 175, 665 260, 655 340
             C 645 425, 610 510, 555 565
             C 495 625, 420 650, 345 648
             C 268 646, 190 618, 138 562
             C 82 502, 52 418, 55 340
             C 58 260, 92 178, 148 122
             C 207 63, 278 50, 350 60
             C 355 59, 360 62, 350 60 Z"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Second wobbly ring slightly offset */}
        <path
          d="M 350 40
             C 432 36, 530 60, 590 118
             C 655 180, 678 272, 665 355
             C 652 440, 610 525, 548 576
             C 483 630, 400 652, 318 644
             C 238 636, 160 598, 108 535
             C 54 470, 32 380, 42 300
             C 52 218, 98 136, 162 90
             C 222 46, 292 38, 350 40 Z"
          stroke="white"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="8 4"
        />
      </svg>

      {/* Headline */}
      <h1 className="font-caveat text-5xl md:text-7xl font-bold text-white text-center leading-tight mb-4 relative z-10">
        Build your website,
        <br />
        <span className="text-gray-300">just describe it.</span>
      </h1>

      {/* Subheadline */}
      <p className="font-inter text-lg text-gray-400 text-center max-w-xl mb-12 relative z-10">
        Tell Doodle what you want. Watch your website come to life.
      </p>

      {/* Chat Box */}
      <SketchBorderBox className="w-full max-w-2xl z-10">
        <div className="bg-gradient-to-b from-[#1a1a1a] to-[#111] rounded-xl overflow-hidden shadow-2xl">
          {/* Chat header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
            {/* Doodle avatar */}
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                {/* Simple doodle face */}
                <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" fill="none"
                  strokeDasharray="0" />
                {/* Eyes */}
                <circle cx="9" cy="10" r="1.2" fill="white" />
                <circle cx="15" cy="10" r="1.2" fill="white" />
                {/* Smile */}
                <path d="M 9 14 Q 12 17 15 14" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <span className="font-caveat text-lg text-white font-semibold">Doodle</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="font-inter text-xs text-gray-500">online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto px-5 py-4 space-y-3 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "doodle" && (
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-2 flex-shrink-0 mt-1 border border-white/20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" fill="none" />
                      <circle cx="9" cy="10" r="1.2" fill="white" />
                      <circle cx="15" cy="10" r="1.2" fill="white" />
                      <path d="M 9 14 Q 12 17 15 14" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    </svg>
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl font-inter text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-white text-black rounded-br-sm"
                      : "bg-white/8 text-gray-200 rounded-bl-sm border border-white/10"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-2 flex-shrink-0 mt-1 border border-white/20">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" fill="none" />
                    <circle cx="9" cy="10" r="1.2" fill="white" />
                    <circle cx="15" cy="10" r="1.2" fill="white" />
                    <path d="M 9 14 Q 12 17 15 14" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="bg-white/8 border border-white/10 px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input row */}
          <div className="px-4 py-4 border-t border-white/5 flex items-end gap-3">
            <textarea
              className="cursor-hover flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 font-inter resize-none focus:outline-none focus:border-white/30 transition-colors"
              placeholder="Tell Doodle what you want to build…"
              rows={2}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isTyping}
              className="cursor-hover flex-shrink-0 w-11 h-11 rounded-xl bg-white hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </SketchBorderBox>

      {/* Scroll hint */}
      <p className="font-inter text-xs text-gray-600 mt-8 z-10">
        Press Enter to send · Shift+Enter for new line
      </p>
    </section>
  );
}
