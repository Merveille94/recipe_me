"use client";

import React, { useState, useEffect } from "react";
import Search from "@/app/components/home/Search";
import Carousel from "@/app/components/features/Carousel";
import RecipeCard from "@/app/components/home/RecipeCard";

interface Recipe {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

export default function Home() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [name, setName] = useState("chicken");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
                );
                if (!res.ok) {
                    throw new Error("No records found");
                }
                const result = await res.json();
                setRecipes(Array.isArray(result.meals) ? result.meals : []);
            } catch (err) {
                console.error("Error fetching recipes:", err);
                setRecipes([]);
            }
            setLoading(false);
        };

        fetchRecipes();
    }, [name]);

    return (
        <section className="min-h-screen">
            <Carousel />
            <div className="flex items-center justify-center bg-black p-2">
                <Search setName={setName} setRecipes={setRecipes} />
            </div>
            <div className="flex items-center justify-center p-6">
                {loading && (
                    <h1 className="text-2xl font-semibold text-center mx-4 text-gray-500">
                        Loading...
                    </h1>
                )}
                {!loading && recipes?.length === 0 && (
                    <h1 className="text-2xl font-semibold text-center text-gray-500">
                        No recipes found!
                    </h1>
                )}
            </div>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {!loading &&
                        recipes.map((recipe) => (
                            <RecipeCard key={recipe.idMeal} recipe={recipe} />
                        ))}
                </div>
            </div>
        </section>
    );
}
