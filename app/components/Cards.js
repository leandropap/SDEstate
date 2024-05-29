'use client'
import Card from "./Card";
import Loading from "./Loading";
import { useAppContext } from "../context";


export default function Cards(props) {
    const { state } = useAppContext()
    const data = state.cardsProperties

    return (
        <section id='cards' className='flex flex-col py-16 bg-sky-50'>
            <p className='text-center text-4xl font-medium pb-8'>Te mostramos algunas de nuestras propiedades</p>
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