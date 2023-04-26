import './globals.css'
import Footer from './components/Footer'
import GaBlock from './components/GaBlock'
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

export default  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const userdata = await getCurrentUser();
  //   if(userdata){
  //       // console.log('run redux');
  //       store.dispatch(setUser(userdata));
  //   }
  return (
    <html lang="en">
      <body className='h-screen'>
        <GaBlock/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
