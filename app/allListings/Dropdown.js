import Filter from "../components/Filter"

export default function Dropdown() {
    const propertyOptions = ['Casa', 'Departamento', 'Finca', 'Terreno', 'Oficina', 'Local Comercial', 'Galpón'];
    const operationOptions = ["Alquiler", "Venta"];
    const ambOptions = ["Dormitorios", "Ambientes"]


    return (
        <div className="flex flex-row justify-end mt-2">
            <Filter type="drop" name="Propiedades" val="propertyType" content={propertyOptions} />
            <Filter type="drop" name="Operacion" val="operationType" content={operationOptions} />
            <Filter type="slider" name="Amd | Dorm" content={ambOptions} />
            <Filter type="text" name="Precio" />
        </div>
    )
}