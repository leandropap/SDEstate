'use client'

import Image from "next/image"

export default function Property() {
    const src = 'https://ap.rdcpix.com/ba90d46414debbf5c9f60f7b6cee5744l-m305062379od-w480_h360.jpg'

    return (
        <>
            <h1>
                Titulo/nombre de la propiedad
            </h1>
            <Image loader={() => src} src={src} width={320} height={180} />
            <h1>
                Ubicacion: Misiones 567 - Entre Maipu y Formosa - Barrio Centenario
            </h1>
            <p>
                Dos plantas, 4 dormitorios, living, comedor, cocina, escritorio, garage para dos autos, 4 baños (uno en suite), quincho con asador y piscina
            </p>

            <br />
            <h1>Aqui iria la ubicacion en google maps</h1>
        </>
    )
}