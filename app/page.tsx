import MacWaitlist from './components/MacWaitlist'

// ダウンロードURLはここで管理
const DOWNLOAD_URL_WINDOWS = "https://github.com/shusuke1109-stack/hubchat-web/releases/latest/download/HubChat.Setup.1.0.0.exe";

const PAIN_POINTS = [
  { icon: "😰", text: "チャットが増えすぎて返信漏れが起きる" },
  { icon: "⏱️", text: "アプリを切り替えるたびに時間が無駄になる" },
  { icon: "😵", text: "どこに何の連絡が来たか分からなくなる" },
];

const SOLUTIONS = [
  {
    icon: "🗂️",
    title: "1画面で全サービスを管理",
    desc: "Slack、Chatwork、Teams、LINE WORKS…すべてのチャットをサイドバー1つで切り替え。タブをたくさん開く必要はもうありません。",
  },
  {
    icon: "🔔",
    title: "返信漏れゼロ",
    desc: "各サービスの未読数をリアルタイムで表示。どのチャットに新着メッセージがあるか一目でわかります。",
  },
  {
    icon: "🇯🇵",
    title: "日本のチャットツールに完全対応",
    desc: "Chatwork・LINE WORKS など、日本のビジネスで使われるサービスに対応。海外ツールだけじゃありません。",
  },
];

const SERVICES = [
  { name: "Slack",       color: "#4A154B", bg: "rgba(74,21,75,0.2)",   emoji: "💬" },
  { name: "Chatwork",    color: "#DB3E24", bg: "rgba(219,62,36,0.15)", emoji: "💼" },
  { name: "Teams",       color: "#6264A7", bg: "rgba(98,100,167,0.2)", emoji: "👥" },
  { name: "Discord",     color: "#5865F2", bg: "rgba(88,101,242,0.2)", emoji: "🎮" },
  { name: "Messenger",   color: "#0084FF", bg: "rgba(0,132,255,0.15)", emoji: "💙" },
  { name: "LINE WORKS",  color: "#00B900", bg: "rgba(0,185,0,0.15)",   emoji: "💚" },
];

