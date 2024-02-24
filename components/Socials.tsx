import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
export default async function Socials() {
  return (
    <div className="bg-zinc-900 text-white">
      <br />
      <br />
      <br />
      <h1 className="text-3xl font-bold text-center">Socials</h1>
      <p className="text-xl text-center">
        Visit our social media to learn more{' '}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 p-6">
        <div className="flex flex-col items-center space-y-4 rounded-full overflow-hidden">
          <p className="text-lg ">Instagram</p>
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
          <p className="text-lg">TikTok</p>
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
  );
}
