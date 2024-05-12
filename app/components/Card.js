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
        areaBuilt: 322.74,
        floors: '',
        dorms: 4,
        baths: 3,
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
                <div className="mx-1 mt-1 mb-2 text-lg">
                    <h1>{data.description}</h1>
                    <h1>{data.address}</h1>
                </div>
                <div className="flex flex-row items-center font-medium">
                    <div className="mx-1 flex flex-col items-center">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg" >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6"></path>
                            <path d="M7 10m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                        </svg>
                        <p>{data.dorms}</p>
                    </div>
                    <div className="mx-1 flex flex-col items-center">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1z"></path>
                            <path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25"></path>
                            <path d="M4 21l1 -1.5"></path>
                            <path d="M20 21l-1 -1.5"></path>
                        </svg>
                        <p>{data.baths}</p>
                    </div>
                    <div className="mx-1 flex flex-col items-center">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1"></path>
                            <path d="M4 8l2 0"></path>
                            <path d="M4 12l3 0"></path>
                            <path d="M4 16l2 0"></path>
                            <path d="M8 4l0 2"></path>
                            <path d="M12 4l0 3"></path>
                            <path d="M16 4l0 2"></path>
                        </svg>
                        <p>{data.areaBuilt} m²</p>
                    </div>
                </div>
            </Link>
        </section>
    )
}

