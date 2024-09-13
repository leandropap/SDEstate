import Dropdown from "./Filter"
import Button from "./Button";

export default function SearchBar() {
    const options = ['Casa', 'Departamento', 'Finca', 'Terreno', 'Oficina', 'Local Comercial', 'Galpón'];

    return (
        <section id="search-bar" className="relative justify-center z-10 text-md font-medium w-fit">
            <div className="relative rounded-t-xl pt-4 px-4 z-50 max-w-fit bg-gray-300 bg-opacity-80 backdrop-blur-lg">
                <div className="flex flex-row">
                    <Button name="Comprar" margin="mr-2" />
                    <Button name="Alquilar" />
                </div>
            </div>
            <div className="relative rounded-b-xl rounded-e-xl py-4 px-4 z-20 bg-gray-300 bg-opacity-80 backdrop-blur-lg w-fit">
                <div className="flex flex-row">
                    <Dropdown type="drop" name="¿Que propiedad buscas?" content={options} bg="bg-sky-200" />
                    <input type="text" placeholder="Ubicacion o caracteristicas" className="border border-black rounded-md px-2 mr-2 font-extralight w-60" />
                    <Button name="Buscar" type="submit" />
                </div>
            </div>
        </section >
    )
}