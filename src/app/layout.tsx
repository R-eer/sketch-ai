import type { Metadata } from "next";
import "./globals.css";
import CursorEffect from "@/components/CursorEffect";

export const metadata: Metadata = {
  title: "Sketch AI",
  description: "AI-powered website builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white antialiased">
        <CursorEffect />
        {children}
      </body>
    </html>
  );
}
