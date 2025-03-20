'use client'
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"

export default function Maps() {
    const centerPos = [-27.7831, -64.2713]


    return (
        <MapContainer center={centerPos} zoom={16} scrollWheelZoom={true} style={{ width: '70%', height: '75vh' }}
            className="mx-4 border border-black">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={centerPos}>
                <Popup>
                </Popup>
            </Marker>
        </MapContainer>
    )
}