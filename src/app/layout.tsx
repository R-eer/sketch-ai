import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import "./globals.css";
import CursorEffect from "@/components/CursorEffect";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sketch AI — Build websites by describing them",
  description: "Tell Doodle what you want. Watch your website come to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${caveat.variable} ${inter.variable}`}>
      <body className="bg-[#0a0a0a] text-white antialiased">
        <CursorEffect />
        {children}
      </body>
    </html>
  );
}
