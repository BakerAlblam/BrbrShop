import { HomeIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const Nav = () => {
  return (
    <header className="flex items-center text-center text-sm w-full py-4 md:py-6 px-4 md:px-6 xl:px-10">
      <nav className="flex-1">
        <Link
          className="flex items-center font-semibold"
          href="#"
        >
          <HomeIcon className="w-5 h-5" />
        </Link>
      </nav>
      <div className="flex items-center gap-4 md:gap-6">
        <Link
          className="inline-flex items-center  font-semibold transition-colors hover:text-gray-900 dark:hover:text-gray-50"
          href="#"
        >
          Services
        </Link>

        <Link
          className="inline-flex items-center  font-semibold transition-colors hover:text-gray-900 dark:hover:text-gray-50"
          href="#"
        >
          Gallery
        </Link>
        <Link
          className="inline-flex items-center  font-semibold transition-colors hover:text-gray-900 dark:hover:text-gray-50"
          href="#"
        >
          Contact
        </Link>
        <Button
          size="sm"
          variant="outline"
        >
          Book Now
        </Button>
      </div>
    </header>
  );
};

export default Nav;
