'use client'
import { useAppContext } from "@/app/context"
import { useEffect, useState } from "react"
import Card from "../components/Card"
import Filter from "./Filter"

export default function AllListings() {
    const { state } = useAppContext()
    const [listings, setListings] = useState([])

    useEffect(() => {
        setListings(state.allListings)
    }, [state.allListings])

    return (
        <div>
            <div className="flex flex-row items-end justify-between">
                {listings.length > 0 ?
                    <b className="ml-6">Tenemos {listings.length} propiedades a tu disposición </b>
                    :
                    <b className="ml-6">Cargando...</b>}
                <Filter />
            </div>
            <div className="flex flex-wrap justify-start">
                {listings.map((e, i) => {
                    return (
                        <div key={i} className="w-1/3 p-2">
                            <Card data={listings[i]} key={i} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}