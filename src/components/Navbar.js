import React, { useState } from "react";
import logo from "./logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-[#1b293b] border-b border-gray-300 px-6 py-4">
            <div className="flex justify-between items-center">
                <img src={logo} alt="Uptoskills Logo" className="h-10" />

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6">
                    <a href="/home" className="text-white font-medium hover:underline">
                        Home
                    </a>
                    <a href="/about" className="text-white font-medium hover:underline">
                        About
                    </a>
                    <a href="/programs" className="text-white font-medium hover:underline">
                        Programs
                    </a>
                    <a href="/contact" className="text-white font-medium hover:underline">
                        Contact
                    </a>
                </nav>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <nav className="md:hidden mt-4 flex flex-col space-y-3">
                    <a href="#" className="text-white font-medium hover:underline">
                        Home
                    </a>
                    <a href="#" className="text-white font-medium hover:underline">
                        About
                    </a>
                    <a href="#" className="text-white font-medium hover:underline">
                        Programs
                    </a>
                    <a href="#" className="text-white font-medium hover:underline">
                        Contact
                    </a>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
