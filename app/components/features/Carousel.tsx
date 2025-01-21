"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        // autoplaySpeed: 3000,
    };

    const images = ["/images/dish1.jpg", "/images/dish2.jpg", "/images/dish3.jpg", "/images/dish4.jpg"];

    return (
        <div className="Slider-container w-full bg-black text-white text-center">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="relative h-[40vh]">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${image})`,
                            }}
                        ></div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50"></div>

                        {/* Text Content */}
                        <div className="relative flex flex-col items-center justify-center h-full">
                            <h1 className="text-4xl font-bold text-white drop-shadow-md">
                                Welcome to RecipeME
                            </h1>
                            <p className="mt-2 text-lg text-gray-300">
                                Discover and create delicious recipes with ease.
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
