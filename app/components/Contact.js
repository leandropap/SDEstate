export default function Contact() {
    return (
        <section className="border border-gray-400 px-4 py-2 rounded-xl">
            <h1 className="text-xl py-1">Contacta al anunciante</h1>
            <form>
                <input type="text" className="border border-black px-2 py-1 font-light my-1" placeholder="Nombre" style={{ width: '100%' }} />
                <div className="flex flex-row ">
                    <input type="text" className="border border-black px-2 py-1 mr-2 font-light my-1" placeholder="Email" style={{ width: '50%' }} />
                    <input type="text" className="border border-black px-2 py-1 font-light my-1" placeholder="Telefono" style={{ width: '50%' }} />
                </div>
                <input type="text" className="border border-black px-2 py-1 font-light my-1" placeholder="Hola, vi tu propiedad en SDEstate..." style={{ width: '100%' }} />
            </form>
            <div className="flex flex-row items-end justify-center bg-orange-200 py-2 rounded-lg text-lg font-medium text-white border border-black mb-1"
                style={{ textShadow: '2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000,1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000' }}>
                <h1>Contactar por email</h1>
                <span className="iconify mdi-light--email mx-2" style={{ height: '32px', width: '32px', color: '#000' }} />
            </div>
            <div className="flex flex-row items-end justify-center bg-green-300 py-2 rounded-lg text-lg font-medium text-white border border-black mb-1"
                style={{ textShadow: '2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000,1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000' }}>
                <h1>Contactar por WhatsApp</h1>
                <span className="iconify mdi-light--forum mx-2" style={{ height: '32px', width: '32px', color: '#000' }} />
            </div>

            <div className="border border-black px-2">
                Preguntas frecuentes
            </div>
        </section >
    )
}