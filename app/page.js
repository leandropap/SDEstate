'use client'
import Cards from './components/Cards'
import Banner from './components/Banner'
import Testimonials from './components/Testimonials'

export default function Home() {

  return (
    <main className="">
      <Banner />

      <Cards />
      <Testimonials />
    </main>
  )
}
