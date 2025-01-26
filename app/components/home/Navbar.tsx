import React from "react";
import Link from "next/link";

const Navbar = ({ isMobile = false }: { isMobile?: boolean }) => {
    const navClasses = isMobile
        ? "flex flex-col space-y-2"
        : "flex space-x-2";

    return (
        <nav>
            <ul className={navClasses}>
                <li className="rounded-lg p-2 bg-green-900 hover:bg-green-800 text-center">
                    <Link href={"/"}>Home</Link>
                </li>
                <li className="rounded-lg p-2 bg-green-900 hover:bg-green-800 text-center">
                    <Link href={"/pages/Info"}>Information</Link>
                </li>
                <li className="rounded-lg p-2 bg-green-900 hover:bg-green-800 text-center">
                    <Link href={"/pages/about"}>About</Link>
                </li>
                {/* Add more navigation links if needed */}
            </ul>
        </nav>
    );
};

export default Navbar;
