import Link from 'next/link';
import type { Metadata } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import { ThemeProvider } from '../components/theme-provider';
import { ThemeToggle } from '../components/theme-toggle';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

const newsreader = Newsreader({
    subsets: ['latin'],
    variable: '--font-serif',
    display: 'swap',
    style: ['normal', 'italic'],
});

export const metadata: Metadata = {
    title: 'Leonardo Gavaudan',
    description: 'Personal blog and portfolio',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${newsreader.variable}`}
            suppressHydrationWarning
        >
            <head>
                {/* Prevent flash of wrong theme */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                var theme = localStorage.getItem('theme');
                                if (!theme) {
                                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                                }
                                if (theme === 'dark') {
                                    document.documentElement.classList.add('dark');
                                }
                            })();
                        `,
                    }}
                />
            </head>
            <body className="font-sans flex flex-col min-h-screen transition-colors duration-300">
                <ThemeProvider>
                    <header
                        className="sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300"
                        style={{
                            backgroundColor: 'color-mix(in srgb, var(--bg-primary) 85%, transparent)',
                            borderColor: 'var(--border)',
                        }}
                    >
                        <nav className="max-w-3xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
                            <Link
                                href="/"
                                className="font-serif text-lg font-medium tracking-tight transition-colors duration-200"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                Leonardo Gavaudan
                            </Link>
                            <div className="flex items-center gap-1">
                                <Link
                                    href="/writings"
                                    className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-[var(--accent-subtle)]"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    Writings
                                </Link>
                                <Link
                                    href="/resume"
                                    className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-[var(--accent-subtle)]"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    Resume
                                </Link>
                                <div
                                    className="w-px h-5 mx-1"
                                    style={{ backgroundColor: 'var(--border)' }}
                                />
                                <ThemeToggle />
                            </div>
                        </nav>
                    </header>

                    <main className="grow max-w-3xl mx-auto w-full px-6 sm:px-8 py-12">
                        {children}
                    </main>

                </ThemeProvider>
            </body>
        </html>
    );
}
