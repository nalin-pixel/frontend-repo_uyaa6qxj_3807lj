import { motion } from 'framer-motion';

const bannerImages = [
  'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop',
];

const parts = [
  { title: 'Carbon Fiber Spoiler', price: 899, img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Ceramic Brake Kit', price: 1299, img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Performance Exhaust', price: 1599, img: 'https://images.unsplash.com/photo-1592853625600-5a973b0650b0?q=80&w=1200&auto=format&fit=crop' },
];

const testimonials = [
  { name: 'A. Rahman', text: 'Top-notch service and an incredible selection. My experience was flawless from start to finish.' },
  { name: 'S. Kapoor', text: 'They helped me source rare parts quickly. Highly recommend for luxury owners.' },
  { name: 'L. Tan', text: 'Absolute professionals. The car was pristine and delivery seamless.' },
];

export default function OffersPartsTestimonials() {
  return (
    <section className="bg-[#0a0b0f]">
      <div id="offers" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Latest Offers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {bannerImages.map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="relative overflow-hidden rounded-2xl border border-white/10">
              <img src={img} className="w-full h-64 object-cover hover:scale-105 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm text-gray-300">Limited Time</p>
                <h3 className="text-xl font-semibold">Exclusive Deal {i+1}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Spare Parts & Accessories</h2>
          <a href="/parts" className="text-red-500 hover:text-red-400">Browse catalog</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {parts.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden"><img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition" /></div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">{p.title}</h3>
                  <p className="text-gray-400">In Stock</p>
                </div>
                <div className="text-red-400 font-semibold">${p.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-gray-300">“{t.text}”</p>
              <p className="mt-4 text-white font-semibold">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
