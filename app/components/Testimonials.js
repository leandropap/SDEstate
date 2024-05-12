import Image from "next/image"

export default function Testimonials() {
    const data = [
        {
            name: 'Emir Dalale',
            company: 'MercaLibre',
            src: 'https://casaz.vercel.app/agents/agent-4.jpeg',
            text: 'Gracias a SDEstate, mi primera mudanza fuera de casa fue muy simple. Me ofrecieron un gran abanico de opciones, y encontre el lugar indicado para mi',
        },
        {
            name: 'Eduardo Vizcarra',
            company: 'Marihuanos anonimos',
            src: 'https://casaz.vercel.app/agents/agent-3.jpeg',
            text: 'Antes cobrarlos alquileres de mis propiedades era muy complicado. Hoy por hoy, SDEstate se encarga de la gestion y asi yo puedo disfrutar de mi  tiempo libre'
        },
        {
            name: 'Gonzalo Umlandt',
            company: 'Es Ketchup',
            src: 'https://t4.ftcdn.net/jpg/01/27/97/23/360_F_127972340_IdaSXaA5FRMHpwtANA2FZfqnnATi8leG.jpg',
            text: 'Desde hace mucho tiempo, planeaba mudarme una vez que me jubile y SDEstate fue crucial tanto para la compra como para la venta de ambas propiedades'
        }
    ]

    return (
        <section id='testimonials' className="py-8 px-4 bg-sky-50">
            <div className="text-center pb-8">
                <h1 className="text-4xl font-medium pb-4">Qué opinan nuestros clientes</h1>
                <h1 className="text-xl font-light ">Algunas de sus historias</h1>
            </div>
            <div className="flex flex-row justify-evenly">
                {data.map(e => {
                    return (
                        <div className="border border-gray-400 rounded-xl mx-8 max-w-sm bg-white">
                            <p className="text-justify text-xl px-4 py-4">"{e.text}"</p>
                            <div className="relative center mx-4 mt-2 py-16 rounded-full overflow-hidden  max-w-32">
                                <Image loader={() => e.src} src={e.src} alt={e.name} fill={true} style={{ objectFit: "cover" }} />
                            </div>
                            <div className="relative mx-4 -top-24 left-36 -mb-8">
                                <p className="text-lg font-medium font">{e.name}</p>
                                <p className="text-lg font-extralight">{e.company}</p>

                            </div>
                        </div>
                    )
                })}

            </div>
        </section >
    )
}