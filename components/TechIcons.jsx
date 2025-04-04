'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


function TechIcons() {
    const techStack = [
        { src: "/react.svg", alt: "React", title: "React" },
        { src: "/nextjs.svg", alt: "Next JS", title: "Next JS", invert: true },
        { src: "/nodejs.svg", alt: "Node JS", title: "Node JS" },
        { src: "/threejs.svg", alt: "Three JS", title: "Three JS", invert: true },
        { src: "/tailwindcss.svg", alt: "Tailwind CSS", title: "Tailwind CSS" },
        { src: "/google-cloud.svg", alt: "Google Cloud", title: "Google Cloud" },
    ];

    const iconVariants = {
        initial: { opacity: 0, y: 10 },
        animate: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
        }),
    };

    return (
        <div className="mt-6 flex items-center gap-4 flex-wrap justify-center md:justify-start">
            {techStack.map((tech, i) => (
                <motion.div
                    key={tech.alt}
                    custom={i}
                    initial="initial"
                    animate="animate"
                    whileHover={{ scale: 1.1 }}
                    variants={iconVariants}
                >
                    <Image
                        src={tech.src}
                        width={48}
                        height={48}
                        alt={tech.alt}
                        title={tech.title}
                        className={`h-12 w-12 object-cover ${tech.invert ? "dark:filter dark:invert" : ""}`}
                    />
                </motion.div>
            ))}
            <span className="text-black dark:text-gray-400">...and more</span>
        </div>
    );
}

export default TechIcons;
