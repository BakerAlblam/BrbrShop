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
        </div>
        <div className="flex flex-col items-center space-y-4 rounded-full overflow-hidden">
          <p className="text-lg hover:text-gray-300">Facebook</p>
          <img
            alt="Instagram Logo"
            className="w-40 h-40"
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
            style={{
              objectFit: 'cover',
              background: 'transparent',
              borderRadius: '100%',
            }}
            width="400"
          />
        </div>
        <div className="flex flex-col items-center space-y-4 rounded-full overflow-hidden">
          <p className="text-lg hover:text-gray-300">TikTok</p>
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
        </div>
      </div>
      <div className="bg-white text-black py-4 px-6 shadow-md mt-4 mb-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-1">Telefonnummer: +46 10-456 78 89</p>
            <p className="mt-1">E-mail: example@example.com</p>
            <p className="mt-1">Some Street 123, 45678 Stockholm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
