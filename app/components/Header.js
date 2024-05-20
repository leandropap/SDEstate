import Link from "next/link"
import Logo from "./Logo"

export default function Header() {
    const bgLogo = '#e0f2fe'

    return (
        <header className="flex flex-col px-4 py-4 bg-sky-100">
            <section className="flex flex-row justify-between items-center">
                <div className="flex items-center px-2 -mx-2 -my-10">
                    <Link href='/'> <Logo bg={bgLogo} w={300} /> </Link>
                </div>

                <nav className="flex justify-end items-center text-lg">
                    <Link href='listings' className="p-2 hover:font-medium hover:underline">
                        Propiedades
                        <div className="hover:tra"></div>
                    </Link>
                    <Link href="/contact" className="p-2 hover:font-medium hover:underline"> Contacto </Link>
                    <Link href="/login" className="p-2 hover:font-medium hover:underline"> Iniciar sesion </Link>
                    <button className="bg-gray-200 px-2 py-2 border border-black rounded-md hover:font-medium hover:underline hover:scale-105 hover:bg-orange-200 duration-200">
                        <Link href="/publish"> Publicar propiedad </Link>
                    </button>
                </nav>
            </section>
        </header>
    )
}