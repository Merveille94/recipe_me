"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Footer Top Section */}
                <div className="flex flex-wrap justify-between items-center">
                    {/* Logo or Branding */}
                    <div className="mb-4 sm:mb-0">
                        <h2 className="text-2xl font-bold text-white">RecipeME</h2>
                        <p className="text-sm mt-1">Your trusted recipe companion.</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap gap-4 text-sm">
                        <Link href="/" className="hover:text-white transition">
                            Home
                        </Link>
                        <Link href="/about" className="hover:text-white transition">
                            About
                        </Link>
                        <Link href="/contact" className="hover:text-white transition">
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="border-t border-gray-600 mt-6 pt-4 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} RecipeME. All rights reserved.</p>
                    <div className="flex space-x-4 mt-2 sm:mt-0">
                        <Link href="#" className="hover:text-white transition">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-white transition">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
