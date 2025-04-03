'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { LuArrowDown } from 'react-icons/lu';
import TechIcons from './TechIcons';

const HeroSection = () => {
    return (
        <div id="hero" className="bg-primary text-white py-20 relative w-full min-h-screen flex items-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative md:w-full flex justify-center items-center"
                >
                    <div>
                        <img
                            src="/shreyas.gif"
                            alt="Shreyas Mulay"
                            className="w-sm h-sm items-center md:w-lg md:h-lg xl:w-xl xl:h-xl object-cover"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-full flex flex-col justify-center gap-6 p-4 text-center md:text-left"
                >
                    <span className="text-2xl md:text-4xl text-gray-400">Hey, I'm Shreyas</span>
                    <h1 className="text-3xl md:text-5xl mt-2">
                        <span className="text-fuchsia-500">Full Stack</span> Engineer | AI-Powered 3D
                        Experiences
                    </h1>
                    <p className="mt-4 text-gray-400 text-sm md:text-lg">
                        Building <span
                        className={'text-fuchsia-500'}>scalable, interactive,</span> and <span
                        className={'text-fuchsia-500'}>AI-driven</span> web solutions
                        with <span
                        className={'text-fuchsia-500'}>React, Next Js, Node Js,</span> and <span
                        className={'text-fuchsia-500'}>3D web technologies</span>, deployed on <span
                        className={'text-fuchsia-500'}>Heroku, Vercel,</span> and <span
                        className={'text-fuchsia-500'}>Google Cloud Platform</span> to shape the future of digital
                        experiences.
                    </p>
                    <TechIcons/>
                    <motion.div
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <motion.div
                            animate={{
                                y: [0, 10, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        >
                            <LuArrowDown className="w-6 h-6 text-white/70"/>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;