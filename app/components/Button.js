export default function Button({ name, margin, type }) {
    return (
        <button className={`px-2 py-1 bg-sky-200 border border-black rounded-md
        hover:font-medium hover:underline hover:scale-105 focus:bg-orange-200
        focus:scale-105 focus:underline duration-200 ${margin}`} type={type}>
            {name}
        </button >
    )
}