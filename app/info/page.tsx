/* eslint-disable @next/next/no-img-element */
import { JSX, SVGProps } from 'react';

export default function Page() {
  return (
    <div className="bg-white text-black h-screen items-center">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <br />
        <br />
        <h1 className="text-3xl font-bold text-center">BIGGIES</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          <div className="md:col-span-2">
            <img
              alt="Map"
              className="w-full h-full rounded-lg shadow-md"
              src="https://cdn.discordapp.com/attachments/336485290669768704/1210991017520529520/Snapchat-1539447698.jpg?ex=65ec9245&is=65da1d45&hm=3980584aa1b8ad1eef7a1243976741367e637fb04f2269b58752a8c10c67bbd9&"
              style={{
                aspectRatio: '600/500',
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="rounded-md">
            <h2 className="text-xl font-semibold mb-4 ml-2">Opening Hours</h2>
            <ul className="space-y-1 ml-2">
              <li>Monday - 10:00-19:00</li>
              <li>Tuesday - 10:00-19:00</li>
              <li>Wednesday - 10:00-19:00</li>
              <li>Thursday - 10:00-19:00</li>
              <li>Friday - 10:00-19:00</li>
              <li>Saturday - 10:00-17:00</li>
              <li>Sunday - Closed</li>
            </ul>
          </div>
        </div>
        <div className="bg-white text-black py-4 px-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold">Contact</h2>
              <p>Telefonnummer: +46 73-227 49 32</p>
              <p>E-mail: example@example.com</p>
              <p>Some Street 123, 45678 Stockholm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FacebookIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
