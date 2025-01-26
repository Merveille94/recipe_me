"use client";

import React, { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Navbar from "@/app/components/home/Navbar";
import { FaHamburger } from "react-icons/fa";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-black text-white p-5 font-semibold">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div>
                    <Link href="/" className="flex items-center">
                        <img src="/images/Logo.svg" alt="Logo" className="h-10 pr-2" />
                        <h1 className="hidden sm:block">RecipeMe</h1>
                    </Link>
                </div>

                {/* Navbar (hidden on small screens) */}
                <div className="hidden md:flex">
                    <Navbar />
                </div>

                {/* User Actions */}
                <div className="flex items-center space-x-4">
                    <SignedOut>
                        <div className="border-2 border-blue-200 hover:border-green-900 rounded-lg p-2 hover:bg-green-900">
                            <SignInButton />
                        </div>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>

                    {/* Hamburger Menu (visible on small screens) */}
                    <div className="block md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white p-2 focus:outline-none"
                        >
                            <FaHamburger size={25} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-4 p-4 rounded-lg">
                    <Navbar isMobile />
                </div>
            )}
        </header>
    );
};

export default Header;
