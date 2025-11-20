import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import api from '../lib/api';

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
  'https://upload.wikimedia.org/wikipedia/commons/8/8a/Audi_logo_detail.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/9d/Mercedes_benz_logo1989.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/31/Toyota_logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/9/9b/Lamborghini_Logo.svg',
];

export default function StatsLogosNewsletter() {
  const [stats, setStats] = useState({ cars_sold: 0, happy_customers: 0, parts_in_stock: 0, total_cars: 0 });
  useEffect(() => { api.stats().then(setStats).catch(() => {}); }, []);

  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Cars Sold', value: stats.cars_sold },
            { label: 'Happy Customers', value: stats.happy_customers },
            { label: 'Parts in Stock', value: stats.parts_in_stock },
            { label: 'Cars Available', value: stats.total_cars },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-white">{s.value}</div>
              <div className="mt-2 text-gray-400">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden">
          <div className="flex gap-16 items-center animate-[scroll_30s_linear_infinite] opacity-80 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            {logos.map((l, i) => (
              <img key={i} src={l} className="h-10 grayscale invert opacity-70" />
            ))}
          </div>
          <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white">Subscribe to our newsletter</h3>
            <p className="text-gray-400 mt-2">Get exclusive deals, new arrivals, and expert tips.</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }} className="bg-white/5 border border-white/10 rounded-xl p-2 flex">
            <input required type="email" placeholder="Enter your email" className="flex-1 bg-transparent outline-none px-4 text-white placeholder:text-gray-500" />
            <button className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
