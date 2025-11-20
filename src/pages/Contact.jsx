import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import api from '../lib/api';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    try { await api.inquiry(form); setSent(true); } catch (e) { alert('Failed.'); }
  };

  return (
    <div className="bg-[#0a0b0f] min-h-screen text-white">
      <Navbar />
      <section className="pt-28 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400 mb-6">Address: 123 Luxury Avenue, Dubai • Phone: +971 55 555 5555 • WhatsApp: +971 55 555 0000</p>
          <iframe className="w-full h-72 rounded-xl border border-white/10" src="https://www.google.com/maps?q=dubai&output=embed"></iframe>
        </div>
        <div>
          <form onSubmit={submit} className="space-y-3 bg-white/5 border border-white/10 p-6 rounded-xl">
            <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} placeholder="Full Name" className="w-full bg-transparent border border-white/10 rounded px-3 py-2" />
            <input required type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="Email" className="w-full bg-transparent border border-white/10 rounded px-3 py-2" />
            <input value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} placeholder="Phone" className="w-full bg-transparent border border-white/10 rounded px-3 py-2" />
            <input value={form.subject} onChange={(e)=>setForm({...form, subject:e.target.value})} placeholder="Subject" className="w-full bg-transparent border border-white/10 rounded px-3 py-2" />
            <textarea required value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} placeholder="Your message" className="w-full bg-transparent border border-white/10 rounded px-3 py-2 h-32" />
            <button className="bg-red-600 hover:bg-red-700 rounded px-4 py-2">Send Message</button>
            {sent && <p className="text-green-400">Message sent! We'll get back to you soon.</p>}
          </form>
        </div>
      </section>
      <div className="mt-16"><Footer /></div>
    </div>
  );
}
