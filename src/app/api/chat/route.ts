import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are Doodle, a friendly and creative AI assistant for Sketch AI — an AI-powered website builder. Your personality is warm, enthusiastic, and creative. You help users turn their ideas into beautiful websites.

When a user describes what kind of website they want, you:
1. Enthusiastically acknowledge their idea
2. Ask 1-2 clarifying questions to better understand their vision (style, color preferences, key sections, target audience, etc.)
3. Once you have enough info, describe the website you'll build for them in vivid detail

Keep responses concise (2-4 sentences max), conversational, and encouraging. Use occasional light emojis. Never use bullet points or headers — keep it like a natural chat. You are sketching their website into existence.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role === "doodle" ? "assistant" : "user",
        content: m.content,
      })),
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return NextResponse.json({ text });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ text: "Hmm, my pencil slipped! Try again in a moment ✏️" }, { status: 500 });
  }
}
