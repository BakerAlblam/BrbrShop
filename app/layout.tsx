import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BIGGIES',
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
        <nav className="flex justify-center space-x-24 py-5 bg-zinc-700 text-white">
          <Link
            className="block text-xl font-bold  hover:text-cyan-400 mt-1"
            href="/"
          >
            HOME
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="border-none bg-none block text-xl font-bold  hover:text-cyan-400">
                BOOKING
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Booking</DialogTitle>
                <DialogDescription>
                  <div className="bg-white text-black py-4 px-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <div className="mb-4 md:mb-0">
                        <p className="my-2">Telefonnummer: +46 73-227 49 32</p>
                        <p className="my-2">E-mail: Fadebybiggie@hotmail.com</p>
                        <p className="my-2">
                          Wargentinsgatan 37, 112 26 Stockholm
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Link
            className="block text-xl font-bold hover:text-cyan-400 mt-1"
            href="/info"
          >
            INFO
          </Link>
        </nav>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
