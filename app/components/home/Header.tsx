import React from 'react'
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import Link from "next/link";
import Navbar from "@/app/components/home/Navbar";
import {FaHamburger} from "react-icons/fa";

const Header = () => {
    return (
        <header className="flex items-center justify-center bg-black text-white p-5 font-semibold">
            <div className="container mx-auto flex items-center justify-between">
                <div><Link href="/" className="flex items-center justify-between"><img src="/images/Logo.svg" alt="Logo" className="h-10 pr-2"/><h1>RecipeMe</h1></Link></div>
                <Navbar/>
                <div className="flex items-center justify-center ">
                    <SignedOut>
                        <div className=" border-2 border-blue-200 hover:border-green-900 rounded-lg p-2 space-x-2 hover:bg-green-900"><SignInButton/></div>
                    </SignedOut>
                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                    <div className="text-white p-5 block md:hidden"><FaHamburger size={25}/></div>
                </div>
            </div>
        </header>
    )
}
export default Header
