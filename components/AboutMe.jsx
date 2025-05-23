'use client';

import { motion } from 'framer-motion';
import { gradientText } from '../app/utils/gradients';
import { skills } from '../app/data/skills';

export const metadata = {
    title: 'About | Shreyas Mulay',
    description: 'Know more about Shreyas Mulay, an experienced frontend engineer specializing in React, Web Components, and 3D web.'
};


export default function AboutMe() {
    return (
        <section className="py-20 bg-ivory dark:bg-primary" id={'about'}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto text-center mb-16"
                >
                    <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 block bg-clip-text text-transparent animate-gradient leading-normal ${gradientText}`}>About
                        Me</h2>
                    <p className="text-black dark:text-gray-400 text-lg">
                        Frontend Engineer with 11+ years of experience in React, Web Components, and 3D web development.
                        Expert in building high-performance, scalable, and visually immersive user interfaces.
                        Passionate about optimizing UX, accessibility, and web performance to create engaging digital
                        experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card-background card-shadow p-6 rounded-2xl"
                        >
                            <div className="text-fuchsia-500 mb-4">{skill.icon}</div>
                            <h3 className="text-xl font-semibold text-fuchsia-500 mb-2">
                                {skill.title}
                            </h3>
                            <p className="dark:text-gray-400 text-black  text-justify">{skill.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}