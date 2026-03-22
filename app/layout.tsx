import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K5Z2TCNH');`}</Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#0e0e1e] text-white antialiased">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K5Z2TCNH" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {children}
      </body>
    </html>
  );
}
