import Image from "next/image"
import SearchBar from "./SearchBar"

export default function Banner() {
    const src = 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'
    const src2 = 'https://media.istockphoto.com/id/1332358775/photo/young-couple-shaking-hands-deal-contract-real-estate-investment-business-agreement-agent.jpg?s=612x612&w=0&k=20&c=tADtuQ9F_eKe_hMH0k5Ldg7N4p5BojisWf2n-jXar_I='

    return (
        <section id="banner" className="relative px-4 py-8 overflow-hidden flex flex-row items-center justify-around">
            <SearchBar />
            <div className=" relative z-10 backdrop-blur-md bg-white bg-opacity-50 max-w-lg py-4 px-6 rounded-2xl text-md text-justify  font-medium">
                En <b>SDEstate</b>, estamos para hacer realidad tus sueños de hogar.
                Ya sea que estés buscando comprar, vender o alquilar una propiedad, nuestro equipo experto está listo para ayudarte en cada paso del proceso.
                <br />
                <br />
                Explorá y encuentrá el hogar perfecto para vos en nuestro catálogo de propiedades.
                En <b>SDEstate</b>, estamos comprometidos con la excelencia en el servicio al cliente y en hacer que tu experiencia en bienes raíces sea fácil y satisfactoria.
                <br />
                <br />
                <h1 className="text-center"> <b>¡Encontrá tu próximo hogar juntos en SDEstate!</b> </h1>
            </div>

            <Image loader={() => src} src={src} fill="true" objectFit="cover" className="relative overflow-hidden z-0" unoptimized={true} />
        </section>
    )
}