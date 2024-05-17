export default function MyBar() {
    return (
        <section id="myBar" className="flex flex-row justify-end pb-1" >
            <div className="flex flex-row items-center px-2 py-2 hover:bg-sky-100 rounded-md">
                <p className="pr-1">Favoritos</p>
                <span class="iconify mdi-light--heart" style={{ width: 36, height: 36 }} />
            </div>
            <div className="flex flex-row items-center px-2 py-2 hover:bg-sky-100 rounded-md">
                <p className="pr-1">Compartir</p>
                <span class="iconify mdi-light--share-variant" style={{ width: 36, height: 36 }} />
            </div>
            <div className="flex flex-row items-center px-2 py-2 hover:bg-sky-100 rounded-md">
                <p className="pr-1">Contactar</p>
                <span class="iconify mdi-light--phone" style={{ width: 36, height: 36 }} />
            </div>
        </section>
    )
}