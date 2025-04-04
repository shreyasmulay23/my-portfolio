'use client';

import { motion } from 'framer-motion';
import { timelineData } from '../app/data/timeline';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import React from 'react';

import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from './ExperienceCard';
import { gradientText } from '../app/utils/gradients';
import { useTheme } from './ThemeProvider';
import { GoStarFill } from 'react-icons/go';

export default function Timeline() {
    const { theme } = useTheme();
    return (
        <section id="timeline" className="py-20 bg-ivory dark:bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className={`text-3xl md:text-4xl font-bold text-center mb-16 block bg-clip-text text-transparent animate-gradient leading-normal ${gradientText}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Experience & Education
                </motion.h2>
                <div className="mt-20 flex flex-col">
                    <VerticalTimeline lineColor={theme === 'dark' ? '#eef2ff' : '#1d1836'}>
                        {timelineData.map((experience, index) => (
                            Object.keys(experience).length > 0 ? (
                                <ExperienceCard
                                    key={`experience-${index}`}
                                    experience={experience}
                                    index={index}
                                />) : (<VerticalTimelineElement
                                iconStyle={{ background: '#A5158C' }}
                                icon={<div className="flex  w-full h-full">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="rounded-full flex justicenter w-full"
                                    >
                                        <GoStarFill className="w-6 h-6 text-white"/>
                                    </motion.div>
                                </div>}
                            />)
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
}