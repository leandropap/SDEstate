'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import Loading from "./Loading"
import { testimonials } from "../data.json"
import { createRandArray } from "../helpers"

export default function Testimonials() {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(createRandArray(testimonials))
    }, [])

    return (
        < section id='testimonials' className="py-8 px-4 bg-sky-50" >
            <div className="text-center pb-8">
                <h1 className="text-4xl font-medium pb-4">Qué opinan nuestros clientes</h1>
                <h1 className="text-xl font-light ">Algunas de sus historias</h1>
            </div>
            <div className="flex flex-row justify-evenly">
                {data.length ?
                    data.map(e => {
                        return (
                            <div className="border border-gray-400 rounded-xl mx-8 max-w-sm bg-white" key={e.name}>
                                <p className="text-justify text-xl px-4 py-4">&quot;{e.text}&quot; </p>
                                <div className="relative center mx-4 mt-2 py-16 rounded-full overflow-hidden  max-w-32">
                                    <Image loader={() => e.src} src={e.src} alt={e.name} fill={true} style={{ objectFit: "cover" }} unoptimized={true} />
                                </div>
                                <div className="relative mx-4 -top-24 left-36 -mb-8">
                                    <p className="text-lg font-medium font">{e.name}</p>
                                    <p className="text-lg font-extralight">{e.company}</p>

                                </div>
                            </div>
                        )
                    }) :
                    <Loading />
                }

            </div>
        </section >
    )
}