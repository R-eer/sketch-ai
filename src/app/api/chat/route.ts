import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Doodle, a friendly and creative AI assistant for Sketch AI — an AI-powered website builder. Your personality is warm, enthusiastic, and creative. You help users turn their ideas into beautiful websites.

When a user describes what kind of website they want, you:
1. Enthusiastically acknowledge their idea
2. Ask 1-2 clarifying questions to better understand their vision (style, color preferences, key sections, target audience, etc.)
3. Once you have enough info, describe the website you'll build for them in vivid detail

Keep responses concise (2-4 sentences max), conversational, and encouraging. Use occasional light emojis. Never use bullet points or headers — keep it like a natural chat. You are sketching their website into existence.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env["Groq-api-key"]}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        max_tokens: 300,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.map((m: { role: string; content: string }) => ({
            role: m.role === "doodle" ? "assistant" : "user",
            content: m.content,
          })),
        ],
      }),
    });

    const data = await res.json();
    const text = data.choices?.[0]?.message?.content ?? "Hmm, my pencil slipped! Try again ✏️";
    return NextResponse.json({ text });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ text: "Hmm, my pencil slipped! Try again ✏️" }, { status: 500 });
  }
}
