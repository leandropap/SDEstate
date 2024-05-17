'use client'

import { useState } from "react"
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow
} from '@vis.gl/react-google-maps'


export default function Maps() {
    const position = { lat: -27.782989501953125, lng: -64.27119445800781 }
    const [open, setOpen] = useState(false)

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <div style={{ height: '100vh', width: '100%' }} className="border border-black">
                <Map center={position} zoom={18} mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}>
                    <AdvancedMarker position={position} onClick={() => setOpen(true)} />

                    {open && <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                        <p>Tu propiedad</p>
                    </InfoWindow>}
                </Map>
            </div>
        </APIProvider>
    )
}