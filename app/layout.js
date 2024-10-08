import { AR_One_Sans, Anek_Bangla } from 'next/font/google'
import './globals.css'
import { AppWrapper } from './context'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
const anek = Anek_Bangla({ subsets: ['latin'] })

export const metadata = {
  title: 'SDEstate',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={anek.className}>
        <AppWrapper>
          <Header />
          {children}
          <About />
          <Footer />
        </AppWrapper>
      </body>
    </html>
  )
}
