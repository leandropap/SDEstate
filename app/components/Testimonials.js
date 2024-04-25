import Image from "next/image"

export default function Testimonials() {
    const data = [
        {
            name: 'María',
            src: 'https://casaz.vercel.app/agents/agent-2.jpeg',
            text: 'Pude encontrar el departamento que tanto buscaba, SDEstatefue mi guía en todo momento.',
        },
        {
            name: 'Juan',
            src: 'https://casaz.vercel.app/agents/agent-3.jpeg',
            text: 'Antes, cobrar mis alquileres era muy complicado. Hoy por hoy, SDEstate gestiona mis propiedades y gano muchisimo tiempo libre'
        },
        {
            name: 'José',
            src: 'https://t4.ftcdn.net/jpg/01/27/97/23/360_F_127972340_IdaSXaA5FRMHpwtANA2FZfqnnATi8leG.jpg',
            text: 'Planeaba mudarme una vez que me jubile y SDEstate fue crucial tanto para la compra como para la venta de ambas propiedades'
        }
    ]

    return (
        <section id='testimonials' className="py-2 px-4">
            <div>Testimonios de usuarios</div>
            <div className="flex flex-row justify-around">
                {data.map(e => {
                    return (
                        <div className="border border-gray-400 p-2 max-w-sm">
                            <div className="relative py-48 rounded-full overflow-hidden ">
                                <Image loader={() => e.src} src={e.src} alt={e.name} fill={true} style={{ objectFit: "cover" }} />
                            </div>
                            <p className=" text-2xl relative left-12 font-medium">{e.name}</p>
                            <p className="text-justify ">"{e.text}</p>
                        </div>
                    )
                })}

            </div>
        </section >
    )
}