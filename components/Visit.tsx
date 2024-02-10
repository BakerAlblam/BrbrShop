import React from 'react';

const Visit = () => {
  return (
    <section className="w-full py-12 lg:py-16">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Visit Us</h2>
          <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Ready to experience the expertise of our barbers? Visit our shop and
            take the first step towards looking your best.
          </p>
        </div>
        <div className="grid items-center gap-4">
          <div className="aspect-map rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800">
            <img
              alt="Map"
              className="object-cover object-center"
              height="320"
              src="https://storage.googleapis.com/hairdressr-prod-blog/barberare-kungsholmen/barbershop.jpg"
              style={{
                aspectRatio: '640/320',
                objectFit: 'cover',
              }}
              width="640"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">The Barber Shop</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              123 Main Street, City, Country
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
