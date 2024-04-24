'use client'

import Link from "next/link"
import Image from "next/image"

export default function Card() {
    const src = 'https://ap.rdcpix.com/ba90d46414debbf5c9f60f7b6cee5744l-m305062379od-w480_h360.jpg'

    return (
        <section id="card" className=" mx-4 border border-gray-400 flex justify-center bg-white">
            <Link href="/property" >
                <h1 className="bg-sky-50 z-10 -mb-6 absolute ml-1 mt-1 px-2 ">Venta</h1>
                <Image loader={() => src} src={src} width={440} height={240} className="relative overflow-hidden" />
                <div className="flex justify-end">
                    <h1 className="absolute z-10 -mt-7 pr-2 text-white text-xl ">USD 50.000</h1>
                </div>
                <h1>Descripcion</h1>
                <h1>Ubicacion</h1>
            </Link>
        </section>
    )
}