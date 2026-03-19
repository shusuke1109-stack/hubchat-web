import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HubChat - すべてのチャットを一つに",
  description: "ChatGPT、Claude、Gemini、Slack、Discord…バラバラなチャットアプリをHubChatで一元管理。月額380円で全サービスをまとめて使えるデスクトップアプリ。",
  keywords: "HubChat, チャット統合, ChatGPT, Claude, Gemini, デスクトップアプリ",
  openGraph: {
    title: "HubChat - すべてのチャットを一つに",
    description: "バラバラなチャットアプリをHubChatで一元管理。月額380円。",
    url: "https://hub-chat.net",
    siteName: "HubChat",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0e0e1e] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
