export default function Footer() {
    const date = new Date()

    return (
        <footer className="flex flex-col items-center bg-sky-300">
            <h1>Footer</h1>
            <h1>Logo nuevamente</h1>
            <div>
                <h1>Todos los derechos reservados</h1>
                <p>Redes</p>
                <h1>Leandro Pappalardo {date.getFullYear()}</h1>
            </div>
        </footer>
    )
}