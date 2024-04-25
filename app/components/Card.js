'use client'

import Link from "next/link"
import Image from "next/image"

export default function Card() {
    const data = {
        description: 'Casa 2 plantas',
        address: 'B° Centenario',
        price: "50.000",
        type: 'house',
        contract: 'sale',
        areaPlot: '',
        areaBuilt: '',
        floors: '',
        dorms: '',
        baths: '',
        garage: '',
        pool: '',
    }
    const src = 'https://ap.rdcpix.com/ba90d46414debbf5c9f60f7b6cee5744l-m305062379od-w480_h360.jpg'

    return (
        <section id="card" className=" mx-4 border border-gray-400 flex justify-center bg-white">
            <Link href="/property" >
                <h1 className="bg-sky-50 z-10 -mb-6 absolute ml-1 mt-1 px-2 ">
                    {data.contract === 'sale' ? "Venta" :
                        data.contract === 'rent' ? "Alquiler" : null}
                </h1>
                <Image loader={() => src} src={src} width={440} height={240} className="relative overflow-hidden" />
                <div className="flex justify-end">
                    <h1 className="absolute z-10 -mt-7 pr-2 text-white text-xl ">USD {data.price}</h1>
                </div>
                <h1>{data.description}</h1>
                <h1>{data.address}</h1>
            </Link>
        </section>
    )
}