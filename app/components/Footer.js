import Logo from "./Logo"

export default function Footer() {
    const date = new Date()
    const bgLogo = '#bae6fd'

    return (
        <footer className="flex flex-col items-center bg-sky-200">
            <div className="-my-8">
                <Logo bg={bgLogo} w={240} />
            </div>
            <div className="text-center mb-2">
                <h1>Todos los derechos reservados</h1>
                <h1> © {date.getFullYear()}</h1>
            </div>
        </footer>
    )
}