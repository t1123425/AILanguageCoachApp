import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
export const metadata = {
  title: 'AILanguageCoach',
  description: 'Test Your Language ability!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className='w-full'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
