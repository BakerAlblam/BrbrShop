import React from 'react';

const RelaxingServices = () => {
  return (
    <div>
      <section className="w-full py-12 lg:py-16 overflow-hidden">
        <div className="container grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
          <img
            alt="Image"
            className="rounded-xl aspect-video overflow-hidden object-cover object-center"
            height="400"
            src="https://storage.googleapis.com/hairdressr-prod-blog/barberare-kungsholmen/barbershop.jpg"
            width="600"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">
              Relaxing and Inviting Atmosphere
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Step into our shop and experience the welcoming ambiance. We
              believe that a visit to the barber should be more than just a
              haircut – it should be an enjoyable and relaxing experience. Our
              comfortable chairs, friendly staff, and great music create the
              perfect environment for you to unwind and enjoy your time with us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RelaxingServices;
