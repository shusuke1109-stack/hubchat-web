export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>
        <p className="mb-8 text-sm" style={{ color: "#7878a8" }}>最終更新日：2026年3月19日</p>

        <div className="space-y-10" style={{ color: "#b8b8d8", lineHeight: "1.8" }}>
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#e8e8f8" }}>1. はじめに</h2>
            <p>
              HubChat（以下「本サービス」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。
              本プライバシーポリシーは、本サービスが収集する情報、その利用方法、および保護方法について説明します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#e8e8f8" }}>2. 収集する情報</h2>
            <p className="mb-3">本サービスは以下の情報を収集します：</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>メールアドレス（アカウント登録時）</li>
              <li>お支払い情報（Stripeを通じて処理され、当社は保持しません）</li>
              <li>アプリの利用状況に関する情報</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#e8e8f8" }}>3. 情報の利用目的</h2>
            <p className="mb-3">収集した情報は以下の目的で利用します：</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>アカウントの作成・管理</li>
              <li>サービスの提供・改善</li>
              <li>サポートへの対応</li>
              <li>重要なお知らせの送信</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#e8e8f8" }}>4. 情報の共有</h2>
            <p>
              本サービスは、以下の場合を除き、ユーザーの個人情報を第三者と共有しません：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>ユーザーの同意がある場合</li>
              <li>法律上の義務がある場合</li>
              <li>決済処理のためにStripe社と共有する場合（Stripeのプライバシーポリシーに従います）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#e8e8f8" }}>5. データの保管</h2>
            <p>
              ユーザーデータはSupabase（米国）のサーバーに保管されます。
              アカウント削除の際は、関連する個人情報を速やかに削除します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#e8e8f8" }}>6. Cookieについて</h2>
            <p>
              本サービスはセッション管理のためにCookieを使用します。
              ブラウザの設定でCookieを無効にすることができますが、一部のサービスが正常に機能しない場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#e8e8f8" }}>7. ユーザーの権利</h2>
            <p className="mb-3">ユーザーは以下の権利を有します：</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>個人情報へのアクセス・確認</li>
              <li>個人情報の訂正・削除の要求</li>
              <li>アカウントの削除</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#e8e8f8" }}>8. お問い合わせ</h2>
            <p>
              プライバシーに関するご質問・ご要望は以下までお問い合わせください：<br />
              <a href="mailto:support@hub-chat.net" style={{ color: "#e94560" }}>support@hub-chat.net</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#e8e8f8" }}>9. ポリシーの変更</h2>
            <p>
              本ポリシーは必要に応じて更新されることがあります。
              重要な変更がある場合は、登録メールアドレスにてお知らせします。
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
