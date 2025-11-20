import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from '../lib/api';

const demoImg = 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1400&auto=format&fit=crop';

export default function Cars() {
  const [filters, setFilters] = useState({ brand: '', model: '', condition: '', max_price: '' });
  const [cars, setCars] = useState([]);

  const load = () => {
    const params = {};
    if (filters.brand) params.brand = filters.brand;
    if (filters.model) params.model = filters.model;
    if (filters.condition) params.condition = filters.condition;
    if (filters.max_price) params.max_price = filters.max_price;
    api.cars(params).then((r) => setCars(r.items)).catch(() => setCars([]));
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="bg-[#0a0b0f] min-h-screen text-white">
      <Navbar />
      <section className="pt-28 max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Cars For Sale</h1>
        <div className="grid md:grid-cols-5 gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
          <input value={filters.brand} onChange={(e)=>setFilters({...filters, brand:e.target.value})} placeholder="Brand" className="bg-transparent border border-white/10 rounded px-3 py-2" />
          <input value={filters.model} onChange={(e)=>setFilters({...filters, model:e.target.value})} placeholder="Model" className="bg-transparent border border-white/10 rounded px-3 py-2" />
          <select value={filters.condition} onChange={(e)=>setFilters({...filters, condition:e.target.value})} className="bg-transparent border border-white/10 rounded px-3 py-2">
            <option value="">Condition</option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
          <input value={filters.max_price} onChange={(e)=>setFilters({...filters, max_price:e.target.value})} placeholder="Max Price" className="bg-transparent border border-white/10 rounded px-3 py-2" />
          <button onClick={load} className="bg-red-600 hover:bg-red-700 rounded px-4">Apply</button>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((c) => (
            <div key={c.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden"><img src={(c.images && c.images[0]) || demoImg} className="w-full h-full object-cover" /></div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{c.brand} {c.model}</h3>
                    <p className="text-gray-400 text-sm">{c.year} • {c.km ? `${c.km.toLocaleString()} km` : '—'}</p>
                  </div>
                  <div className="text-red-400 font-semibold">${c.price?.toLocaleString()}</div>
                </div>
                <button className="mt-4 w-full bg-red-600 hover:bg-red-700 rounded py-2">View Details</button>
              </div>
            </div>
          ))}
          {cars.length === 0 && (
            <p className="col-span-full text-gray-400">No cars found. Adjust filters to see results.</p>
          )}
        </div>
      </section>
      <div className="mt-16"><Footer /></div>
    </div>
  );
}
