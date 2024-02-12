import Nav from '@/components/Nav';
import BarberShopExperiance from '@/components/BarberShopExperiance';
import RelaxingServices from '@/components/RelaxingServices';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Book from '@/components/Book';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white py-8 px-6 gap-2">
      <section className="w-full">
        <img
          alt="Hero"
          className="w-full h-96 lg:h-96 object-cover rounded-md shadow-lg"
          src="https://as1.ftcdn.net/v2/jpg/02/05/49/82/1000_F_205498258_AfQmtyR5kO5llwKd6fWRRxcc4xRUbQcb.jpg"
        />
      </section>

      <BarberShopExperiance />
      <RelaxingServices />
      <section className="w-full py-12 lg:py-16 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <Services />
            <Book />
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}
