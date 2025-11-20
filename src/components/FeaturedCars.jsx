import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import api from '../lib/api';

const demoImages = [
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549921296-3fd62c566c7e?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1400&auto=format&fit=crop',
];

export default function FeaturedCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    api.cars({ featured: true, limit: 8 }).then((r) => setCars(r.items)).catch(() => {
      // fallback demo data
      setCars([
        { id: '1', brand: 'Ferrari', model: '488 GTB', price: 245000, year: 2019, images: [demoImages[0]] },
        { id: '2', brand: 'Lamborghini', model: 'Huracán', price: 289000, year: 2020, images: [demoImages[1]] },
        { id: '3', brand: 'Porsche', model: '911 Turbo S', price: 199000, year: 2021, images: [demoImages[2]] },
        { id: '4', brand: 'Audi', model: 'R8 V10', price: 165000, year: 2018, images: [demoImages[3]] },
      ]);
    });
  }, []);

  return (
    <section id="featured" className="relative py-20 bg-gradient-to-b from-black to-[#0a0b0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Cars</h2>
          <a href="/cars" className="text-red-500 hover:text-red-400">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car, idx) => (
            <motion.div key={car.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: idx * 0.05 }} className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={(car.images && car.images[0]) || demoImages[idx % demoImages.length]} alt={`${car.brand} ${car.model}`} className="w-full h-full object-cover group-hover:scale-105 transition" />
                <button className="absolute top-3 right-3 bg-black/60 p-2 rounded-full text-white hover:bg-black/80"><Heart className="w-4 h-4" /></button>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">{car.brand} {car.model}</h3>
                    <p className="text-sm text-gray-400">{car.year} • {car.km ? `${car.km.toLocaleString()} km` : 'Low mileage'}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-red-400 text-lg font-semibold">${car.price?.toLocaleString()}</p>
                  </div>
                </div>
                <a href={`/cars/${car.id}`} className="mt-4 inline-block w-full text-center bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition">View Details</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
