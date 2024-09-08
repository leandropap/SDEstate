import Dropdown from "../components/Dropdown"

export default function Filter() {
    const propertyOptions = ['Casa', 'Departamento', 'Finca', 'Terreno', 'Oficina', 'Local Comercial', 'Galpón'];
    const operationOptions = ["Alquiler", "Venta"];
    const ambOptions = ["Dormitorios", "Ambientes"]

    return (
        <div className="flex flex-row justify-end mt-2">

            <Dropdown type="drop" name="Propiedades" content={propertyOptions} />

            <Dropdown type="drop" name="Operacion" content={operationOptions} />

            <Dropdown type="slider" name="Amd | Dorm" content={ambOptions} />

            <Dropdown type="text" name="Precio" />

        </div>
    )
}