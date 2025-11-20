export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8 text-gray-400">
        <div>
          <h4 className="text-white font-semibold mb-2">LUXE MOTORS</h4>
          <p>Premium car showroom specializing in luxury vehicles and performance parts.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p>123 Luxury Avenue, Dubai</p>
          <p>+971 55 555 5555</p>
          <p>WhatsApp: +971 55 555 0000</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/cars" className="hover:text-white">Cars For Sale</a></li>
            <li><a href="/parts" className="hover:text-white">Spare Parts</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Follow</h4>
          <p>Instagram • Facebook • X</p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm py-4 border-t border-white/10">© {new Date().getFullYear()} Luxe Motors. All rights reserved.</div>
    </footer>
  );
}