const PRICING_ITEMS = [
  "登録サービス数 無制限",
  "通知バッジ対応",
  "セッション永続化",
  "14日間無料トライアル",
  "いつでもキャンセル可",
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0e0e1e", color: "#e8e8f8" }}>

      {/* ── Header ── */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(14,14,30,0.92)" }}
      >
        <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-1 select-none">
            <span className="text-xl font-black" style={{ color: "#4ade80" }}>Hub</span>
            <span className="text-xl font-black">Chat</span>
          </div>
          <a
            href="#download"
            className="px-5 py-2 rounded-lg text-sm font-bold transition-opacity hover:opacity-80" style={{ background: "#4ade80", color: "#0d1526" }}
          >
            無料で試す
          </a>
        </div>
      </header>

      {/* ── ① Hero ── */}
      <section className="flex flex-col items-center justify-center text-center px-5 pt-24 pb-20">
        <div
          className="fade-in-up inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-6"
          style={{ background: "rgba(74,222,128,0.12)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.3)" }}
        >
          🎉 14日間無料トライアル実施中
        </div>
        <h1 className="fade-in-up fade-delay-1 text-4xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
          全部のチャット、<br />
          <span style={{ color: "#4ade80" }}>ひとつのアプリに。</span>
        </h1>
        <p
          className="fade-in-up fade-delay-2 text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          style={{ color: "#7878a8" }}
        >
          Slack、Chatwork、Teams、LINE WORKS…<br className="hidden sm:block" />
          増え続けるチャットを1画面に集約。<br />
          <strong style={{ color: "#e8e8f8" }}>返信漏れゼロで仕事が変わる。</strong>
        </p>
        <div className="fade-in-up fade-delay-3 flex flex-col sm:flex-row gap-3">
          <a
            href="#download"
            className="px-8 py-4 rounded-xl text-base font-bold transition-opacity hover:opacity-80" style={{ background: "#4ade80", color: "#0d1526" }}
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
      </section>

      {/* ── ② 共感セクション ── */}
      <section style={{ background: "#16162a" }} className="py-20 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-3">
            こんなこと、ありませんか？
          </h2>
          <p className="text-center text-sm mb-12" style={{ color: "#7878a8" }}>
            チャットツールが増えるほど、仕事はなぜか増える。
          </p>
          <div className="flex flex-col gap-4">
            {PAIN_POINTS.map((p) => (
              <div
                key={p.text}
                className="flex items-center gap-4 px-6 py-5 rounded-2xl"
                style={{ background: "#1e1e38", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span className="text-2xl shrink-0">{p.icon}</span>
                <p className="text-sm md:text-base font-medium">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ③ 解決策セクション ── */}
      <section id="features" className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-3">
            HubChat が全部まとめます
          </h2>
          <p className="text-center text-sm mb-14" style={{ color: "#7878a8" }}>
            毎日使うチャットの切り替え、もう終わりにしましょう。
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {SOLUTIONS.map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-2xl"
                style={{ background: "#16162a", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-base font-bold mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7878a8" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ④ 対応サービスセクション ── */}
      <section className="py-20 px-5" style={{ background: "#16162a" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-3">対応サービス</h2>
          <p className="text-sm mb-12" style={{ color: "#7878a8" }}>
            主要なビジネスチャットを網羅。URLを貼るだけで追加できます。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICES.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold"
                style={{
                  background: s.bg,
                  border: `1px solid ${s.color}40`,
                  color: s.color,
                }}
              >
                <span>{s.emoji}</span>
                <span>{s.name}</span>
              </div>
            ))}
            <div
              className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#7878a8" }}
            >
              <span>➕</span>
              <span>URLで自由に追加</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ⑤ 料金セクション ── */}
      <section id="pricing" className="py-20 px-5">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-3">シンプルな料金</h2>
          <p className="text-sm mb-12" style={{ color: "#7878a8" }}>複雑なプランなし。一つだけ。</p>
          <div
            className="p-8 rounded-2xl"
            style={{ background: "#16162a", border: "2px solid rgba(233,69,96,0.4)" }}
          >
            <div className="text-xs font-bold mb-2" style={{ color: "#4ade80" }}>個人プラン</div>
            <div className="mb-1">
              <span className="text-5xl font-black">¥380</span>
            </div>
            <div className="text-sm mb-8" style={{ color: "#7878a8" }}>/ 月（税込）</div>
            <ul className="text-left space-y-3 mb-8">
              {PRICING_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span style={{ color: "#4ade80" }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="block w-full py-3.5 rounded-xl font-bold text-center transition-opacity hover:opacity-80" style={{ background: "#4ade80", color: "#0d1526" }}
            >
              14日間無料で試す
            </a>
          </div>
        </div>
      </section>

      {/* ── ⑥ CTA / ダウンロードセクション ── */}
      <section id="download" className="py-20 px-5 text-center" style={{ background: "#16162a" }}>
        <h2 className="text-2xl md:text-3xl font-black mb-3">まず無料で試す</h2>
        <p className="text-sm mb-10" style={{ color: "#7878a8" }}>
          クレジットカード登録なし。14日間、すべての機能を無料で。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={DOWNLOAD_URL_WINDOWS}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold transition-opacity hover:opacity-80"
            style={{ background: "#4ade80", color: "#0d1526" }}
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
        <div className="mt-8">
          <p className="text-sm mb-1" style={{ color: "#7878a8" }}>Mac版のリリース通知を受け取る</p>
          <MacWaitlist />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="py-8 px-5 text-center text-xs"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "#7878a8" }}
      >
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <a href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</a>
          <a href="/terms" className="hover:text-white transition-colors">利用規約</a>
          <a href="mailto:hubchat.support@gmail.com" className="hover:text-white transition-colors">お問い合わせ</a>
        </div>
        <p>© 2026 HubChat. All rights reserved.</p>
      </footer>

    </div>
  );
}
