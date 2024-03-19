/* eslint-disable @next/next/no-img-element */
import { JSX, SVGProps } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Link from 'next/link';

export default async function IndexImgs() {
  const images = [
    {
      src: '/assets/Snapchat-897049588.jpg',
    },
    {
      src: '/assets/Snapchat-938434518.jpg',
    },

    {
      src: '/assets/Snapchat-1652457907.jpg',
    },
    {
      src: '/assets/Snapchat-1539447698.jpg',
    },
    {
      src: '/assets/Snapchat-1378973570.jpg',
    },
    {
      src: '/assets/Snapchat-1746672802.jpg',
    },
    {
      src: '/assets/Snapchat-1962561883.jpg',
    },
    {
      src: '/assets/Snapchat-1015155767.jpg',
    },
    {
      src: '/assets/Snapchat-677566729.jpg',
    },
  ];

  return (
    <div className="bg-zinc-900 text-white">
      <div className="text-center py-10 mx-2">
        <h1 className="text-3xl font-bold">BIGGIES</h1>
        <p className="mt-4 text-md ">
          A hair cut is like a suit it&apos;s best when it&apos;s tailored for
          you.
        </p>
        <p className="mt-2 text-md ">
          Get a haircut that is tailored just for your face shape and head form,
          executed by flawless technique and maximum efficiency
        </p>
      </div>
      <hr className="border-gray-500" />

      <br />

      <h1 className="text-3xl font-bold text-center mb-6">Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 p-6  mb-3">
        <div className="flex flex-col items-center space-y-3 overflow-hidden mb-3">
          <p className=" text-xl font-bold">Beard</p>
          <p className="text-center text-sm font-normal">
            Precious and symmetry to get the maximum masculine appearance -
            150kr
          </p>
          <img
            alt="Instagram Logo"
            className="w-52 h-52"
            height="300"
            src="/assets/Snapchat-1236408388.jpg"
            style={{
              objectFit: 'cover',
              background: 'transparent',
              borderRadius: '100%',
            }}
            width="400"
          />
        </div>
        <div className="flex flex-col items-center space-y-3 overflow-hidden">
          <p className=" text-xl font-bold">Classic cut</p>
          <p className="text-center text-sm font-normal">
            Skilled hands with understanding of shapes and technique sculpts a
            classic haircut - 300kr
          </p>
          <img
            alt="Instagram Logo"
            className="w-52 h-52"
            src="/assets/Snapchat-1175998084.jpg"
            style={{
              objectFit: 'cover',
              background: 'transparent',
              borderRadius: '100%',
            }}
          />
        </div>

        <div className="flex flex-col items-center space-y-3 overflow-hidden mb-3">
          <p className=" text-xl font-bold">Skin fade</p>
          <p className="text-center text-sm font-normal">
            No need for explanation check the gallery - 300kr
          </p>
          <img
            alt="Instagram Logo"
            className="w-52 h-52"
            height="300"
            src="/assets/Snapchat-1445552303.jpg"
            style={{
              objectFit: 'cover',
              background: 'transparent',
              borderRadius: '100%',
            }}
            width="400"
          />
        </div>
      </div>

      {/* */}
      <hr className="border-gray-500 mb-6 mt-10" />
      <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>
      <div className="mx-12">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full"
        >
          <CarouselContent>
            {images?.map((m: any, index) => (
              <CarouselItem
                key={m?.index}
                className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/5 basis-1/1"
              >
                <img
                  alt={m.src}
                  className="object-cover w-screen h-72 md:l-72 lg:h-80 1xl:h-72 2xl:h-96 rounded-md"
                  height={400}
                  src={`${m.src}`}
                  width={400}
                  key={m?.index}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <br />
        <br />
      </div>
    </div>
  );
}

function ChevronRightIcon(
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
