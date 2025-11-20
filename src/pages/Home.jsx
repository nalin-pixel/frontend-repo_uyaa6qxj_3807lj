import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedCars from '../components/FeaturedCars';
import OffersPartsTestimonials from '../components/OffersPartsTestimonials';
import StatsLogosNewsletter from '../components/StatsLogosNewsletter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-[#0a0b0f] min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCars />
      <OffersPartsTestimonials />
      <StatsLogosNewsletter />
      <Footer />
    </div>
  );
}
