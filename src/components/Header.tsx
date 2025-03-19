import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logowafrah.png" alt="Wafrah Gold Logo" width={100} height={100} className="py-2" />
            <span className="ml-2 text-amber-600">🇮🇳</span>
          </Link>
        </div>
        
        <div className="text-center">
          <Link href="/" className="text-2xl font-bold tracking-wider text-amber-600">
            WAFRAH GOLD
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="hover:text-amber-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
          <Link href="/wishlist" className="hover:text-amber-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </Link>
          <Link href="/cart" className="hover:text-amber-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </Link>
        </div>
      </div>
      
      <nav className="border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8 py-3 text-sm font-medium">
            <li><Link href="/new-arrivals" className="hover:text-amber-600">New Arrivals</Link></li>
            <li className="group relative">
              <Link href="/collections" className="hover:text-amber-600 flex items-center">
                Collections
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
                <Link href="/collections/necklaces" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Necklaces</Link>
                <Link href="/collections/earrings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Earrings</Link>
                <Link href="/collections/rings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Rings</Link>
                <Link href="/collections/bracelets" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Bracelets</Link>
                <Link href="/collections/pendants" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Pendants</Link>
              </div>
            </li>
            <li className="group relative">
              <Link href="/women" className="hover:text-amber-600 flex items-center">
                Women
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
                <Link href="/women/necklaces" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Necklaces</Link>
                <Link href="/women/earrings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Earrings</Link>
                <Link href="/women/rings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Rings</Link>
                <Link href="/women/bracelets" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Bracelets</Link>
                <Link href="/women/bangles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Bangles</Link>
                <Link href="/women/bridal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Bridal Sets</Link>
              </div>
            </li>
            <li><Link href="/brands" className="hover:text-amber-600">Brands</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
