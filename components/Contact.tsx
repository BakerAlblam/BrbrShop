import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Mail, Phone } from 'lucide-react';
import { Badge } from './ui/badge';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Ready to book an appointment? Have a question about our services? Feel
        free to get in touch with us. Our team is here to assist you.
      </p>
      <div className="flex gap-1 mt-2">
        <Badge>
          <Phone />
          <p className="ml-1 text-lg text-center">0700000000</p>
        </Badge>
        <Badge>
          <Mail />
          <p className="ml-1 text-lg text-center">
            <Link href={'mailto:Barber.com'}>Barber.com</Link>
          </p>
        </Badge>
      </div>
    </div>
  );
};

export default Contact;
