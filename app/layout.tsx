import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "HubChat - 全部のチャット、ひとつのアプリに。",
  description: "Slack、Chatwork、Teams、LINE WORKS…増え続けるチャットを1画面に集約。返信漏れゼロで仕事が変わる。月額380円・14日間無料トライアル。",
  keywords: "HubChat, チャット統合, Slack, Chatwork, Teams, LINE WORKS, デスクトップアプリ, 返信漏れ",
  openGraph: {
    title: "HubChat - 全部のチャット、ひとつのアプリに。",
    description: "Slack、Chatwork、Teams、LINE WORKS…増え続けるチャットを1画面に集約。返信漏れゼロ。",
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
    <html lang="ja" className={`${notoSansJP.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0e0e1e] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
