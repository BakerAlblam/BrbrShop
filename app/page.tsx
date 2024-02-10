import Nav from '@/components/Nav';
import BarberShopExperiance from '@/components/BarberShopExperiance';
import RelaxingServices from '@/components/RelaxingServices';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Book from '@/components/Book';
import Visit from '@/components/Visit';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen sm:p-8 pb-4 px-3 gap-2">
      <Nav />
      <section className="w-full">
        <img
          alt="Hero"
          className="aspect-[3.4] w-full object-cover object-center rounded-sm"
          height="900"
          src="https://as1.ftcdn.net/v2/jpg/02/05/49/82/1000_F_205498258_AfQmtyR5kO5llwKd6fWRRxcc4xRUbQcb.jpg"
          width="1440"
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
      </section>
      <Visit />
      <Contact />
      <Footer />
    </div>
  );
}
