/* eslint-disable @next/next/no-img-element */
import { JSX, SVGProps } from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
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
      src: 'https://media.discordapp.net/attachments/336485290669768704/1207032092534247474/Snapchat-1445552303.jpg?ex=65de2b3c&is=65cbb63c&hm=a6c319a9dffd69628647cc7654905d921600f1c9f74368e9bedd7f76ef17b66d&=&format=webp&width=548&height=731',
    },
  ];

  return (
    <div className="bg-white text-black">
      <div className="text-center py-10 mx-2">
        <h1 className="text-3xl font-bold">FadeByBiggie</h1>
        <p className="mt-4 text-md text-gray-600">
          We are an appointment and walk-in barbershop located in the midst of
          Stockholm. Every client gets their allocated time for best service and
          exclusive treatment.
        </p>
        <p className="mt-2 text-md text-gray-600">
          We are continually investing in ourselves through education and our
          tools to make sure constantly staying on the top of our game and
          giving the best to the industry.
        </p>
      </div>
      <hr className="border-gray-500" />
      <div className=" text-black">
        <br />

        <h1 className="text-3xl font-bold text-center mb-6">Services</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 p-6 text-black mb-3">
          <div className="flex flex-col items-center space-y-4 rounded-full overflow-hidden">
            <Link
              href="https://www.instagram.com/fadebybiggie/"
              target="blank"
            >
              <img
                alt="Instagram Logo"
                className="w-40 h-40"
                height="300"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                style={{
                  objectFit: 'cover',
                  background: 'transparent',
                  borderRadius: '100%',
                }}
                width="400"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-full overflow-hidden">
            <Link
              href="https://www.instagram.com/fadebybiggie/"
              target="blank"
            >
              <img
                alt="Instagram Logo"
                className="w-40 h-40"
                height="300"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                style={{
                  objectFit: 'cover',
                  background: 'transparent',
                  borderRadius: '100%',
                }}
                width="400"
              />
            </Link>
          </div>

          <div className="flex flex-col items-center space-y-4 rounded-full overflow-hidden">
            <Link
              href="https://www.tiktok.com/@fadebybiggie"
              target="blank"
            >
              <img
                alt="Instagram Logo"
                className="w-40 h-40"
                height="300"
                src="https://www.freepnglogos.com/uploads/tik-tok-logo-png/tik-tok-tiktok-logo-app-trend-1.png"
                style={{
                  objectFit: 'cover',
                  background: 'transparent',
                  borderRadius: '100%',
                }}
                width="400"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* */}
      <hr className="border-gray-500 mb-6 mt-10" />
      <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>
      <div className="mx-6">
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
                  className="object-cover w-full h-72 md:l-72 lg:h-80 1xl:h-72 2xl:h-96 rounded-md"
                  height={400}
                  src={`${m.src}`}
                  width={400}
                  key={m?.index}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
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
