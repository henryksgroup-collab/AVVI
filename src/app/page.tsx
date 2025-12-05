export default function Home() {
  async function gerarVideoTeste() {
    const res = await fetch('/api/generate', { method: 'POST' })
    const data = await res.json()
    alert(data.message || data.error)
  }

  return (
    <main style={{ padding: '4rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem' }}>VIRAL CURIOSIDADES AI</h1>
      <p style={{ fontSize: '1.5rem', margin: '2rem 0' }}>
        Seu canal de crimes e curiosidades 100% automático
      </p>
      <button
        onClick={gerarVideoTeste}
        style={{
          padding: '1rem 3rem',
          fontSize: '1.5rem',
          background: '#ff0066',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer'
        }}
      >
        GERAR VÍDEO TESTE AGORA (5-10 min)
      </button>

      <p style={{ marginTop: '3rem', opacity: 0.7 }}>
        Primeiro uso: autorize o YouTube → depois é só clicar e bombar!
      </p>
    </main>
  )
}
