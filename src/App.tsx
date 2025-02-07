import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TubelightNavbar } from './components/ui/tubelight-navbar';
import { Footerdemo } from './components/ui/footer-section';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { Home as HomeIcon, Info, Briefcase, Box, MessageSquare } from 'lucide-react';

function App() {
  const location = useLocation();
  const showFooter = location.pathname !== '/contact';

  const navItems = [
    { name: 'Home', url: '/', icon: HomeIcon },
    { name: 'About', url: '/about', icon: Info },
    { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'Products', url: '/products', icon: Box },
    { name: 'Contact', url: '/contact', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <TubelightNavbar items={navItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      {showFooter && <Footerdemo />}
    </div>
  );
}

export default App;