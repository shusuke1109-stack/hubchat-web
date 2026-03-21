export default function TokushoPage() {
  return (
    <div style={{ background: "#0e0e1e", color: "#e8e8f8", minHeight: "100vh" }}>
      <header style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(14,14,30,0.92)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "16px 20px", display: "flex", alignItems: "center", gap: "4px" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "4px", textDecoration: "none" }}>
            <span style={{ fontSize: "20px", fontWeight: 900, color: "#4ade80" }}>Hub</span>
            <span style={{ fontSize: "20px", fontWeight: 900, color: "#e8e8f8" }}>Chat</span>
          </a>
        </div>
      </header>

      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>特定商取引法に基づく表記</h1>
        <p style={{ fontSize: "13px", color: "#7878a8", marginBottom: "40px" }}>
          最終更新日：2026年3月22日
        </p>

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
          <tbody>
            {[
              { label: "販売業者", value: "SKworks" },
              { label: "運営責任者", value: "代表者" },
              {
                label: "所在地",
                value: "※所在地はご請求時に遅延なく開示いたします。",
              },
              {
                label: "電話番号",
                value: "※電話番号はご請求時に遅延なく開示いたします。",
              },
              { label: "メールアドレス", value: "hubchat.support@gmail.com" },
              { label: "サービス名", value: "HubChat" },
              { label: "販売価格", value: "月額380円（税込）" },
              { label: "支払い方法", value: "クレジットカード（Stripe決済）" },
              { label: "支払い時期", value: "お申し込み時にお支払いいただきます。以降は毎月自動更新となります。" },
              { label: "サービス提供時期", value: "決済完了後、即時ご利用いただけます。" },
              { label: "返品・キャンセルについて", value: "サービスの性質上、返金は原則承っておりません。ただし、トライアル期間中はいつでもキャンセル可能です。" },
              { label: "動作環境", value: "Windows 10以降（64bit）" },
            ].map(({ label, value }) => (
              <tr
                key={label}
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <td
                  style={{
                    padding: "16px 20px 16px 0",
                    color: "#7878a8",
                    whiteSpace: "nowrap",
                    verticalAlign: "top",
                    width: "180px",
                    fontWeight: 600,
                  }}
                >
                  {label}
                </td>
                <td style={{ padding: "16px 0", lineHeight: "1.7" }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "32px 20px", textAlign: "center", fontSize: "12px", color: "#7878a8" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "16px", flexWrap: "wrap" }}>
          <a href="/privacy" style={{ color: "#7878a8", textDecoration: "none" }}>プライバシーポリシー</a>
          <a href="/terms" style={{ color: "#7878a8", textDecoration: "none" }}>利用規約</a>
          <a href="/tokusho" style={{ color: "#7878a8", textDecoration: "none" }}>特定商取引法に基づく表記</a>
          <a href="mailto:hubchat.support@gmail.com" style={{ color: "#7878a8", textDecoration: "none" }}>お問い合わせ</a>
        </div>
        <p>© 2026 HubChat. All rights reserved.</p>
      </footer>
    </div>
  )
}
