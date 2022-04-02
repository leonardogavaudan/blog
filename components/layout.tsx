import Link from 'next/link';

interface layoutProps {
    children: any;
}

const Layout = ({ children }: layoutProps) => {
    return (
        <div className="bg-gray-900 text-white flex flex-col min-h-screen">
            <header className="bg-gray-800 py-4">
                <div className="container mx-auto flex justify-center">
                    <Link href="/">
                        <a className="text-white">HOME</a>
                    </Link>
                    <span className="text-white mx-auto">
                        Yet Another Brilliant Blog
                    </span>
                </div>
            </header>

            <main className="grow mx-16">{children}</main>

            <footer className="bg-gray-800 flex">
                <div className="text-white mx-auto">Leonardo Gavaudan</div>
            </footer>
        </div>
    );
};

export default Layout;
