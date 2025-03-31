'use client';

import { LuBriefcase, LuGraduationCap } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { timelineData } from '../app/data/timeline';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import React from 'react';

import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from './ExperienceCard';
import { gradientText } from '../app/utils/gradients';

export default function Timeline() {
    return (
        <section id="timeline" className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className={`text-3xl md:text-4xl font-bold text-center mb-16 ${gradientText}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Experience & Education
                </motion.h2>
                <div className="mt-20 flex flex-col">
                    <VerticalTimeline>
                        {timelineData.map((experience, index) => (
                            <ExperienceCard
                                key={`experience-${index}`}
                                experience={experience}
                                index={index}
                            />
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
}