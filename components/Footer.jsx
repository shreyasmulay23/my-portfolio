'use client';

import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { LuMail } from 'react-icons/lu';

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Shreyas Mulay. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}