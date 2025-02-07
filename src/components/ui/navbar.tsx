import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavigation('/')}>
            <span className="text-xl font-bold text-white">Albotica</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {links.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={cn(
                    "text-sm transition-colors",
                    location.pathname === link.path
                      ? "text-white font-medium"
                      : "text-neutral-400 hover:text-white"
                  )}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}