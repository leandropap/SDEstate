import Link from "next/link"

export default function Header() {

    return (
        <header className="flex flex-col bg-slate-100 mt-2 mx-4">
            <section className="flex flex-row justify-between">
                <div className="flex items-center px-2  bg-sky-200">
                    <Link href='/'>Placeholder del logo</Link>
                </div>

                <nav className="flex justify-end">
                    <Link href="/contact" className="p-2 hover:font-medium hover:underline"> Contacto </Link>
                    <Link href="/login" className="p-2 hover:font-medium hover:underline"> Iniciar sesion </Link>
                    <button className="bg-sky-200 px-2 py-2 border border-black rounded-md hover:font-medium hover:underline">
                        <Link href="/publish"> Publicar propiedad </Link>
                    </button>
                </nav>
            </section>
            <br />
        </header>
    )
}