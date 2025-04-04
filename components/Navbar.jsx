'use client';

import { LuGithub, LuLinkedin, LuMail, LuMenu, LuX } from 'react-icons/lu';
import { useState } from 'react';
import { gradientText } from '../app/utils/gradients';
import { AiOutlineGithub } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

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
                            className="cursor-pointer text-black dark:text-white hover:text-gray-300 transition-colors py-2 px-4 rounded-md border border-black dark:border-white hover:border-gray-300 active:bg-gray-800"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ repeat: Infinity, repeatType: 'loop', duration: 1.5 }}
                        >
                            Resume
                        </motion.button>
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
                            <a href="mailto:shreyasmulay23@gmail.com" className="text-black dark:text-white hover:text-gray-300" title={'Mail'}>
                                <LuMail className="w-5 h-5"/>
                            </a>
                            <a href={'#'}
                               onClick={toggleTheme}
                               className="text-black dark:text-white hover:text-gray-300"
                            >
                                {theme === 'dark' ? <MdLightMode className="w-5 h-5" title={'Toggle Light Mode'}/> : <MdDarkMode className="w-5 h-5" title={'Toggle Dark Mode'}/>}
                            </a>
                        </div>
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-black dark:text-white cursor-pointer">
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
                            <a href="#timeline" className="text-white hover:text-gray-300"
                               onClick={() => setIsOpen(false)}>Experience</a>
                            <a href="#projects" className="text-white hover:text-gray-300"
                               onClick={() => setIsOpen(false)}>Projects</a>
                            <a href="#contact" className="text-white hover:text-gray-300"
                               onClick={() => setIsOpen(false)}>Contact</a>

                            <motion.button
                                onClick={() => window.location.href = '/Shreyas_Mulay_Resume.pdf'}
                                className="cursor-pointer text-white hover:text-gray-300 transition-colors py-2 px-4 rounded-md border border-white hover:border-gray-300 active:bg-gray-800"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, repeatType: 'loop', duration: 1.5 }}
                            >
                                Resume
                            </motion.button>

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
                                <a href={'#'}
                                   onClick={toggleTheme}
                                   className="text-white hover:text-gray-300"
                                >
                                    {theme === 'dark' ? <MdLightMode className="w-5 h-5"/> : <MdDarkMode className="w-5 h-5"/>}
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
