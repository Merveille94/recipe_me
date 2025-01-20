import React from 'react'
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
    return (
        <header className="flex items-center justify-center bg-black text-white p-5 font-semibold">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-xl"><Link href="/"><h1>Recipe & Me</h1></Link></div>
                <nav>
                    <ul className="flex space-x-1 ">
                        <li className="rounded-lg flex-1 p-2 bg-green-900 hover:bg-green-800 text-center">
                            <Link href={"/pages/user"}>Dashboard</Link>
                        </li>
                        <li className="rounded-lg flex-1 p-2 px-4 bg-green-900 hover:bg-green-800 text-center">
                            <Link href={"/pages/about"}>About</Link>
                        </li>
                        <li className="rounded-lg flex-1 p-2 bg-green-900 hover:bg-green-800 text-center">
                            <Link href={"/pages/contact"}>Contacts</Link>
                        </li>
                    </ul>
                </nav>


                <div>
                    <SignedOut>
                        <SignInButton/>
                    </SignedOut>
                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                </div>
            </div>
        </header>
    )
}
export default Header
