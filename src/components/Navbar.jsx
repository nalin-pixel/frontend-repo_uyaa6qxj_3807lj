import { Link, NavLink } from 'react-router-dom';
import { Menu, Car, Wrench, ShoppingBag, User, Crown } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const nav = [
    { to: '/', label: 'Home' },
    { to: '/cars', label: 'Cars For Sale' },
    { to: '/buy', label: 'Buy a Car' },
    { to: '/sell', label: 'Sell Your Car' },
    { to: '/parts', label: 'Spare Parts' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white">
          <Crown className="w-6 h-6 text-red-500" />
          <span className="font-semibold tracking-wide">LUXE MOTORS</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={({isActive}) => `hover:text-white transition ${isActive ? 'text-white' : ''}`}>{n.label}</NavLink>
          ))}
          <Link to="/login" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition">
            <User className="w-4 h-4" /> Account
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white"><Menu /></button>
      </div>
      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10">
          <div className="px-4 py-3 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-gray-200">{n.label}</Link>
            ))}
            <Link to="/login" onClick={() => setOpen(false)} className="text-white bg-red-600 px-4 py-2 rounded">Account</Link>
          </div>
        </div>
      )}
    </header>
  );
}
