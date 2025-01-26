import React from 'react';
import { Book, Globe, Search, Star } from 'lucide-react';
import Image from 'next/image';

const Info = () => {
    const features = [
        {
            icon: Search,
            title: "Extensive Recipe Search",
            description: "Browse thousands of recipes from various cuisines worldwide."
        },
        {
            icon: Book,
            title: "Detailed Recipe Information",
            description: "Complete ingredients, step-by-step instructions, and cooking tips."
        },
        {
            icon: Globe,
            title: "Global Cuisine Exploration",
            description: "Discover recipes from different countries and cultures."
        },
        {
            icon: Star,
            title: "Favorite & Save Recipes",
            description: "Bookmark and organize your favorite recipes for easy access."
        }
    ];

    const technologies = [
        "Next.js", "React", "Tailwind CSS",
        "TypeScript", "TheMealDB API"
    ];

    return (
        <div className="bg-gray-900 text-white min-h-screen py-16">
            <div className="max-w-5xl mx-auto px-4">
                {/* Project Header */}
                <div className="bg-gray-800 rounded-2xl overflow-hidden mb-12 shadow-2xl">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-12 text-center">
                        <h1 className="text-4xl font-bold mb-4">RecipeMe</h1>
                        <p className="text-xl text-gray-200">
                            Your Ultimate Recipe Exploration Companion
                        </p>
                    </div>

                    {/* Project Overview */}
                    <div className="p-8 text-center">
                        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            RecipeMe is a comprehensive web application designed to help food enthusiasts
                            discover, learn, and enjoy recipes from around the world. Built with modern
                            web technologies to provide a seamless and intuitive culinary experience.
                        </p>
                    </div>
                </div>

                {/* Features Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded-2xl flex items-start space-x-4 hover:shadow-xl transition-all"
                        >
                            <feature.icon className="text-blue-400 w-12 h-12 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Technologies & Screenshot */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Technologies Used */}
                    <div className="bg-gray-800 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-blue-400 mb-6">
                            Technologies
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* App Screenshot */}
                    <div className="bg-gray-800 rounded-2xl p-8 flex items-center justify-center">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/Screenshot 2025-01-26 011724.png"
                                alt="RecipeMe App Screenshot"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;