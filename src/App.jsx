import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';
import { About, Services, Buy } from './pages/StaticPages';
import Contact from './pages/Contact';
import Sell from './pages/Sell';
import Parts from './pages/Parts';
import Auth from './pages/Auth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/parts" element={<Parts />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Auth />} />
    </Routes>
  );
}

export default App;
