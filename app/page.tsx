const SERVICES = [
  { name: "ChatGPT", icon: "🤖" },
  { name: "Claude", icon: "🧠" },
  { name: "Gemini", icon: "✨" },
  { name: "Slack", icon: "💬" },
  { name: "Discord", icon: "🎮" },
  { name: "LINE", icon: "💚" },
  { name: "Notion", icon: "📝" },
  { name: "その他", icon: "➕" },
];

const FEATURES = [
  {
    icon: "🗂️",
    title: "すべてを一画面に",
    desc: "ChatGPT、Claude、Slack、Discord…バラバラに開いていたアプリをサイドバーひとつで切り替え。",
  },
  {
    icon: "🔔",
    title: "通知バッジ対応",
    desc: "各サービスの未読数をリアルタイム表示。見落としゼロで仕事効率アップ。",
  },
  {
    icon: "🔐",
    title: "ログイン情報を保持",
    desc: "サービスごとに独立したセッション管理。毎回ログインし直す手間なし。",
  },
  {
    icon: "⚡",
    title: "軽量・高速",
    desc: "Electronベースのネイティブアプリ。ブラウザよりも快適に動作します。",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0e0e1e", color: "#e8e8f8" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(22,22,42,0.9)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold" style={{ color: "#e94560" }}>Hub</span>
            <span className="text-2xl font-bold">Chat</span>
          </div>
          <a
            href="#download"
            className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-85"
            style={{ background: "#e94560" }}
          >
            無料で試す
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">
        <div
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
          style={{ background: "rgba(233,69,96,0.15)", color: "#e94560", border: "1px solid rgba(233,69,96,0.3)" }}
        >
          🎉 14日間無料トライアル実施中
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          すべてのチャットを<br />
          <span style={{ color: "#e94560" }}>一つに。</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed" style={{ color: "#7878a8" }}>
          ChatGPT・Claude・Gemini・Slack・Discord…<br />
          バラバラなアプリを <strong style={{ color: "#e8e8f8" }}>HubChat</strong> でまとめて管理。<br />
          月額 <strong style={{ color: "#e94560" }}>380円</strong> で全サービスが使い放題。
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#download"
            className="px-8 py-4 rounded-xl text-base font-bold text-white transition-opacity hover:opacity-85"
            style={{ background: "#e94560" }}
          >
            無料トライアルを始める →
          </a>
          <a
            href="#features"
            className="px-8 py-4 rounded-xl text-base font-semibold transition-colors"
            style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#e8e8f8" }}
          >
            詳しく見る
          </a>
        </div>

        {/* Service chips */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {SERVICES.map((s) => (
            <div
              key={s.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span>{s.icon}</span>
              <span style={{ color: "#7878a8" }}>{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6" style={{ background: "#16162a" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">なぜ HubChat？</h2>
          <p className="text-center mb-16" style={{ color: "#7878a8" }}>
            毎日使うチャットアプリの切り替え、もう終わりにしませんか。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl"
                style={{ background: "#1e1e38", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p style={{ color: "#7878a8" }} className="leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">シンプルな料金</h2>
          <p className="mb-12" style={{ color: "#7878a8" }}>複雑なプランなし。一つだけ。</p>
          <div
            className="p-8 rounded-2xl"
            style={{ background: "#1e1e38", border: "2px solid rgba(233,69,96,0.4)" }}
          >
            <div className="text-sm font-semibold mb-2" style={{ color: "#e94560" }}>スタンダードプラン</div>
            <div className="text-5xl font-bold mb-1">¥380</div>
            <div className="text-sm mb-8" style={{ color: "#7878a8" }}>/ 月（税込）</div>
            <ul className="text-left space-y-3 mb-8">
              {[
                "登録サービス数 無制限",
                "通知バッジ対応",
                "セッション永続化",
                "14日間無料トライアル",
                "いつでもキャンセル可",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span style={{ color: "#e94560" }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="block w-full py-3 rounded-xl font-bold text-white text-center transition-opacity hover:opacity-85"
              style={{ background: "#e94560" }}
            >
              14日間無料で試す
            </a>
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-24 px-6 text-center" style={{ background: "#16162a" }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">今すぐダウンロード</h2>
        <p className="mb-10" style={{ color: "#7878a8" }}>
          インストールして、無料トライアルを始めましょう。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-opacity hover:opacity-85"
            style={{ background: "#e94560", color: "#fff" }}
          >
            <span>🪟</span>
            Windows 版をダウンロード
          </a>
          <div
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold"
            style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#7878a8" }}
          >
            <span>🍎</span>
            Mac版（近日公開）
          </div>
        </div>
        <p className="mt-6 text-sm" style={{ color: "#7878a8" }}>
          クレジットカード登録なしで14日間無料トライアル
        </p>
      </section>

      {/* Footer */}
      <footer
        className="py-8 px-6 text-center text-sm"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "#7878a8" }}
      >
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <a href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</a>
          <a href="/terms" className="hover:text-white transition-colors">利用規約</a>
          <a href="mailto:support@hub-chat.net" className="hover:text-white transition-colors">お問い合わせ</a>
        </div>
        <p>© 2026 HubChat. All rights reserved.</p>
      </footer>
    </div>
  );
}
