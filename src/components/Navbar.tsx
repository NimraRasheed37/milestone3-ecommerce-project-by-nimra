'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';  // Importing the Image component

// Importing icons from React Icons
import { FaBars, FaSearch, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchSidebarOpen, setIsSearchSidebarOpen] = useState(false);
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-around lg:justify-around items-center w-100 h-20 shadow-xl bg-white">
        <div>
          {/* Toggle Sidebar */}
          <FaBars
            size={28}
            className="lg:hidden w-8 ml-2 mr-2 cursor-pointer"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>
        <div>
          <Link href={"/"}>
            {/* Using Next.js Image component for logo */}
            <Image 
              className="h-14 ml-2" 
              src="/img/logo/Ababeel (4).png" 
              alt="logo" 
              width={150} // Set appropriate width for the image
              height={56} // Set appropriate height for the image
            />
          </Link>
        </div>
        <div className="hidden lg:flex justify-between lg:gap-4 xl:gap-8 text-red-950 font-bold text-lg">
          <Link className="navlinks" href="/">Home</Link>
          <Link className="navlinks" href="/books">Books</Link>
          <Link className="navlinks" href="#">Bookmarks</Link>
          <Link className="navlinks" href="/request-book">Request a Book</Link>
          <Link className="navlinks" href="/contact">Contact us</Link>
        </div>
        <div>
          <div className="flex md:justify-between items-center gap-10 ml-10">
            <FaSearch
              size={24}
              className="text-red-800 hover:text-red-600 cursor-pointer"
              onClick={() => setIsSearchSidebarOpen(!isSearchSidebarOpen)}
            />
            <FaShoppingCart
              size={24}
              className="text-red-800 hover:text-red-600 cursor-pointer"
              onClick={() => setIsCartSidebarOpen(!isCartSidebarOpen)}
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-lg p-4 z-50">
          <button
            className="absolute top-4 right-4 mt-4 text-red-800 text-2xl font-bold mb-4"
            onClick={() => setIsSidebarOpen(false)}
          >
            X
          </button>
          <Link href={"/"}>
            {/* Using Next.js Image component for logo */}
            <Image 
              src="/img/logo/Ababeel (4).png" 
              alt="logo" 
              className="w-32 py-1 mb-10 ml-2" 
              width={128} // Set appropriate width for the image
              height={72} // Set appropriate height for the image
            />
          </Link>
          <ul className="space-y-8 text-red-950 font-bold">
            <li><Link className="navlinks" href="/">Home</Link></li>
            <li><Link className="navlinks" href="/books">Books</Link></li>
            <li><Link className="navlinks" href="#">Bookmarks</Link></li>
            <li><Link className="navlinks" href="/request-book">Request a Book</Link></li>
            <li><Link className="navlinks" href="contact">Contact us</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
