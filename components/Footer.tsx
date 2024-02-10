import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex items-center w-full py-4 md:py-6 border-t">
      <div className="container flex items-center justify-between px-4 md:px-6">
        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link
            className="text-gray-900 dark:text-gray-50"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-gray-900 dark:text-gray-50"
            href="#"
          >
            Services
          </Link>
          <Link
            className="text-gray-900 dark:text-gray-50"
            href="#"
          >
            Team
          </Link>
          <Link
            className="text-gray-900 dark:text-gray-50"
            href="#"
          >
            Gallery
          </Link>
          <Link
            className="text-gray-900 dark:text-gray-50"
            href="#"
          >
            Contact
          </Link>
        </nav>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 The Barber Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
