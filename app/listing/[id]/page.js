'use client'

import Image from "next/image"
import Maps from "../../components/Maps"
import MyBar from "../../components/MyBar"
import Contact from "../../components/Contact"
import { useAppContext } from "@/app/context"

export default function Property({ params }) {
    const src = 'https://ap.rdcpix.com/ba90d46414debbf5c9f60f7b6cee5744l-m305062379od-w480_h360.jpg'
    const { state } = useAppContext()
    const data = (state.allListings.filter(e => e.id == params.id))[0]
    console.log(data)

    return (
        <div className="my-2">
            <div>
                <MyBar />
                <section id='photos' className="flex flex-row mx-2 cursor-pointer">
                    <div className=" rounded-xl overflow-hidden">
                        <Image loader={() => src} src={src} width={640} height={480} style={{ objectFit: 'cover', width: '100%', height: '60vh' }}
                            className="transition duration-300 ease-in-out hover:scale-105" />
                    </div>
                    <div className="flex flex-col justify-around mx-1 ">
                        <div className="mb-1 rounded-xl overflow-hidden" >
                            <Image loader={() => src} src={src} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '30vh' }}
                                className="transition duration-300 ease-in-out hover:scale-105" />
                        </div>
                        <div className="rounded-xl overflow-hidden" >
                            <Image loader={() => src} src={src} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '30vh' }}
                                className="transition duration-300 ease-in-out hover:scale-105" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-around ">
                        <div className="mb-1 rounded-xl overflow-hidden">
                            <Image loader={() => src} src={src} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '30vh' }}
                                className="transition duration-300 ease-in-out hover:scale-105" />
                        </div>
                        <div className="rounded-xl overflow-hidden">
                            <Image loader={() => src} src={src} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '30vh' }}
                                className="transition duration-300 ease-in-out hover:scale-105" />
                        </div>
                    </div>
                </section>
                <section id='description' className="max-w-fit px-4 text-pretty">
                    <div className="flex flex-row text-sm p-4 m-4 text-center font-semibold border-y-2 border-gray-200" >
                        <div className="pr-6">
                            <span class="iconify mdi--home-roof" style={{ width: 48, height: 48 }} />
                            <p>{data.floors} plantas</p>
                        </div>
                        <div className="px-6">
                            <span class="iconify mdi--ruler-square" style={{ width: 48, height: 48 }} />
                            <p>{data.surface_total_sqm} m2 <br /> terreno</p>
                        </div>
                        <div className="px-6">
                            <span class="iconify mdi--surface-area" style={{ width: 48, height: 48 }} />
                            <p>{data.surface_covered_sqm} m2 <br /> cubiertos</p>
                        </div>
                        <div className="px-6">
                            <span class="iconify mdi--door-open" style={{ width: 48, height: 48 }} />
                            <p>{data.bedrooms + data.bathrooms + 1} ambientes</p>
                        </div>
                        <div className="px-6">
                            <span class="iconify mdi--bed" style={{ width: 48, height: 48 }} />
                            <p>{data.bedrooms} habitaciones</p>
                        </div>
                        <div className="px-6">
                            <span class="iconify mdi--bathtub" style={{ width: 48, height: 48 }} />
                            <p>{data.bathrooms} baños</p>
                        </div>
                        <div className="px-6">
                            <span class="iconify mdi--garage-open-variant" style={{ width: 48, height: 48 }} />
                            <p>2 plantas</p>
                        </div>
                    </div>
                    <p className="text-3xl font-semibold">Nombre de la propiedad</p>
                    <p className="text-justify text-lg">
                        <b> Ubicacion: {data.address}, {data.city} </b>
                        <br />
                        <hr />
                        {data.description}
                    </p>
                    <div className="flex flex-row items-center py-4 font-medium text-3xl">
                        <span class="iconify mdi--money" style={{ width: 60, height: 60 }} />
                        <p>U$D {data.price}</p>
                    </div>
                </section>
            </div>
            <section className="flex flex-row">
                <Maps />
                <Contact />
            </section>
        </div>
    )
}