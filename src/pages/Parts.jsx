import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from '../lib/api';

export default function Parts() {
  const [q, setQ] = useState('');
  const [category, setCategory] = useState('');
  const [items, setItems] = useState([]);

  const load = () => {
    api.parts({ q, category }).then((r)=>setItems(r.items)).catch(()=>setItems([]));
  };

  useEffect(()=>{ load(); }, []);

  return (
    <div className="bg-[#0a0b0f] min-h-screen text-white">
      <Navbar />
      <section className="pt-28 max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Spare Parts & Accessories</h1>
        <div className="flex flex-wrap gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
          <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search parts" className="bg-transparent border border-white/10 rounded px-3 py-2" />
          <select value={category} onChange={(e)=>setCategory(e.target.value)} className="bg-transparent border border-white/10 rounded px-3 py-2">
            <option value="">All Categories</option>
            <option value="performance">Performance</option>
            <option value="body">Body</option>
            <option value="interior">Interior</option>
          </select>
          <button onClick={load} className="bg-red-600 hover:bg-red-700 rounded px-4">Search</button>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((p) => (
            <div key={p.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden"><img src={(p.images && p.images[0]) || 'https://images.unsplash.com/photo-1592853625600-5a973b0650b0?q=80&w=1400&auto=format&fit=crop'} className="w-full h-full object-cover" /></div>
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.category || 'General'}</p>
                <div className="mt-2 flex items-center justify-between">
                  <div className="text-red-400 font-semibold">${p.price?.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">{p.stock} in stock</div>
                </div>
                <button className="mt-4 w-full bg-white/10 hover:bg-white/20 rounded py-2">Add to Wishlist</button>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <p className="col-span-full text-gray-400">No parts found.</p>
          )}
        </div>
      </section>
      <div className="mt-16"><Footer /></div>
    </div>
  );
}
