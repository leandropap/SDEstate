import Link from "next/link"

export default function Header() {

    return (
        <header className="flex flex-col bg-slate-100">
            <section className="flex flex-row justify-between">
                <div className="flex items-center px-2  bg-light-blue">
                    <Link href='/'>Placeholder del logo</Link>
                </div>

                <nav className="flex justify-end">
                    <Link href="/contacto"> Contacto </Link>
                    <Link href="/login"> Iniciar sesion </Link>
                    <button className="bg-light-blue px-2 py-2 rounded-md">
                        <Link href="/publish"> Publicar propiedad </Link>
                    </button>
                </nav>
            </section>
            <br />
        </header>
    )
}