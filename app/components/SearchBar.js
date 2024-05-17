export default function SearchBar() {

    const options = ['Casa', 'Departamento', 'Finca', 'Terreno', 'Oficina', 'Local Comercial', 'Galpón'];

    return (
        <section id="search-bar" className="relative justify-center z-10 text-lg -ml-4 ">
            <div className="relative border-l border-r border-t border-black rounded-t-xl pt-4 px-6 z-50 max-w-fit bg-gray-300 bg-opacity-80 backdrop-blur-lg">
                <ul className="flex flex-row pb-2 ">
                    <button className="py-1 px-2 mr-2  bg-sky-200 border border-black rounded-md hover:font-medium hover:underline">Alquilar</button>
                    <button className="px-2 py-1 bg-sky-200 border border-black rounded-md hover:font-medium hover:underline">Comprar</button>
                </ul>
            </div>
            <div className="relative border-l border-r border-b border-black rounded-b-xl rounded-e-xl py-4 px-6 z-20 bg-gray-300 bg-opacity-80 backdrop-blur-lg">
                <div className="flex flex-row justify-center">
                    <form className="py-1 px-2 bg-sky-200 border border-black mr-4 rounded-md">
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
                    <input type="text" placeholder="Ubicacion o caracteristicas" className="border border-black rounded-md  py-1 px-2 mr-2" />
                    <button className="border border-black rounded-md py-1 px-2 bg-sky-200 hover:font-medium hover:underline">Buscar</button>
                </div>
            </div>
        </section >
    )
}