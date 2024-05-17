'use client'

import Image from "next/image"
import Maps from "../components/Maps"
import { Icon } from "@iconify/react"
import MyBar from "../components/MyBar"


export default function Property() {
    const src = 'https://ap.rdcpix.com/ba90d46414debbf5c9f60f7b6cee5744l-m305062379od-w480_h360.jpg'

    return (
        <div className="my-2">
            <div className="">
                <MyBar />
                <div className="flex flex-row mx-2">
                    <Image loader={() => src} src={src} width={640} height={480} style={{ objectFit: 'cover' }} />
                    <div className="flex flex-col justify-around mx-1 ">
                        <Image loader={() => src} src={src} width={400} height={300} style={{ objectFit: 'cover' }} className="mb-1" />
                        <Image loader={() => src} src={src} width={400} height={300} style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="flex flex-col justify-around ">
                        <Image loader={() => src} src={src} width={400} height={300} style={{ objectFit: 'cover' }} className="mb-1" />
                        <Image loader={() => src} src={src} width={400} height={300} style={{ objectFit: 'cover' }} />
                    </div>
                </div>
                <div className="max-w-fit px-4 text-pretty">
                    <div className="flex flex-row text-sm py-4 text-center">
                        <div className="pr-4">
                            <span class="iconify mdi--home-roof" style={{ width: 48, height: 48 }} />
                            <p className="">2 plantas</p>
                        </div>
                        <div className="px-4">
                            <span class="iconify mdi--ruler-square" style={{ width: 48, height: 48 }} />
                            <p>2 plantas</p>
                        </div>
                        <div className="px-4">
                            <span class="iconify mdi--surface-area" style={{ width: 48, height: 48 }} />
                            <p>2 plantas</p>
                        </div>
                        <div className="px-4">
                            <span class="iconify mdi--door-open" style={{ width: 48, height: 48 }} />
                            <p>2 plantas</p>
                        </div>
                        <div className="px-4">
                            <span class="iconify mdi--bed" style={{ width: 48, height: 48 }} />
                            <p>2 plantas</p>
                        </div>
                        <div className="px-4">
                            <span class="iconify mdi--bathtub" style={{ width: 48, height: 48 }} />
                            <p>2 plantas</p>
                        </div>
                        <div className="px-4">
                            <span class="iconify mdi--bathroom-tissue" style={{ width: 48, height: 48 }} />
                            <p>2 plantas</p>
                        </div>
                        <div className="px-4">
                            <span class="iconify mdi--garage-open-variant" style={{ width: 48, height: 48 }} />
                            <p>2 plantas</p>
                        </div>
                    </div>
                    <p>
                        Ubicacion: Misiones 567 - Entre Maipu y Formosa - Barrio Centenario <br />
                        Dos plantas, 4 dormitorios, living, comedor, cocina, escritorio, garage para dos autos, 4 baños (uno en suite), quincho con asador y piscina, frente al norte
                    </p>
                    <div className="flex flex-row items-center py-4 font-medium">
                        <span class="iconify mdi--money" style={{ width: 48, height: 48 }} />
                        <p>USD 50.000</p>
                    </div>
                </div>
            </div>
            <Maps />
        </div>
    )
}