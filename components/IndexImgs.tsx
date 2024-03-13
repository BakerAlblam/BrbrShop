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
      src: 'https://cdn.discordapp.com/attachments/336485290669768704/1207032091661967421/Snapchat-1611867692.jpg?ex=65de2b3c&is=65cbb63c&hm=ac6af1df5769c7327268dcf2f57265ce6464c41cacdbb172117cadee66291565&',
    },
    {
      src: 'https://cdn.discordapp.com/attachments/336485290669768704/1207032092060418198/Snapchat-1880471017.jpg?ex=65de2b3c&is=65cbb63c&hm=4b4d16f1f516a3943bd04c79e3be76889e99ac3a41ba3c5e18c9f306ba4d2265&',
    },

    {
      src: 'https://media.discordapp.net/attachments/336485290669768704/1210991017919250502/Snapchat-631626502.jpg?ex=65ec9245&is=65da1d45&hm=119dc2c3849d329172a1475b05b8a9b66aca0424406e6b92b5c33d1246e67255&=&format=webp&width=1195&height=796',
    },
    {
      src: 'https://cdn.discordapp.com/attachments/336485290669768704/1210991017520529520/Snapchat-1539447698.jpg?ex=65ec9245&is=65da1d45&hm=3980584aa1b8ad1eef7a1243976741367e637fb04f2269b58752a8c10c67bbd9&',
    },
    {
      src: 'https://cdn.discordapp.com/attachments/336485290669768704/1210991017197834380/Snapchat-1378973570.jpg?ex=65ec9245&is=65da1d45&hm=883ba7de145f38a3ed486af616d8cc9e7ea7127b1cbb7c0db344b331bda8c418&',
    },
    {
      src: 'https://cdn.discordapp.com/attachments/336485290669768704/1211019459217723442/Snapchat-1746672802.jpg?ex=65ecacc2&is=65da37c2&hm=ed1bed43d3bdf24c77130ab74e7fe1750373a46a9dea6e249e9cb060c6289890&',
    },
    {
      src: 'https://cdn.discordapp.com/attachments/336485290669768704/1211022452478578688/Snapchat-1015155767.jpg?ex=65ecaf8c&is=65da3a8c&hm=f3567921632eb5f1fd65ad99b8f9a31e314e65e2d828b4a966788f1bc1166d8f&',
    },
    {
      src: 'https://cdn.discordapp.com/attachments/336485290669768704/1211022451920867348/Snapchat-1962561883.jpg?ex=65ecaf8c&is=65da3a8c&hm=9fd94dc4b717408b0b8f3295e68f00d77cc39096979ae1672bcc887edf4ebc5b&',
    },
    {
      src: 'https://cdn.discordapp.com/attachments/336485290669768704/1211022453673959546/Snapchat-677566729.jpg?ex=65ecaf8c&is=65da3a8c&hm=387a15e3d234b02b4b548330635cc093afeb0b14f18db366a46f175e0ef758f4&',
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
            Precious and symmetry to get the maximum masculine appearance
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
            classic haircut.
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
            No need for explanation check the gallery
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
