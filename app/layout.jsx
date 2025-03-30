import { Roboto_Mono } from 'next/font/google';
import './globals.css';

const poppins = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-mono',
    weight: ['100', '200', '300', '400', '500', '600', '700']
});

export const metadata = {
    title: 'Shreyas Mulay | Portfolio',
    description: 'Lead Frontend Developer'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`${poppins.className}`}
        >
        {children}
        </body>
        </html>
    );
}
