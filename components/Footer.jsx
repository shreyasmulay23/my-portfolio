'use client';

export default function Footer() {
    return (
        <footer className="bg-ivory dark:bg-primary text-white py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Shreyas Mulay. All rights reserved. <br/>All images are property of
                        their respective owners and are used with permission.</p>
                </div>
            </div>
        </footer>
    );
}