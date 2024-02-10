import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const Contact = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Ready to book an appointment? Have a question about our services? Feel
        free to get in touch with us. Our team is here to assist you.
      </p>
      <form className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label
            className="sr-only"
            htmlFor="name"
          >
            Name
          </label>
          <Input
            className="border-gray-200"
            id="name"
            placeholder="Enter your name"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="sr-only"
            htmlFor="email"
          >
            Email
          </label>
          <Input
            className="border-gray-200"
            id="email"
            placeholder="Enter your email"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-1 md:col-start-2">
          <label
            className="sr-only"
            htmlFor="message"
          >
            Message
          </label>
          <Textarea
            className="min-h-[100px] border-gray-200"
            id="message"
            placeholder="Enter your message"
          />
        </div>
        <Button
          className="md:col-start-2"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Contact;
