import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import api from '../lib/api';

export default function Auth() {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [user, setUser] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (mode === 'register') {
        const res = await api.register({ name: form.name, email: form.email, password: form.password });
        setUser(res);
      } else {
        const res = await api.login({ email: form.email, password: form.password });
        setUser(res);
      }
    } catch (e) {
      alert('Failed: ' + e.message);
    }
  };

  return (
    <div className="bg-[#0a0b0f] min-h-screen text-white">
      <Navbar />
      <section className="pt-28 max-w-md mx-auto px-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <div className="flex gap-2 mb-4">
            <button onClick={()=>setMode('login')} className={`px-3 py-2 rounded ${mode==='login'?'bg-red-600':'bg-white/10'}`}>Login</button>
            <button onClick={()=>setMode('register')} className={`px-3 py-2 rounded ${mode==='register'?'bg-red-600':'bg-white/10'}`}>Register</button>
          </div>
          <form onSubmit={submit} className="space-y-3">
            {mode==='register' && (
              <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} placeholder="Full Name" className="w-full bg-transparent border border-white/10 rounded px-3 py-2" />
            )}
            <input required type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="Email" className="w-full bg-transparent border border-white/10 rounded px-3 py-2" />
            <input required type="password" value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})} placeholder="Password" className="w-full bg-transparent border border-white/10 rounded px-3 py-2" />
            <button className="w-full bg-red-600 hover:bg-red-700 rounded py-2">{mode==='register'?'Create Account':'Login'}</button>
          </form>
          {user && <p className="mt-4 text-green-400">Success! Token: {user.token?.slice(0,10)}...</p>}
        </div>
      </section>
      <div className="mt-16"><Footer /></div>
    </div>
  );
}
