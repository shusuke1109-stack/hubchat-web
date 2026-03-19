export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0e0e1e", color: "#e8e8f8" }}>
      {/* Header */}
      <header
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(22,22,42,0.9)" }}
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-1">
            <span className="text-2xl font-bold" style={{ color: "#e94560" }}>Hub</span>
            <span className="text-2xl font-bold">Chat</span>
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">利用規約</h1>
        <p className="mb-8 text-sm" style={{ color: "#7878a8" }}>最終更新日：2026年3月19日</p>

        <div className="space-y-10" style={{ color: "#b8b8d8", lineHeight: "1.8" }}>
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#e8e8f8" }}>第1条（適用）</h2>
            <p>
              本利用規約（以下「本規約」）は、HubChat（以下「本サービス」）の利用に関する条件を定めるものです。
              ユーザーは本規約に同意の上、本サービスをご利用ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#e8e8f8" }}>第2条（サービスの内容）</h2>
            <p>
              本サービスは、複数のWebサービスを一つのデスクトップアプリケーションで管理できるツールです。
              月額380円（税込）のサブスクリプション制で提供します。
              新規登録から14日間は無料でご利用いただけます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#e8e8f8" }}>第3条（アカウント登録）</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>正確な情報でアカウントを登録してください</li>
              <li>アカウントの管理はユーザー自身の責任で行ってください</li>
              <li>第三者へのアカウントの譲渡・貸与は禁止します</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#e8e8f8" }}>第4条（料金・支払い）</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>月額料金は380円（税込）です</li>
              <li>支払いはStripeを通じてクレジットカードで行います</li>
              <li>無料トライアル期間（14日間）終了後、自動的に課金が開始されます</li>
              <li>いつでもキャンセル可能です。キャンセル後は期間終了まで利用できます</li>
              <li>返金は原則対応しておりません</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#e8e8f8" }}>第5条（禁止事項）</h2>
            <p className="mb-3">以下の行為を禁止します：</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>法令または公序良俗に違反する行為</li>
              <li>本サービスのリバースエンジニアリング・改ざん</li>
              <li>他のユーザーへの迷惑行為</li>
              <li>本サービスの運営を妨害する行為</li>
              <li>不正アクセスその他の不正行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#e8e8f8" }}>第6条（免責事項）</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>本サービスは現状有姿で提供され、完全性・正確性・有用性を保証しません</li>
              <li>サービスの中断・停止・終了によって生じた損害について責任を負いません</li>
              <li>連携する外部サービス（ChatGPT、Slack等）の利用はそれぞれの規約に従います</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#e8e8f8" }}>第7条（サービスの変更・終了）</h2>
            <p>
              本サービスは事前通知なく内容を変更、または終了する場合があります。
              サービス終了の場合は、登録メールアドレスにて事前にお知らせします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#e8e8f8" }}>第8条（準拠法・管轄）</h2>
            <p>
              本規約は日本法に準拠します。
              本サービスに関する紛争については、大阪地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#e8e8f8" }}>第9条（お問い合わせ）</h2>
            <p>
              本規約に関するご質問は以下までお問い合わせください：<br />
              <a href="mailto:support@hub-chat.net" style={{ color: "#e94560" }}>support@hub-chat.net</a>
            </p>
          </section>
        </div>
      </main>

      <footer
        className="py-8 px-6 text-center text-sm mt-16"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "#7878a8" }}
      >
        <p>© 2026 HubChat. All rights reserved.</p>
      </footer>
    </div>
  );
}
