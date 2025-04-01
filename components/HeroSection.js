'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className="bg-primary text-white py-20 relative w-full min-h-screen flex items-center">
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
                        <span className="text-2xl md:text-4xl text-gray-400"><code
                            className={'text-fuchsia-500'}>&lt;span&gt;</code>&nbsp;Hey, I'm Shreyas&nbsp;<code
                            className={'text-2xl md:text-4xl text-fuchsia-500'}>&lt;/span&gt;</code></span>

                    <h1 className="text-3xl md:text-5xl mt-2">
                        <span className="text-fuchsia-500">Full Stack</span> Javascript Developer | AI-Powered 3D
                        Experiences
                    </h1>
                    <p className="mt-4 text-gray-400 text-sm md:text-lg">
                        <code
                            className={'text-fuchsia-500'}>&lt;p&gt;</code>&nbsp;Building <span
                        className={'text-fuchsia-500'}>scalable, interactive, and AI-driven</span> web solutions
                        with <span
                        className={'text-fuchsia-500'}>React, Next Js, Node Js,</span> and <span
                        className={'text-fuchsia-500'}>3D web technologies</span>... to shape the future of digital
                        experiences.&nbsp;
                        <code
                            className={'text-fuchsia-500'}>&lt;/p&gt;</code>
                    </p>
                    <div className="mt-6 flex items-center space-x-4">
                        <Image
                            src="/react.svg"
                            width={12}
                            height={12}
                            alt="React"
                            className="h-12 w-12 object-cover"
                        />
                        <Image
                            src="/nextjs.svg"
                            width={12}
                            height={12}
                            alt="Next JS"
                            className="h-12 w-12 object-cover filter invert"
                        />
                        <Image
                            src="/nodejs.svg"
                            width={12}
                            height={12}
                            alt="Node JS"
                            className="h-12 w-12 object-cover"
                        />
                        <Image
                            src="/threejs.svg"
                            width={12}
                            height={12}
                            alt="Mongo DB"
                            className="h-12 w-12 object-cover filter invert"
                        />
                        <span className={'text-gray-400'}>...and more</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;