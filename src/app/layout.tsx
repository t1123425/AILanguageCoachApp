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
      <body className='bg-blue-400'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
