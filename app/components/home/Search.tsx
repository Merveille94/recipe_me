import React from 'react'

const Search = () => {
    return (
        <section className="flex items-center justify-center text-gray-200 m-4 space-x-1">
            <label htmlFor={"recipe"} className="font-semibold text-sm">Filter: </label>
            <select id="recipe" name={"recipe"} className="h-10 px-5 pr-1 text-sm border-2 border-gray-300 text-gray-400 rounded-lg focus:outline-none">
                <option value="Chicken sauce">Chicken Sauce</option>
                <option value="Beef Sauce">Beef Sauce</option>
                <option value="French fries">French Fries</option>
            </select>
            <h3 className="px-4">or</h3>
            <search>
                <form>
                    <label htmlFor={"search"} className="font-semibold text-sm pr-1">Search:</label>
                    <input name="search" id="search" placeholder="Search recipe" className="h-10 px-8 text-sm border-2 text-gray-500  border-gray-300 rounded-lg "/>
                </form>
            </search>
        </section>
    )
}
export default Search
