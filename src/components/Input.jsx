/* eslint-disable react/prop-types */
const Input = ({ handleRequest }) => {
    return (
        <section className="relative bottom-20">
            <form className="flex justify-center" onSubmit={handleRequest}>
                <input id="city" className="bg-white text-black p-4 py-2 rounded-3xl m-3" placeholder="Find a city..." />
                <button className="bg-blue-950/60 m-3 p-3 py-2 rounded-3xl">Search</button>
            </form>
        </section>
    )
}

export default Input