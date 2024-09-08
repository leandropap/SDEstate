'use client'
import { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";
import { createRandArray } from "../helpers";
import json from '../data.json'

export default function Cards() {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(createRandArray(json.listings))
    }, [])

    return (
        <section id='cards' className='flex flex-col py-8 bg-sky-50'>
            <p className='text-center text-3xl font-medium pb-8'>Te mostramos algunas de nuestras propiedades</p>
            {data.length ?
                <div className='flex flex-row justify-around'>
                    <Card data={data[0]} />
                    <Card data={data[1]} />
                    <Card data={data[2]} />
                </div>
                :
                <Loading />
            }
        </section>
    )
}