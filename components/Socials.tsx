import { FacebookIcon, TwitterIcon } from 'lucide-react';

export default async function Socials() {
  return (
    <div className="bg-black">
      <br />
      <br />
      <br />
      <h1 className="text-3xl font-bold text-center">Socials</h1>
      <p className="text-xl text-center">
        Visit our social media to learn more{' '}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-10">
        <div className="flex flex-col items-center space-y-4 rounded-full overflow-hidden">
          <p className="text-lg hover:text-gray-300">Instagram</p>
          <img
            alt="Instagram Logo"
            className="w-72 h-72"
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            style={{
              objectFit: 'cover',
              background: 'transparent',
              borderRadius: '100%', // Apply border-radius to the image itself
            }}
            width="400"
          />
        </div>
        <div className="flex flex-col items-center space-y-4 rounded-full overflow-hidden">
          <p className="text-lg hover:text-gray-300">Facebook</p>
          <img
            alt="Instagram Logo"
            className="w-72 h-72"
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
            style={{
              objectFit: 'cover',
              background: 'transparent',
              borderRadius: '100%', // Apply border-radius to the image itself
            }}
            width="400"
          />
        </div>
        <div className="flex flex-col items-center space-y-4 rounded-full overflow-hidden">
          <p className="text-lg hover:text-gray-300">TikTok</p>
          <img
            alt="Instagram Logo"
            className="w-72 h-72"
            height="300"
            src="https://www.freepnglogos.com/uploads/tik-tok-logo-png/tik-tok-tiktok-logo-app-trend-1.png"
            style={{
              objectFit: 'cover',
              background: 'transparent',
              borderRadius: '100%', // Apply border-radius to the image itself
            }}
            width="400"
          />
        </div>
      </div>
      <div className="bg-white text-black py-4 px-6 rounded-lg shadow-md mt-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p>Telefonnummer: +46 10-456 78 89</p>
            <p>E-mail: example@example.com</p>
            <p>Some Street 123, 45678 Stockholm</p>
          </div>
          <div className="flex space-x-4"></div>
        </div>
      </div>
    </div>
  );
}