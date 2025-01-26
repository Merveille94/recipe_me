import Image from "next/image";

interface MealData {
    meals: {
        idMeal: string;
        strMeal: string;
        strMealThumb: string;
        strInstructions: string;
        strYoutube: string;
        [key: string]: string | null;
    }[];
}

async function getData(id: string): Promise<MealData> {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function Page(context: { params: { id: string } }) {
    const { id } = await context.params;
    const data = await getData(id);
    const meal = data.meals[0];

    if (!meal) {
        return <div className="min-h-screen flex items-center justify-center text-2xl text-gray-600">Meal not found!</div>;
    }

    return (
        <div className="bg-gray-800 min-h-screen py-12">
            <div className="container mx-auto bg-slate-900 shadow-2xl rounded-2xl overflow-hidden">
                {/* Meal Title */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 text-center">
                    <h1 className="text-3xl font-bold tracking-wide">{meal.strMeal}</h1>
                </div>

                {/* Content Container */}
                <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Image Section */}
                    <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={meal.strMealThumb}
                            alt={`Image of ${meal.strMeal}`}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                    </div>

                    {/* Details Section */}
                    <div>
                        {/* Ingredients */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-200 pb-2 mb-4">
                                Ingredients
                            </h2>
                            <ul className="space-y-2 text-gray-700">
                                {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                                    const ingredient = meal[`strIngredient${index}`];
                                    const measurement = meal[`strMeasure${index}`];

                                    return ingredient && measurement ? (
                                        <li
                                            key={index}
                                            className="flex items-center bg-blue-50 p-2 rounded-md"
                                        >
                                            <span className="w-8 h-8 bg-blue-200 rounded-full mr-3 flex items-center justify-center">
                                                {index}
                                            </span>
                                            <span className="font-medium text-blue-700">{ingredient}: {measurement}</span>
                                        </li>
                                    ) : null;
                                })}
                            </ul>
                        </div>

                        {/* Instructions */}
                        <div>
                            <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-400 pb-2 mb-4">
                                Cooking Instructions
                            </h2>
                            <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                                {meal.strInstructions}
                            </p>
                        </div>

                        {/* YouTube Video */}
                        {meal.strYoutube && (
                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-200 pb-2 mb-4">
                                    Video Tutorial
                                </h2>
                                <div className="rounded-xl overflow-hidden shadow-lg">
                                    <iframe
                                        width="100%"
                                        height="315"
                                        src={meal.strYoutube.replace("watch?v=", "embed/")}
                                        title="YouTube Video"
                                        className="hover:scale-105 transition-transform duration-300"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}