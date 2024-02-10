import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { JSX, SVGProps } from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center w-full py-4 md:py-6 px-4 md:px-6">
        <nav className="flex-1 ml-[-1.5rem]">
          <Link
            className="flex items-center gap-2 text-xl font-semibold"
            href="#"
          >
            <HomeIcon className="w-5 h-5" />
            Home
          </Link>
        </nav>
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            className="inline-flex items-center text-base font-semibold transition-colors hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Services
          </Link>
          <Link
            className="inline-flex items-center text-base font-semibold transition-colors hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Team
          </Link>
          <Link
            className="inline-flex items-center text-base font-semibold transition-colors hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Gallery
          </Link>
          <Link
            className="inline-flex items-center text-base font-semibold transition-colors hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Contact
          </Link>
          <Button
            size="sm"
            variant="outline"
          >
            Book Now
          </Button>
        </div>
      </header>
      <section className="w-full">
        <img
          alt="Hero"
          className="aspect-[3.4] overflow-hidden object-cover object-center"
          height="400"
          src="/placeholder.svg"
          width="1440"
        />
      </section>
      <section className="w-full py-12 lg:py-16">
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
          <div className="w-full max-w-[400px] space-y-2">
            <form className="flex flex-col gap-2">
              <label
                className="sr-only"
                htmlFor="email"
              >
                Email
              </label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
              />
              <Button
                className="w-full"
                type="submit"
              >
                Book an Appointment
              </Button>
            </form>
          </div>
        </div>
      </section>
      <section className="w-full py-12 lg:py-16">
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
      <section className="w-full py-12 lg:py-16">
        <div className="container grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
          <img
            alt="Image"
            className="rounded-xl aspect-video overflow-hidden object-cover object-center"
            height="400"
            src="/placeholder.svg"
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
      <section className="w-full py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">Services</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We offer a range of services to meet your grooming needs. From
                classic haircuts to beard trims, our barbers are skilled in the
                art of men’s grooming. Here are some of the services we provide:
              </p>
              <ul className="grid gap-2 list-disc text-gray-500 md:grid-cols-2 md:text-base lg:text-base/relaxed dark:text-gray-400">
                <li>Haircut</li>
                <li>Beard Trim</li>
                <li>Hot Towel Shave</li>
                <li>Moustache Trim</li>
                <li>Shampoo & Style</li>
                <li>Line Up</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">Contact Us</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Ready to book an appointment? Have a question about our
                services? Feel free to get in touch with us. Our team is here to
                assist you.
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
          </div>
        </div>
      </section>
      <section className="w-full py-12 lg:py-16">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Visit Us</h2>
            <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Ready to experience the expertise of our barbers? Visit our shop
              and take the first step towards looking your best.
            </p>
          </div>
          <div className="grid items-center gap-4">
            <div className="aspect-map rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800">
              <img
                alt="Map"
                className="object-cover object-center"
                height="320"
                src="/placeholder.svg"
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
      <footer className="flex items-center w-full py-4 md:py-6 border-t">
        <div className="container flex items-center justify-between px-4 md:px-6">
          <nav className="flex items-center gap-4 text-sm font-medium">
            <Link
              className="text-gray-900 dark:text-gray-50"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-gray-900 dark:text-gray-50"
              href="#"
            >
              Services
            </Link>
            <Link
              className="text-gray-900 dark:text-gray-50"
              href="#"
            >
              Team
            </Link>
            <Link
              className="text-gray-900 dark:text-gray-50"
              href="#"
            >
              Gallery
            </Link>
            <Link
              className="text-gray-900 dark:text-gray-50"
              href="#"
            >
              Contact
            </Link>
          </nav>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2023 The Barber Shop. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
