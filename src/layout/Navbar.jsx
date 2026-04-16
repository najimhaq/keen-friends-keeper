'use client';

import { useState } from 'react';
import useActivePath from '@/hook/useActivePath';
import Link from 'next/link';
import {
  FaHome,
  FaUserFriends,
  FaRegCalendarAlt,
  FaChartBar,
  FaTachometerAlt,
} from 'react-icons/fa';
import { RiMenuUnfold2Fill } from 'react-icons/ri';

const navLinks = [
  { name: 'Home', path: '/', icon: FaHome },
  { name: 'Friends', path: '/friends', icon: FaUserFriends },
  { name: 'Timeline', path: '/timeline', icon: FaRegCalendarAlt },
  { name: 'Stats', path: '/stats', icon: FaChartBar },
];

const Navbar = () => {
  const isActivePath = useActivePath();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur-md'>
      <nav className='container mx-auto max-w-7xl px-6 py-4 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2'>
          <h2 className='text-2xl font-bold text-gray-900'>
            Keen<span className='text-green-700'>Keeper</span>
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-4'>
          {navLinks.map((link) => {
            const isActive = isActivePath(link.path);
            const Icon = link.icon;

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-linear-to-r from-green-600 to-teal-500 text-white shadow-md'
                    : 'text-gray-700 hover:text-green-700 hover:bg-gray-100'
                }`}
              >
                <Icon className='h-5 w-5' />
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-all duration-300 cursor-pointer'
        >
          <RiMenuUnfold2Fill
            className={`size-6 transition-transform duration-300 ${
              isOpen ? 'rotate-90 text-green-700' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Dropdown with smooth animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white/90 backdrop-blur-md border-t border-gray-200`}
      >
        <div className='px-6 py-4 space-y-2'>
          {navLinks.map((link) => {
            const isActive = isActivePath(link.path);
            const Icon = link.icon;

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-linear-to-r from-green-600 to-teal-500 text-white shadow-md'
                    : 'text-gray-700 hover:text-green-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon className='h-5 w-5' />
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
