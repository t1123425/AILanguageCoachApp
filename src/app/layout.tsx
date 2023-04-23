import './globals.css'
import Footer from './components/Footer'
export const metadata = {
  title: 'AILanguageCoach',
  description: 'Let AI help you practice your language',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='h-screen'>
        {children}
        <Footer />
      </body>
    </html>
  )
}
