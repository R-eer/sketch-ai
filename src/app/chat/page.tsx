"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface Message {
  id: number;
  role: "user" | "doodle";
  content: string;
}

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

function ChatContent() {
  const searchParams = useSearchParams();
  const initialMessage = searchParams.get("msg") || "";

  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "doodle", content: "Hey! I'm Doodle 👋 Tell me what kind of website you want to build and I'll sketch it into existence!" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const nextId = useRef(1);
  const hasSentInitial = useRef(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (overrideText?: string) => {
    const text = (overrideText ?? input).trim();
    if (!text || isTyping) return;

    const userMsg: Message = { id: nextId.current++, role: "user", content: text };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { id: nextId.current++, role: "doodle", content: data.text }]);
    } catch {
      setMessages((prev) => [...prev, { id: nextId.current++, role: "doodle", content: "Hmm, my pencil slipped! Try again ✏️" }]);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    if (initialMessage && !hasSentInitial.current) {
      hasSentInitial.current = true;
      sendMessage(initialMessage);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialMessage]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col" style={{
      background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 60%), #0a0a0a",
    }}>
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/5 backdrop-blur-sm bg-black/30 sticky top-0 z-10">
        <Link href="/" className="flex items-center gap-2 cursor-hover group">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <path d="M24 4 L28 8 L12 24 L6 26 L8 20 Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M20 8 L24 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M25 3 L29 7" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="font-[family-name:var(--font-caveat)] text-xl font-bold text-white">Sketch AI</span>
        </Link>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-400 font-[family-name:var(--font-inter)]">Doodle is online</span>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "doodle" && (
                <div className="w-8 h-8 rounded-full bg-white/8 border border-white/15 flex items-center justify-center flex-shrink-0 mt-1">
                  <DoodleAvatar size={18} />
                </div>
              )}
              <div className={`max-w-[75%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                {msg.role === "doodle" && (
                  <span className="text-xs text-gray-600 font-[family-name:var(--font-inter)] ml-1">Doodle</span>
                )}
                <div className={`px-4 py-3 rounded-2xl font-[family-name:var(--font-inter)] text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-white text-black rounded-br-sm"
                    : "bg-white/6 text-gray-100 rounded-bl-sm border border-white/10"
                }`}>
                  {msg.content}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-white/8 border border-white/15 flex items-center justify-center flex-shrink-0 mt-1">
                <DoodleAvatar size={18} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-600 font-[family-name:var(--font-inter)] ml-1">Doodle</span>
                <div className="bg-white/6 border border-white/10 px-5 py-4 rounded-2xl rounded-bl-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="sticky bottom-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a] to-transparent pt-4 pb-6 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative flex items-end gap-3 bg-[#111] border border-white/10 rounded-2xl px-4 py-3 focus-within:border-white/25 transition-colors">
            <textarea
              ref={inputRef}
              className="flex-1 bg-transparent text-sm text-white placeholder-gray-600 font-[family-name:var(--font-inter)] resize-none focus:outline-none max-h-32"
              placeholder="Tell Doodle what you want to build…"
              rows={1}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                e.target.style.height = "auto";
                e.target.style.height = Math.min(e.target.scrollHeight, 128) + "px";
              }}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || isTyping}
              className="cursor-hover flex-shrink-0 w-9 h-9 rounded-xl bg-white hover:bg-gray-100 disabled:opacity-25 disabled:cursor-not-allowed transition-all flex items-center justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <p className="text-center text-xs text-gray-700 mt-3 font-[family-name:var(--font-inter)]">
            Enter to send · Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ChatPage() {
  return (
    <Suspense>
      <ChatContent />
    </Suspense>
  );
}
