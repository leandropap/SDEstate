import Image from "next/image"

export default function Banner() {
    const src = 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'
    const src2 = 'https://media.istockphoto.com/id/1332358775/photo/young-couple-shaking-hands-deal-contract-real-estate-investment-business-agreement-agent.jpg?s=612x612&w=0&k=20&c=tADtuQ9F_eKe_hMH0k5Ldg7N4p5BojisWf2n-jXar_I='

    return (
        <section id="banner" className="relative px-8 py-2 overflow-hidden">
            <div>
                <div className=" relative z-10 flex justify-end">
                    <p className="backdrop-blur-md  bg-white max-w-lg bg-opacity-50 text-xl border border-slate-500 rounded-lg p-2 text-justify">
                        En SDEstate, estamos aquí para hacer realidad tus sueños de hogar.
                        Ya sea que estés buscando comprar, vender o alquilar una propiedad, nuestro equipo experto está listo para ayudarte en cada paso del proceso.
                        <br />
                        Explora nuestro catálogo de propiedades y encuentra el hogar perfecto para ti.
                        En SDEstate, estamos comprometidos con la excelencia en el servicio al cliente y en hacer que tu experiencia en bienes raíces sea fácil y satisfactoria.
                        <br />
                        ¡Empecemos a encontrar tu próximo hogar juntos en SDEstate!
                    </p>
                </div>
                <Image loader={() => src} src={src} fill="true" objectFit="cover" className="relative overflow-hidden z-0" />
            </div>
        </section>
    )
}