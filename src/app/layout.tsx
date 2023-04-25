import './globals.css'
import Footer from './components/Footer'
import { GoogleAnalytics } from 'nextjs-google-analytics'
export const metadata = {
  title: 'AILanguageCoach',
  authors: [{ name: 'Tom Yuan', url: 'https://t1123425.github.io/my-portfolio/' }],
  keywords: ['AI', 'Language learing', 'chatGPT','AILanguageCoach'],
  description: 'Let AI help you practice your language!',
  openGraph: {
    title: 'AILanguageCoach',
    description: 'Let AI help you practice your language!',
    url: 'https://ai-language-coach-app.vercel.app/',
    siteName: 'AILanguageCoach',
    locale: 'en-US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='h-screen'>
        <GoogleAnalytics trackPageViews gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
