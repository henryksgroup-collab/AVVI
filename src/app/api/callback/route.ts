import { google } from 'googleapis'

const oauth2Client = new google.auth.OAuth2(
  process.env.YOUTUBE_CLIENT_ID,
  process.env.YOUTUBE_CLIENT_SECRET
)

export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  if (!code) return new Response('Erro', { status: 400 })

  const { tokens } = await oauth2Client.getToken(code)
  // Salva o refresh token nas envs da Vercel (você cola manualmente depois)
  return new Response(
    `<h1>Autorizado!</h1><p>Seu REFRESH TOKEN (cole nas variáveis da Vercel):</p><code style="background:#333;padding:20px;display:block">${tokens.refresh_token}</code>`,
    { headers: { 'Content-Type': 'text/html' } }
  )
}
