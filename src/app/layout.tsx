import Link from 'next/link';
import type { Metadata } from 'next';
import './globals.css';

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
        <html lang="en">
            <body className="bg-gray-900 text-white flex flex-col min-h-screen">
                <header className="bg-gray-800 mb-4 py-4">
                    <nav className="container mx-auto px-4 flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <Link
                                href="/"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/writings"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                Writings
                            </Link>
                            <Link
                                href="/resume"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                Resume
                            </Link>
                        </div>
                        <div className="text-white">Leonardo Gavaudan</div>
                    </nav>
                </header>

                <main className="grow mx-16">{children}</main>
            </body>
        </html>
    );
}
