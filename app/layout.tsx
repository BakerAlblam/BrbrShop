import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import Nav from '@/components/Nav';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-center space-x-24 py-5">
          <Link
            className="block text-xl font-bold hover:text-gray-600"
            href="/"
          >
            HOME
          </Link>
          <Link
            className="block text-xl font-bold hover:text-gray-600"
            href="#"
          >
            BOOKING
          </Link>
          <Link
            className="block text-xl font-bold hover:text-gray-600"
            href="/info"
          >
            INFO
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
