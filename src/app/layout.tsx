import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import StyledComponentsRegistry from './styleRegistry'
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
      <body className='bg-white-500 h-screen'>
        <StyledComponentsRegistry>
            <Header />
            {children}
        </StyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  )
}
