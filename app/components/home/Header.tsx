import React from 'react'
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
    return (
        <header className="container mx-auto flex items-center justify-between bg-black text-white p-5 font-semibold">
            <Link href="/"><h1>Recipe & Me</h1></Link>
            <nav>
                <ul>
                    <li><Link href={"/pages/user"}>Dashboard</Link></li>
                    <li><Link href={"/pages/user"}>About</Link></li>
                    <li><Link href={"/pages/user"}>Contacts</Link></li>
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
        </header>
    )
}
export default Header
