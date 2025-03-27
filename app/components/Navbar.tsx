"use client"
import { motion } from 'framer-motion';
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt4, HiX } from 'react-icons/hi';

const navLinks = [
    { title: "Projects", path: "#portfolio" },
    { title: "About", path: "#about" },
    { title: "Contact", path: "#contact" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const menuVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/5">
            <div className="container-custom flex justify-between items-center py-4">
                <Link href="/" className="text-2xl font-bold">
                    <span className="text-white">FK</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-8">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.path}
                                    className="text-white/70 hover:text-white transition-colors"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="https://drive.google.com/file/d/1ERPKOrRYtB2ZVoiBofO5tN1SpAuQvwhq/view?usp=sharing"
                                className="btn-primary text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Get CV
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white p-2 focus:outline-none"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt4 size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial="closed"
                animate={isMenuOpen ? "open" : "closed"}
                variants={menuVariants}
                className={`md:hidden absolute w-full bg-black border-b border-white/10 ${isMenuOpen ? 'block' : 'hidden'}`}
            >
                <nav className="container-custom py-6">
                    <ul className="space-y-4">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.path}
                                    onClick={closeMenu}
                                    className="block text-xl text-white/70 hover:text-white py-2 transition-colors"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-4">
                            <Link
                                href="https://drive.google.com/file/d/1ERPKOrRYtB2ZVoiBofO5tN1SpAuQvwhq/view?usp=sharing"
                                onClick={closeMenu}
                                className="btn-primary inline-block text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Get CV
                            </Link>
                        </li>
                    </ul>
                </nav>
            </motion.div>
        </header>
    );
};

export default Navbar;
