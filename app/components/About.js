export default function About() {
    return (
        <section id='about' className="flex flex-row justify-around bg-sky-100">
            <div className="flex flex-col">
                <p>FAQ</p>
                <p>Publicá tu aviso</p>
                <p>Cuanto vale mi propiedad</p>
                <p>Guia de ventas</p>
                <p>Guia de alquileres</p>
                <p>Claves para renovar tu alquiler</p>
            </div>
            <div className="flex flex-col">
                <p>Servicios</p>
                <p>Tasación</p>
                <p>Escrituracion</p>
                <p>Administracion de propiedades</p>
            </div>
            <div className="flex flex-col">
                <p>Trabaja con nostros</p>
                <p>Unite a nuestra red</p>
                <p>Encuestas de calidad</p>
            </div>
        </section>
    )
}