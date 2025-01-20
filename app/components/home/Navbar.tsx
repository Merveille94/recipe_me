import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="hidden md:flex">
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
    )
}
export default Navbar
