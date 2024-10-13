import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://meikopoulos.com'),
    alternates: {
        canonical: 'https://meikopoulos.com',
    },
    title: 'Geovanni Mena - Software Engineer & Web Developer',
    description:
        'Alexander Meikopoulos is a Product designer, developer & founder.',
    keywords:
        'Alexander Meikopoulos, Product Designer, AI, Web3, Finance, User Experience, UI/UX Design, Design Systems, Front-end Development, Decentralized Finance, DeFi, Swoop Exchange, Vela Exchange, Stealth AI Startup, Technology, Innovation, Human-Centered Design',
    openGraph: {
        locale: 'en_US',
        siteName: 'Geovanni Mena',
        type: 'website',
        title: 'Geovanni Mena',
        description:
            'Alexander Meikopoulos is a Product designer, developer & founder.',
        url: 'https://meikopoulos.com',
        images: [
            {
                url: './og-large-meik-2.jpg',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Alexander Meikopoulos',
    },
    icons: {
        icon: '/datadog.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    );
}
