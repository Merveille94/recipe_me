import React from 'react'

const Search = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 text-gray-200 m-2 text-center">
            <div className="col-span-1 mb-2 md:mb-0">
                <label htmlFor={"recipe"} className="font-semibold text-sm hidden md:inline-block pr-2">Filter: </label>
                <select id="recipe" name={"recipe"} className="ml-2 h-10 pr-10 text-sm border-2 border-gray-300 text-gray-600 rounded-lg focus:outline-none">
                    <option value="Chicken">Chicken Sauce</option>
                    <option value="Beef">Beef Sauce</option>
                    <option value="Fish">French Fries</option>
                </select>
            </div>
            {/*<div className="col-1"><h3 className="px-4 font-semibold">or</h3></div>*/}
            <div className="col-span-1">
                <search>
                    <form className="space-x-2 flex items-center justify-center flex-col md:flex-row">
                        <label htmlFor={"search"} className="font-semibold text-sm hidden md:inline-block ">Search:</label>
                        <input name="search" id="search" placeholder="Search recipe" className="h-10 pl-2 text-sm text-gray-600 rounded-lg mb-2 md:mb-0 " />
                        <button type="submit" className="h-10 font-semibold px-16 text-sm text-center text-gray-100 bg-green-800 rounded-lg">Search</button>
                    </form>
                </search>
            </div>
        </section>
    )
}
export default Search
