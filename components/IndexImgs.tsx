import { JSX, SVGProps } from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Link from 'next/link';

export default function IndexImgs() {
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
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmltgUC3yaMEFudSttjfzl0inj1im4tA7BuEySJZ7RYGwIR8spnixVTrrpgSgh9zKtToU&usqp=CAU',
    },
    {
      src: 'https://as2.ftcdn.net/v2/jpg/04/08/29/53/1000_F_408295383_RmfdT9eIulBQPXf21f1skfYwL9kabkwt.jpg',
    },
    {
      src: 'https://m.timecenter.se/img/upload/25952_place_22479_1000_7f3eceda66aabe22edcc253df81086d6.jpg',
    },
  ];

  return (
    <div className="bg-slate-900 text-white">
      <br />
      <div className="flex items-center justify-center text-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8 mr-2"
          alt="Flowbite Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          RABYS BARBERSHOP
        </span>
      </div>

      <nav className="flex justify-center space-x-24 py-5">
        <Link
          className="block text-xl font-bold hover:text-gray-300"
          href="/"
        >
          HOME
        </Link>
        <Link
          className="block text-xl font-bold hover:text-gray-300"
          href="#"
        >
          BOOKING
        </Link>
        <Link
          className="block text-xl font-bold hover:text-gray-300"
          href="/info"
        >
          INFO
        </Link>
      </nav>
      <div className="text-center py-10 mx-2">
        <h1 className="text-3xl font-bold">RABYS BARBERSHOP</h1>
        <p className="mt-6 text-md text-gray-400">
          We are an appointment and walk-in barbershop located in the midst of
          Stockholm. Every client gets their allocated time for best service and
          exclusive treatment.
        </p>
        <p className="mt-4 text-md text-gray-400">
          We are continually investing in ourselves through education and our
          tools to make sure constantly staying on the top of our game and
          giving the best to the industry.
        </p>
      </div>
      <hr className="border-gray-500" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-10">
        <div className="space-y-4">
          <img
            alt="Barbershop Interior"
            className="w-full h-auto"
            height="300"
            src="https://media.gettyimages.com/id/1322405644/vector/barbershop-retro-poster-barber-shop-beard-shaving.jpg?b=1&s=1024x1024&w=gi&k=20&c=hzcJV5AbMpZvgExUQpxoYyv087pS16Y38Odu459qZAY="
            style={{
              aspectRatio: '400/300',
              objectFit: 'cover',
            }}
            width="400"
          />
          <div className="flex justify-between items-center">
            <a
              className="text-lg hover:text-gray-300"
              href="#"
            >
              See More
            </a>
            <ChevronRightIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="space-y-4">
          <img
            alt="Barbershop Entrance"
            className="w-full h-auto"
            height="300"
            src="https://scaled-images.timma.fi/timma/image/upload/w_1080,c_limit,q_auto/v1586442445/c/sankt-eriks-barbershop-3b0bc600-7a6e-11ea-a6cd-61edda6c1b9b.jpg"
            style={{
              aspectRatio: '400/300',
              objectFit: 'cover',
            }}
            width="400"
          />
          <div className="flex justify-between items-center">
            <a
              className="text-lg hover:text-gray-300"
              href="#"
            >
              See More
            </a>
            <ChevronRightIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="space-y-4">
          <img
            alt="Barbershop Chairs"
            className="w-full h-auto"
            height="300"
            src="https://www.georgesklipp.se/wp-content/uploads/2017/11/slide4_opt.jpg"
            style={{
              aspectRatio: '400/300',
              objectFit: 'cover',
            }}
            width="400"
          />
          <div className="flex justify-between items-center">
            <a
              className="text-lg hover:text-gray-300"
              href="#"
            >
              See More
            </a>
            <ChevronRightIcon className="w-5 h-5" />
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
            {images?.map((m: any) => (
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
