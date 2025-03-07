"use client";

import React, { useState } from "react";

// Define the props interface
interface SearchProps {
    setName: (name: string) => void; // setName accepts a string and returns void
    setRecipes: (recipes: never[]) => void; // setRecipes accepts an array and returns void
}

const Search: React.FC<SearchProps> = ({ setName, setRecipes }) => {
    const [search, setSearch] = useState<string>(""); // State for search term
    const [category, setCategory] = useState<string>("Chicken"); // State for selected category

    const onSearch = async () => {
        try {
            const nameEndpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
            const nameRes = await fetch(nameEndpoint);
            if (nameRes.ok) {
                const nameData = await nameRes.json();
                if (nameData.meals) {
                    setRecipes(nameData.meals);
                    setName(search);
                    return;
                }
            }

            const ingredientEndpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`;
            const ingredientRes = await fetch(ingredientEndpoint);
            if (ingredientRes.ok) {
                const ingredientData = await ingredientRes.json();
                if (ingredientData.meals) {
                    setRecipes(ingredientData.meals);
                    setName(search);
                    return;
                }
            }

            setRecipes([]); // No results found
            setName(search);
        } catch (error) {
            console.error("Search error:", error);
            setRecipes([]); // Handle error case
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSearch();
        }
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-4 m-4 md:gap-6">
            <select
                value={category}
                onChange={(e) => {
                    setCategory(e.target.value);
                    setName(e.target.value);
                }}
                className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none w-full sm:w-auto"
            >
                <option value="Chicken">Chicken</option>
                <option value="Beef">Beef</option>
                <option value="Lamb">Lamb</option>
                <option value="Pork">Pork</option>
            </select>

            <h1 className="text-lg font-semibold text-center text-gray-500 mx-4">
                OR
            </h1>

            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={handleKeyPress}
                className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none w-full sm:w-auto"
                placeholder="Search by recipe or ingredient"
            />

            <button
                onClick={onSearch}
                className="bg-black border-2 border-gray-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl w-full sm:w-auto"
            >
                Search
            </button>
        </div>
    );
};

export default Search;
