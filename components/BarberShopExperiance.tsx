import React from 'react';

const BarberShopExperiance = () => {
  return (
    <div>
      <section className="w-full py-12 lg:py-16 overflow-hidden">
        <div className="container flex flex-col items-center gap-6 px-4 md:px-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
              The Barber Shop
            </h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Welcome to our modern and stylish barber shop. Our experienced
              barbers are here to provide you with the perfect haircut, beard
              trim, or hot towel shave.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 lg:py-16 overflow-hidden">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">
              Your Destination for Grooming
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our shop offers a blend of traditional barbering with modern
              styling. We pay attention to the details, ensuring that every
              customer leaves our shop looking and feeling their best.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">
              Experienced and Friendly Barbers
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our team of barbers is skilled, professional, and dedicated to
              providing the highest quality service. Whether you want a classic
              haircut or a modern style, our barbers will ensure that you get
              the look you desire.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BarberShopExperiance;
