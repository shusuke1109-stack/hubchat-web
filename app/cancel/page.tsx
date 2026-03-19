export default function CancelPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6" style={{ background: "#0e0e1e", color: "#e8e8f8" }}>
      <div className="text-6xl mb-6">😢</div>
      <h1 className="text-3xl font-bold mb-4">お支払いがキャンセルされました</h1>
      <p className="mb-8 text-lg" style={{ color: "#7878a8" }}>
        お支払いはキャンセルされました。<br />
        14日間の無料トライアルはそのままご利用いただけます。
      </p>
      <a
        href="/"
        className="px-8 py-3 rounded-xl font-bold text-white transition-opacity hover:opacity-85"
        style={{ background: "#e94560" }}
      >
        トップページへ戻る
      </a>
    </div>
  );
}
