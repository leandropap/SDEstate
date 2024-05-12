import Link from "next/link"

export default function About() {
    return (
        <section id='about' className="flex flex-row justify-around bg-sky-100 py-4">
            <div className="flex flex-col">
                <p className="text-xl font-medium pb-4">FAQ</p>
                <Link href='/porpertyvalue' className="hover:underline">Cuanto vale mi propiedad</Link>
                <Link href='/salesguide' className="hover:underline">Guia de ventas</Link>
                <Link href='rentguide' className="hover:underline">Guia de alquileres</Link>
                <Link href='/rentkeys' className="hover:underline">Claves para renovar tu alquiler</Link>
            </div>
            <div className="flex flex-col">
                <p className="text-xl font-medium pb-4">Servicios</p>
                <Link href='/tasacion' className="hover:underline">Tasación</Link>
                <Link href='/escrituracion' className="hover:underline">Escrituracion</Link>
                <Link href='/propertyadm' className="hover:underline"> Administracion de propiedades</Link>
            </div>
            <div className="flex flex-col">
                <p className="text-xl font-medium pb-4">Novedades</p>
                <Link href='ourteam' className="hover:underline">Unite a nuestra red</Link>
                <Link href='poll' className="hover:underline">Encuestas de calidad</Link>
            </div>
        </section>
    )
}