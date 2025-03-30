'use client';

import { LuGithub, LuLinkedin, LuMail, LuMenu, LuX } from 'react-icons/lu';
import { useState } from 'react';
import { gradientText } from '../app/utils/gradients';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-transparent backdrop-blur-lg z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/*<a href="#hero" className="text-2xl font-bold text-white">
                        Portfolio
                    </a>*/}
                    <a
                        href="#hero"
                        className={`text-2xl font-bold  ${gradientText}`}
                    >
                        Portfolio
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="text-white hover:text-gray-300 transition-colors">About</a>
                        <a href="#skills" className="text-white hover:text-gray-300 transition-colors">Skills</a>
                        <a href="#projects" className="text-white hover:text-gray-300 transition-colors">Projects</a>
                        <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
                        <div className="flex items-center space-x-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                               className="text-white hover:text-gray-300">
                                <LuGithub className="w-5 h-5"/>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                               className="text-white hover:text-gray-300">
                                <LuLinkedin className="w-5 h-5"/>
                            </a>
                            <a href="mailto:your.email@example.com" className="text-white hover:text-gray-300">
                                <LuMail className="w-5 h-5"/>
                            </a>
                        </div>
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white cursor-pointer ">
                            {isOpen ? <LuX className="w-6 h-6"/> : <LuMenu className="w-6 h-6"/>}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="md:hidden bg-black/70 backdrop-blur-lg rounded-lg">
                        <div className="flex flex-col space-y-4 px-4 pt-4 pb-6">
                            <a href="#about" className="text-white hover:text-gray-300"
                               onClick={() => setIsOpen(false)}>About</a>
                            <a href="#skills" className="text-white hover:text-gray-300"
                               onClick={() => setIsOpen(false)}>Skills</a>
                            <a href="#projects" className="text-white hover:text-gray-300"
                               onClick={() => setIsOpen(false)}>Projects</a>
                            <a href="#contact" className="text-white hover:text-gray-300"
                               onClick={() => setIsOpen(false)}>Contact</a>
                            <div className="flex space-x-4 py-2">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                                   className="text-white hover:text-gray-300">
                                    <LuGithub className="w-5 h-5"/>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                                   className="text-white hover:text-gray-300">
                                    <LuLinkedin className="w-5 h-5"/>
                                </a>
                                <a href="mailto:your.email@example.com" className="text-white hover:text-gray-300">
                                    <LuMail className="w-5 h-5"/>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}