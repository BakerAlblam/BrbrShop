import React from 'react';

const Services = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-bold">Services</h2>
      <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        We offer a range of services to meet your grooming needs. From classic
        haircuts to beard trims, our barbers are skilled in the art of men’s
        grooming. Here are some of the services we provide:
      </p>
      <ul className="ml-2 grid gap-2 list-disc text-gray-500 md:grid-cols-2 md:text-base lg:text-base/relaxed dark:text-gray-400">
        <li>Haircut</li>
        <li>Beard Trim</li>
        <li>Hot Towel Shave</li>
        <li>Moustache Trim</li>
        <li>Shampoo & Style</li>
        <li>Line Up</li>
      </ul>
    </div>
  );
};

export default Services;
