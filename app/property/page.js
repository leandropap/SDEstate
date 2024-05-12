'use client'

import Image from "next/image"
import Maps from "../components/Maps"

export default function Property() {
    const src = 'https://ap.rdcpix.com/ba90d46414debbf5c9f60f7b6cee5744l-m305062379od-w480_h360.jpg'

    return (
        <div className="my-8">
            <p className="text-lg font-medium mx-12 my-4">
                Titulo/nombre de la propiedad
            </p>
            <div className="flex flex-row">
                <div className="">
                    <div className="flex flex-row justify-around mx-2">
                        <button className="border-4 border-black rounded-md text-3xl text-gray-200 font-bold my-40 -mr-14 px-2 z-10 backdrop-blur-md">{'<'}</button>
                        <Image loader={() => src} src={src} width={640} height={180} className="overflow-hidden" />
                        <button className="border-4 border-black rounded-md text-3xl  text-gray-200 font-bold my-40 -ml-14 px-2 z-10 backdrop-blur-md">{'>'}</button>
                    </div>
                </div>
                <div className="max-w-md">
                    <p>
                        Ubicacion: Misiones 567 - Entre Maipu y Formosa - Barrio Centenario
                    </p>
                    <p>
                        Dos plantas, 4 dormitorios, living, comedor, cocina, escritorio, garage para dos autos, 4 baños (uno en suite), quincho con asador y piscina, frente al norte
                    </p>
                    <p>
                        Precio
                    </p>
                    <p>
                        Mas cosas?
                    </p>
                </div>
            </div>
            <br />
            <p>Aqui iria la ubicacion en google maps</p>
            <Maps />
        </div>
    )
}