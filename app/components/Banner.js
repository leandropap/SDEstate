import Image from "next/image"
import SearchBar from "./SearchBar"

export default function Banner() {
    const src = 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'
    const src2 = 'https://media.istockphoto.com/id/1332358775/photo/young-couple-shaking-hands-deal-contract-real-estate-investment-business-agreement-agent.jpg?s=612x612&w=0&k=20&c=tADtuQ9F_eKe_hMH0k5Ldg7N4p5BojisWf2n-jXar_I='

    return (
        <section id="banner" className="relative px-8 py-8 overflow-hidden flex flex-row items-center justify-around">
            <SearchBar />
            <div>
                <div className=" relative z-10 flex justify-end ml-4">
                    <p className="backdrop-blur-md  bg-white bg-opacity-50  max-w-xl py-4 px-6 border border-slate-500 rounded-xl text-xl text-justify">
                        En SDEstate, estamos aquí para hacer realidad tus sueños de hogar.
                        Ya sea que estés buscando comprar, vender o alquilar una propiedad, nuestro equipo experto está listo para ayudarte en cada paso del proceso.
                        <br />
                        Explora nuestro catálogo de propiedades y encuentra el hogar perfecto para ti.
                        En SDEstate, estamos comprometidos con la excelencia en el servicio al cliente y en hacer que tu experiencia en bienes raíces sea fácil y satisfactoria.
                        <br />
                        ¡Empecemos a encontrar tu próximo hogar juntos en SDEstate!
                    </p>
                </div>
                <Image loader={() => src} src={src} fill="true" objectFit="cover" className="relative overflow-hidden z-0" unoptimized={true} />
            </div>
        </section>
    )
}