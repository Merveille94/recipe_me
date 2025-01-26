import Image from "next/image";

// Define the type for the API response
interface MealData {
    meals: {
        idMeal: string;
        strMeal: string;
        strMealThumb: string;
        strInstructions: string;
        strYoutube: string;
        [key: string]: string | null; // Dynamic properties for ingredients and measurements
    }[];
}

// Fetch data from the API
async function getData(id: string): Promise<MealData> {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

// Fix dynamic route with correct async params handling
export default async function Page(context: { params: { id: string } }) {
    const { id } = await context.params; // Await params to safely access `id`
    const data = await getData(id);

    const meal = data.meals[0];

    if (!meal) {
        return <div className="min-h-screen text-center">Meal not found!</div>;
    }

    return (
        <div className="min-h-screen container mx-auto my-20">
            <h1 className=" text-center mb-8">{meal.strMeal}</h1>
            <div className="flex border-2 border-gray-300 p-4">
                {/* Image */}
                <div className="relative w-1/2 h-[400px] mr-8">
                    <Image
                        src={meal.strMealThumb}
                        alt={`Image of ${meal.strMeal}`}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>

                {/* Information Section */}
                <div className="w-1/2">
                    <h2 className="text-xl font-semibold mb-4">Ingredients:</h2>
                    <ul>
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                            const ingredient = meal[`strIngredient${index}`];
                            const measurement = meal[`strMeasure${index}`];

                            if (ingredient && measurement) {
                                return (
                                    <li key={index}>
                                        <strong>{ingredient}</strong>: {measurement}
                                    </li>
                                );
                            }
                            return null;
                        })}
                    </ul>

                    <h2 className="text-xl text-white font-semibold mt-6 mb-2">Instructions:</h2>
                    <p className="text-white">{meal.strInstructions}</p>

                    {meal.strYoutube && (
                        <div className="mt-4">
                            <iframe
                                width="100%"
                                height="315"
                                src={meal.strYoutube.replace("watch?v=", "embed/")}
                                title="YouTube Video"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
