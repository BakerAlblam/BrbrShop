'use client';
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Axe } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

type Inputs = {
  name: string;
  email: string;
  phone: number;
  time: string;
};

const Book = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('');

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post('/api/book', {
      name,
      email,
      phone,
      time,
    });
    toast('Booking made!', {});
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-bold">Book an Appointment</h2>
      <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
        Ready to book an appointment? Have a question about our services? Feel
        free to get in touch with us. Our team is here to assist you.
      </p>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Input
              id="name"
              placeholder="Enter your full name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Input
              required
              id="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Input
              required
              className="text-slate-500"
              id="date"
              placeholder="Select date and time"
              type="datetime-local"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="mt-2 w-full bg-white text-black hover:bg-slate-600 hover:text-white"
        >
          Book Appointment
        </Button>
      </form>
    </div>
  );
};

export default Book;
