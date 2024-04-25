'use client'

import Card from './components/Card'
import Banner from './components/Banner'
import Testimonials from './components/Testimonials'
import About from './components/About'


export default function Home() {
  return (
    <main className="">
      <Banner />

      <section id='cards' className='flex flex-col py-16 bg-sky-50'>
        <p className='text-center text-4xl font-medium pb-8'>Te mostramos algunas de nuestras propiedades</p>

        <div className='flex flex-row justify-around'>
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <Testimonials />
      <About />

    </main>
  )
}
