import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export function About() {
  return (
    <div className="bg-[#0a0b0f] min-h-screen text-white"><Navbar /><section className="pt-28 max-w-6xl mx-auto px-6 space-y-6">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="text-gray-300">We are a boutique luxury car showroom focused on rare exotics and pristine certified models. Our mission is to deliver white-glove service and unmatched quality.</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl"><h3 className="font-semibold mb-2">Vision</h3><p className="text-gray-400">Redefine luxury automotive retail with transparency and passion.</p></div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl"><h3 className="font-semibold mb-2">Mission</h3><p className="text-gray-400">Create memorable experiences and lifelong relationships with enthusiasts.</p></div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl"><h3 className="font-semibold mb-2">Values</h3><p className="text-gray-400">Integrity, excellence, and attention to detail.</p></div>
      </div>
    </section><div className="mt-16"><Footer /></div></div>
  );
}

export function Services() {
  return (
    <div className="bg-[#0a0b0f] min-h-screen text-white"><Navbar /><section className="pt-28 max-w-6xl mx-auto px-6 space-y-6">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl"><h3 className="font-semibold mb-2">Maintenance</h3><p className="text-gray-400">Routine service by certified technicians.</p></div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl"><h3 className="font-semibold mb-2">Detailing</h3><p className="text-gray-400">Ceramic coating, paint protection film, and interior care.</p></div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl"><h3 className="font-semibold mb-2">Performance</h3><p className="text-gray-400">Tuning and premium upgrades tailored to your car.</p></div>
      </div>
    </section><div className="mt-16"><Footer /></div></div>
  );
}

export function Buy() {
  return (
    <div className="bg-[#0a0b0f] min-h-screen text-white"><Navbar /><section className="pt-28 max-w-6xl mx-auto px-6 space-y-6">
      <h1 className="text-3xl font-bold">Buy a Car</h1>
      <p className="text-gray-300">Explore our inventory, apply for financing, and submit an inquiry. Our concierge will guide you through paperwork and delivery.</p>
      <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
        <h3 className="font-semibold mb-2">Financing Options</h3>
        <ul className="list-disc pl-5 text-gray-400 space-y-1"><li>0% down payment for eligible customers</li><li>Flexible terms up to 60 months</li><li>Trade-in support</li></ul>
      </div>
    </section><div className="mt-16"><Footer /></div></div>
  );
}
