import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Kadu | Desenvolvedor IA & Automacao',
  description:
    'Desenvolvedor especializado em Inteligencia Artificial, Automacao de Processos e Python. Transformo ideias em solucoes inteligentes para empresas.',
  keywords:
    'inteligencia artificial, automacao, python, web scraping, APIs, desenvolvedor, IA, machine learning',
  authors: [{ name: 'Kadu' }],
  openGraph: {
    title: 'Kadu | Desenvolvedor IA & Automacao',
    description:
      'Especialista em Python, inteligencia artificial e automacao de processos.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  themeColor: '#050510',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/icons/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="font-body leading-relaxed">{children}</body>
    </html>
  )
}
