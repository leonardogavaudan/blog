import Link from 'next/link';

interface layoutProps {
  children: any;
}

const Layout = ({ children }: layoutProps) => {
  return (
    <div className="bg-gray-900 text-white flex flex-col min-h-screen">
      <header className="bg-gray-800 mb-4 py-4">
        <nav className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/">
              <a className="text-white hover:text-gray-300 transition-colors">Home</a>
            </Link>
            <Link href="/writings">
              <a className="text-white hover:text-gray-300 transition-colors">Writings</a>
            </Link>
            <Link href="/resume">
              <a className="text-white hover:text-gray-300 transition-colors">Resume</a>
            </Link>
          </div>
          <div className="text-white">Leonardo Gavaudan</div>
        </nav>
      </header>

      <main className="grow mx-16">{children}</main>
    </div>
  );
};

export { Layout };
