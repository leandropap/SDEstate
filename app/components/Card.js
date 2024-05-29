'use client'
import Link from "next/link"
import Image from "next/image"


export default function Card(props) {
    const src = 'https://ap.rdcpix.com/ba90d46414debbf5c9f60f7b6cee5744l-m305062379od-w480_h360.jpg'
    const data = props.data
    const slug = data.id

    if (!data) {
        return (<></>)
    }

    return (
        <section id="card" className=" mx-4 border border-gray-400 flex justify-center bg-white">
            <Link href={`/property/${slug}`} >
                <h1 className="bg-sky-50 z-10 -mb-6 absolute ml-1 mt-1 px-2 ">
                    Venta
                </h1>
                <Image loader={() => src} src={src} width={440} height={240} className="relative overflow-hidden" unoptimized={true} />
                <div className="flex justify-end">
                    <h1 className="absolute z-10 -mt-7 pr-2 text-white text-xl ">USD {data.price}</h1>
                </div>
                <div className="mx-1 mt-1 mb-2 text-lg">
                    <h1>{data.property_type}</h1>
                    <h1>{data.address}</h1>
                </div>
                <div className="flex flex-row items-center font-medium">
                    <div className="mx-1 flex flex-col items-center">
                        <span className="iconify mdi--bed" style={{ width: 36, height: 36 }} />
                        <p>{data.bedrooms}</p>
                    </div>
                    <div className="mx-1 flex flex-col items-center">
                        <span className="iconify mdi--bathtub" style={{ width: 36, height: 36 }} />
                        <p>{data.bathrooms}</p>
                    </div>
                    <div className="mx-1 flex flex-col items-center">
                        <span className="iconify mdi--ruler-square" style={{ width: 36, height: 36 }} />
                        <p>{data.surface_total_sqm} m²</p>
                    </div>
                </div>
            </Link>
        </section>
    )


}


