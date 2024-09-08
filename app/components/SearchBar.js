export default function SearchBar() {

    const options = ['Casa', 'Departamento', 'Finca', 'Terreno', 'Oficina', 'Local Comercial', 'Galpón'];

    return (
        <section id="search-bar" className="relative justify-center z-10 text-md font-medium w-fit">
            <div className="relative rounded-t-xl pt-4 px-4 z-50 max-w-fit bg-gray-300 bg-opacity-80 backdrop-blur-lg">
                <ul className="flex flex-row">
                    <button className="py-1 px-2 mr-2  bg-sky-200 duration-200 border border-black rounded-md hover:font-medium hover:underline hover:scale-105 focus:bg-orange-200 focus:scale-105 focus:underline">Alquilar</button>
                    <button className="px-2 py-1 bg-sky-200 duration-200 border border-black rounded-md hover:font-medium hover:underline hover:scale-105  focus:bg-orange-200 focus:scale-105 focus:underline">Comprar</button>
                </ul>
            </div>
            <div className="relative rounded-b-xl rounded-e-xl py-4 px-4 z-20 bg-gray-300 bg-opacity-80 backdrop-blur-lg w-fit">
                <div className="flex flex-row">
                    <form className="py-1 px-2 bg-sky-200 border border-black mr-4 rounded-md">
                        <label className="relative">
                            <input type="checkbox" className="hidden peer" />

                            <div className="cursor-pointer after:content-['▼'] after:text-md after:ml-1 after:inline-flex after:items-center peer-checked:after:rotate-180 after:transition-transform ">
                                {"¿Que propiedad buscas?"}
                            </div>

                            <div className="absolute bg-white border border-black round transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto">
                                <ul>
                                    {options.map((option) => {
                                        return (
                                            <li key={option} className="flex flex-row justify-between">
                                                <span className="ml-1">{option}</span>
                                                <label className="flex whitespace-nowrap cursor-pointer px-2 py-1 transition-colors hover:bg-blue-100 [&:has(input:checked)]:bg-blue-200 z-50">
                                                    <input type="checkbox" value={option} className="cursor-pointer" />
                                                </label>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </label>
                    </form>
                    <input type="text" placeholder="Ubicacion o caracteristicas" className="border border-black rounded-md px-2  mr-4 font-extralight w-60" />
                    <button className="border border-black rounded-md py-1 px-2 bg-sky-200 hover:font-medium hover:underline hover:scale-105 duration-200">Buscar</button>
                </div>
            </div>
        </section >
    )
}