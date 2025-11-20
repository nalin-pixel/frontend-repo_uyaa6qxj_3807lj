import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import api from '../lib/api';

export default function Sell() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', car_details: '', price: '', images: '' });
  const [sent, setSent] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const payload = { ...form, price: form.price ? parseFloat(form.price) : undefined, images: form.images ? form.images.split(',').map(s=>s.trim()) : [] };
    try {
      await api.sell(payload);
      setSent(true);
    } catch (e) { alert('Failed to submit.'); }
  };

  return (
    <div className="bg-[#0a0b0f] min-h-screen text-white">
      <Navbar />
      <section className="pt-28 max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Sell Your Car</h1>
        {sent ? (
          <div className="p-6 bg-green-600/20 border border-green-600/30 rounded">Your submission was received. We'll get back to you soon.</div>
        ) : (
          <form onSubmit={submit} className="space-y-4 bg-white/5 border border-white/10 p-6 rounded-xl">
            <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} placeholder="Full Name" className="w-full bg-transparent border border-white/10 rounded px-3 py-2" />
            <input required type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="Email" className="w-full bg-transparent border border-white/10 rounded px-3 py-2" />
            <input value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} placeholder="Phone" className="w-full bg-transparent border border-white/10 rounded px-3 py-2" />
            <textarea required value={form.car_details} onChange={(e)=>setForm({...form, car_details:e.target.value})} placeholder="Car details (brand, model, year, condition, mileage)" className="w-full bg-transparent border border-white/10 rounded px-3 py-2 h-32" />
            <input value={form.price} onChange={(e)=>setForm({...form, price:e.target.value})} placeholder="Expected Price (USD)" className="w-full bg-transparent border border-white/10 rounded px-3 py-2" />
            <input value={form.images} onChange={(e)=>setForm({...form, images:e.target.value})} placeholder="Image URLs (comma separated)" className="w-full bg-transparent border border-white/10 rounded px-3 py-2" />
            <button className="bg-red-600 hover:bg-red-700 rounded px-4 py-2">Submit</button>
          </form>
        )}
      </section>
      <div className="mt-16"><Footer /></div>
    </div>
  );
}
