export default function SearchBar() {

    const options = ['Casa', 'Departamento', 'Finca', 'Terreno', 'Oficina', 'Local Comercial', 'Galpón'];

    return (
        <section id="search-bar" className="flex justify-center py-4">
            <div className="border border-black rounded-md p-2  max-w-xl">
                <div >
                    <ul className="flex flex-row relative left-1/4 pb-2 ">
                        <li className="-ml-32 px-2 mr-2 border border-black rounded-md hover:bg-sky-100">Alquilar</li>
                        <li className="px-2 border border-black rounded-md hover:bg-sky-100">Comprar</li>
                    </ul>
                </div>
                <div className="flex flex-row justify-center">
                    <form className="py-1 border border-black mr-4 rounded-md px-2">
                        <label className="relative">
                            <input type="checkbox" className="hidden peer" />

                            <div className="cursor-pointer after:content-['▼'] after:text-xs after:ml-1 after:inline-flex after:items-center peer-checked:after:-rotate-180 after:transition-transform">
                                {"¿Que propiedad buscas?"}
                            </div>

                            <div className="absolute bg-white border border-black round transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto">
                                <ul>
                                    {options.map((option, i) => {
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
                    <input type="text" placeholder="Ubicacion o caracteristicas" className="border border-black rounded-md  py-1 px-2 mx-2" />
                    <button className="border border-black rounded-md py-1 px-2">Buscar</button>
                </div>
            </div>
        </section >
    )
}