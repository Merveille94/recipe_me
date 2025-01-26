import React from 'react'
import Link from "next/link";
import Image from "next/image";

interface Recipe {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard = ({recipe}: RecipeCardProps) => {
    return (
        <Link href={`/recipe/${recipe?.idMeal}`}>
        <div className="max-w-sm rounded-xl overflow-hidden border-2 border-gray-300 cursor-pointer hover:border-black">
            <Image src={recipe?.strMealThumb} width={400} height={250} className="bg-center bg-cover object-cover"
            alt="Meal image" />
            <h1 className="bg-gray-300 py-4 text-gray-700 font-semibold text-sm md:text-lg text-center">{recipe?.strMeal}</h1>
        </div></Link>
    )
}
export default RecipeCard
