"use client" //Since I will be using input and state,  so i will not use the server side
import React, {useState, useEffect} from "react";
import Search from "@/app/components/home/Search";
import Carousel from "@/app/components/features/Carousel";
import RecipeCard from "@/app/components/home/RecipeCard";


interface Recipe {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

export default function Home() {
    const [search, setSearch] = useState<string>("");
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);

        const fetchRecipes = async () => {
            try{
                const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
                if(!res.ok){
                    throw Error('No records found');
                }
                const result = await res.json();
                setRecipes(result?.meals);

            }catch(err) {
                console.log(err);
            }
            setLoading(false);
        }

        fetchRecipes();
    },[])

    //console.log(recipes);
  return (
      <section className="min-h-screen">
          <Carousel/>
        <div className="flex items-center justify-center bg-black p-2">
          <Search/>
        </div>
        <div className="container mx-auto p-4 m-10">
            <div className="m-4 grid grid-cols-2 md:grid-cols-4 md:grid-rows-6 gap-4">{recipes?.map((recipe) => (
                <RecipeCard key={recipe?.idMeal} recipe={recipe}/>
            ))}</div>
        </div>
      </section>
  );
}
