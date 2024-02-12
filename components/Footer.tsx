import Link from 'next/link';
import React from 'react';
import { Badge } from './ui/badge';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <section className="w-full py-8 lg:py-12">
      <h2 className="text-3xl font-bold relative mb-1">Opening Hours</h2>
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="grid items-center gap-4">
          <ul className="ml-2 gap-2 list-disc text-gray-400  md:text-base lg:text-base/relaxed ">
            <li>Monday - 10:00-19:00</li>
            <li>Tuesday - 10:00-19:00</li>
            <li>Wednesday - 10:00-19:00</li>
            <li>Thursday - 10:00-19:00</li>
            <li>Friday - 10:00-19:00</li>
            <li>Saturday - 10:00-17:00</li>
            <li>Sunday - Closed</li>
          </ul>
        </div>
        <div className="grid items-center gap-4">
          <div className="aspect-map rounded-xl overflow-hidden">
            <img
              alt="Map"
              className="object-cover object-center"
              height="320"
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/ff/61/25/getlstd-property-photo.jpg?w=1200&h=-1&s=1"
              style={{
                aspectRatio: '640/320',
                objectFit: 'cover',
              }}
              width="640"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">The Barber Shop</h3>
            <p className="text-sm text-gray-400">
              123 Main Street, City, Country
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
