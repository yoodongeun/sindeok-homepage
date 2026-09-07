import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono, Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const notoSansKr = Noto_Sans_KR({ subsets: ['latin'], variable: '--font-noto-kr', weight: ['400', '500', '700', '900'] })

export const metadata: Metadata = {
  title: '신덕종합건설 | 더 나은 내일을 짓습니다',
  description: '건축과 토목을 아우르는 종합건설기업 신덕종합건설. 사람과 도시, 자연이 조화롭게 공존하는 공간을 만듭니다.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1e3a5f',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} ${notoSansKr.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
