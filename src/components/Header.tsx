"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FC, useState } from 'react';

const Header: FC = () => {
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [womenOpen, setWomenOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <Image src="/logowafrah.png" alt="Wafrah Gold" width={100} height={100} className="h-[100px] w-[100px]" />
          </Link>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-gray-700">
              <li><Link href="/new-arrivals" className="hover:text-amber-600">New Arrivals</Link></li>
              <li className="relative">
                <button 
                  className="flex items-center hover:text-amber-600 focus:outline-none"
                  onClick={() => {
                    setCollectionsOpen(!collectionsOpen);
                    if (womenOpen) setWomenOpen(false);
                  }}
                  onMouseEnter={() => setCollectionsOpen(true)}
                >
                  Collections
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {collectionsOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10"
                    onMouseLeave={() => setTimeout(() => setCollectionsOpen(false), 300)}
                  >
                    <Link href="/collections/necklaces" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Necklaces</Link>
                    <Link href="/collections/earrings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Earrings</Link>
                    <Link href="/collections/rings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Rings</Link>
                    <Link href="/collections/bracelets" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Bracelets</Link>
                    <Link href="/collections/pendants" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Pendants</Link>
                  </div>
                )}
              </li>
              <li className="relative">
                <button 
                  className="flex items-center hover:text-amber-600 focus:outline-none"
                  onClick={() => {
                    setWomenOpen(!womenOpen);
                    if (collectionsOpen) setCollectionsOpen(false);
                  }}
                  onMouseEnter={() => setWomenOpen(true)}
                >
                  Women
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {womenOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10"
                    onMouseLeave={() => setTimeout(() => setWomenOpen(false), 300)}
                  >
                    <Link href="/women/necklaces" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Necklaces</Link>
                    <Link href="/women/earrings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Earrings</Link>
                    <Link href="/women/rings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Rings</Link>
                    <Link href="/women/bracelets" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Bracelets</Link>
                    <Link href="/women/bangles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Bangles</Link>
                    <Link href="/women/bridal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Bridal Sets</Link>
                  </div>
                )}
              </li>
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            <Link 
              href="/admin/login" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-amber-600 relative"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              {isAdmin && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  ✓
                </span>
              )}
            </Link>
          </div>
          
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
