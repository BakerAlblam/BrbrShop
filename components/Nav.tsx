import { HomeIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const Nav = () => {
  return (
    <header className="flex items-center justify-between text-sm w-full py-4 md:py-6 px-4 md:px-6 border-b">
      <nav className="flex items-center">
        <Link
          className="flex items-center font-semibold text-gray-800 dark:text-gray-200"
          href="#"
        >
          <HomeIcon className="w-5 h-5 mr-2" />
        </Link>
      </nav>
      <div className="flex items-center gap-4 md:gap-6">
        <Link
          className="inline-flex items-center font-semibold transition-colors hover:text-gray-900 dark:hover:text-gray-50"
          href="#"
        >
          Services
        </Link>

        <Link
          className="inline-flex items-center font-semibold transition-colors hover:text-gray-900 dark:hover:text-gray-50"
          href="#"
        >
          Gallery
        </Link>
        <Link
          className="inline-flex items-center font-semibold transition-colors hover:text-gray-900 dark:hover:text-gray-50"
          href="#"
        >
          Contact
        </Link>
        <Button
          size="sm"
          variant="outline"
          className="bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-300"
        >
          Book Now
        </Button>
      </div>
    </header>
  );
};

export default Nav;
