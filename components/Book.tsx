import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Book = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-bold">Book an Appointment</h2>
      <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Ready to book an appointment? Have a question about our services? Feel
        free to get in touch with us. Our team is here to assist you.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            className="inline-block text-sm font-medium peer"
            htmlFor="name"
          >
            Full Name
          </label>
          <Input
            id="name"
            placeholder="Enter your full name"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            className="inline-block text-sm font-medium peer"
            htmlFor="email"
          >
            Email
          </label>
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            className="inline-block text-sm font-medium peer"
            htmlFor="phone"
          >
            Phone
          </label>
          <Input
            id="phone"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            className="inline-block text-sm font-medium peer"
            htmlFor="date"
          >
            Date and Time
          </label>
          <Input
            id="date"
            placeholder="Select date and time"
            type="datetime-local"
          />
          <div className="w-4 h-4 absolute top-3.5 right-3 pointer-events-none text-gray-500 dark:text-gray-400" />
        </div>
      </div>
      <Button size="lg">Book Appointment</Button>
    </div>
  );
};

export default Book;
