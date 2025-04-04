'use client';

import { LuGithub, LuLinkedin, LuMail, LuMenu, LuX } from 'react-icons/lu';
import React, { useState } from 'react';
import { gradientText } from '../app/utils/gradients';
import { AiOutlineGithub } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';
import { motion } from 'framer-motion';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-transparent backdrop-blur-lg z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a
                        href="#hero"
                        className={`block bg-clip-text text-transparent animate-gradient leading-normal text-2xl font-bold ${gradientText}`}
                    >
                        Shreyas Mulay
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-5">
                        <a href="#about" className="text-black dark:text-white  hover:text-gray-300 transition-colors">About</a>
                        <a href="#timeline" className="text-black dark:text-white hover:text-gray-300 transition-colors">Experience</a>
                        <a href="#projects" className="text-black dark:text-white hover:text-gray-300 transition-colors">Projects</a>
                        <a href="#contact" className="text-black dark:text-white hover:text-gray-300 transition-colors">Contact</a>
                        <div className="relative inline-block w-fit h-fit">
                            {/* Pulse Ring */}
                            <motion.span
                                className="absolute inset-0 rounded-md border border-fuchsia-500"
                                animate={{
                                    scale: [1, 1.5],
                                    opacity: [0.7, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeOut",
                                }}
                            />

                            {/* Button */}
                            <motion.button
                                onClick={() => {
                                    if (typeof window !== 'undefined') {
                                        window.gtag('event', 'download_resume', {
                                            event_category: 'Downloads',
                                            event_label: 'Resume Download',
                                            value: 1
                                        });
                                    }
                                    window.location.href = '/Shreyas_Mulay_Resume.pdf';
                                }}
                                className="relative z-10 cursor-pointer text-black dark:text-white hover:text-gray-300 transition-colors py-2 px-4 rounded-md border border-fuchsia-500 hover:border-gray-300 active:bg-gray-800"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Resume
                            </motion.button>
                        </div>
                        <div className="flex items-center space-x-4 align-middle">
                            <a href="https://github.com/shreyasmulay23" target="_blank" rel="noopener noreferrer"
                               title={'Github'}
                               className="text-black dark:text-white hover:text-gray-300">
                                <AiOutlineGithub className="w-5 h-5"/>
                            </a>
                            <a href="https://www.linkedin.com/in/shreyasmulay23" target="_blank"
                               rel="noopener noreferrer"
                               title={'LinkedIn'}
                               className="text-black dark:text-white hover:text-gray-300">
                                <ImLinkedin className="w-5 h-5"/>
                            </a>
                            <a href="mailto:shreyasmulay23@gmail.com"
                               className="text-black dark:text-white hover:text-gray-300" title={'Mail'}>
                                <LuMail className="w-5 h-5"/>
                            </a>
                        </div>
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}
                                className="text-fuchsia-500 dark:text-fuchsia-500 cursor-pointer">
                            {isOpen ? <LuX className="w-6 h-6"/> : <LuMenu className="w-6 h-6"/>}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="md:hidden bg-black/70 backdrop-blur-lg rounded-lg">
                        <div className="flex flex-col space-y-4 px-4 pt-4 pb-6 items-center justify-center">
                            <a href="#about" className="text-white hover:text-gray-300"
                               onClick={() => setIsOpen(false)}>About</a>
                            <a href="#timeline" className="text-white hover:text-gray-300"
                               onClick={() => setIsOpen(false)}>Experience</a>
                            <a href="#projects" className="text-white hover:text-gray-300"
                               onClick={() => setIsOpen(false)}>Projects</a>
                            <a href="#contact" className="text-white hover:text-gray-300"
                               onClick={() => setIsOpen(false)}>Contact</a>

                            <div className="relative inline-block w-fit h-fit">
                                {/* Pulse Ring */}
                                <motion.span
                                    className="absolute inset-0 rounded-md border border-fuchsia-500"
                                    animate={{
                                        scale: [1, 1.5],
                                        opacity: [0.7, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeOut",
                                    }}
                                />

                                {/* Button */}
                                <motion.button
                                    onClick={() => {
                                        if (typeof window !== 'undefined') {
                                            window.gtag('event', 'download_resume', {
                                                event_category: 'Downloads',
                                                event_label: 'Resume Download',
                                                value: 1
                                            });
                                        }
                                        window.location.href = '/Shreyas_Mulay_Resume.pdf';
                                    }}
                                    className="relative z-10 cursor-pointer text-white hover:text-gray-300 transition-colors py-2 px-4 rounded-md border border-fuchsia-500 hover:border-gray-300 active:bg-gray-800"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Resume
                                </motion.button>
                            </div>

                            <div className="flex space-x-4 py-2">
                                <a href="https://github.com/shreyasmulay23" target="_blank" rel="noopener noreferrer"
                                   className="text-white hover:text-gray-300">
                                    <LuGithub className="w-5 h-5"/>
                                </a>
                                <a href="https://www.linkedin.com/in/shreyasmulay23" target="_blank"
                                   rel="noopener noreferrer"
                                   className="text-white hover:text-gray-300">
                                    <LuLinkedin className="w-5 h-5"/>
                                </a>
                                <a href="mailto:shreyasmulay23@gmail.com" className="text-white hover:text-gray-300">
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
