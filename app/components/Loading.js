'use client'
import Image from "next/image"

export default function Loading() {
    const src = 'https://i.gifer.com/ZKZg.gif'

    return (
        <div className="flex justify-center my-16">
            <Image loader={() => src} src={src} width={240} height={240} unoptimized={true} />
        </div>
    )
}