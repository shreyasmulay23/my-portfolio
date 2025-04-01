import { Roboto_Mono, Spline_Sans_Mono } from 'next/font/google';
import './globals.css';

const splineSansMono = Spline_Sans_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-spline-sans-mono',
    weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
    title: 'Shreyas Mulay | Frontend Engineer & 3D Web Developer',
    description: 'Experienced Frontend Engineer with 11+ years of experience in React, Web Components, and 3D Web Development. Passionate about fast, scalable, and interactive user experiences.',
    keywords: 'Frontend Engineer, React Developer, Web Components, 3D Web, Next.js, Portfolio, UI Developer',
    authors: [{ name: 'Shreyas Mulay', url: 'https://shreyas-mulay.vercel.app' }],
    creator: 'Shreyas Mulay',
    openGraph: {
        title: 'Shreyas Mulay | Frontend Engineer',
        description: '11+ years of experience in React, Web Components, and 3D Web.',
        url: 'https://shreyas-mulay.vercel.app',
        siteName: 'Shreyas Mulay Portfolio',
        images: [
            {
                url: 'https://shreyas-mulay.vercel.app/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Shreyas Mulay Portfolio',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Shreyas Mulay | Frontend Engineer',
        description: 'React, Web Components & 3D Web Developer | 11+ years experience.',
        images: ['https://shreyas-mulay.vercel.app/og-image.jpg'],
    },
    verification: {
        google: '9pSD15HXjK49OQCcFratZLYxdT_0K3ufHoBNxBWhETY'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <meta name="google-site-verification" content="9pSD15HXjK49OQCcFratZLYxdT_0K3ufHoBNxBWhETY" />
        </head>
        <body
            className={`${splineSansMono.className}`}
        >
        {children}
        </body>
        </html>
    );
}
