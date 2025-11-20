import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-[#0a0b0f] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight"
        >
          The New Standard of Luxury Performance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-lg sm:text-xl max-w-2xl text-gray-300"
        >
          Explore curated supercars, certified pre-owned icons, and premium parts – crafted for enthusiasts.
        </motion.p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#featured" className="px-6 py-3 rounded-md bg-red-600 hover:bg-red-700 text-white transition">Explore Cars</a>
          <a href="#offers" className="px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition">Latest Offers</a>
        </div>
      </div>
    </section>
  );
}
