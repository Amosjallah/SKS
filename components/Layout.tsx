import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-academy-navy text-white shadow-lg' : 'bg-transparent text-white'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="bg-white/10 p-2 rounded-sm backdrop-blur-sm group-hover:bg-white/20 transition">
                <GraduationCap size={32} className="text-academy-gold" />
              </div>
              <div>
                <h1 className="font-serif text-2xl font-bold tracking-tight leading-none">SMART KIDS</h1>
                <p className="text-xs uppercase tracking-[0.2em] opacity-80">School</p>
              </div>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide transition-colors duration-200 hover:text-academy-gold ${
                      isActive ? 'text-academy-gold border-b-2 border-academy-gold pb-1' : 'text-white/90'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/admissions"
                className="ml-4 px-6 py-2 bg-academy-gold text-white text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-amber-700 transition-colors shadow-md"
              >
                Apply Now
              </NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-academy-navy border-t border-white/10 h-screen">
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg font-medium ${isActive ? 'text-academy-gold' : 'text-white'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/admissions"
                className="mt-4 text-center px-6 py-3 bg-academy-gold text-white font-bold uppercase tracking-wider rounded-sm"
              >
                Apply Now
              </NavLink>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-academy-navy text-white pt-20 pb-10 border-t-4 border-academy-gold">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={28} className="text-academy-gold" />
                <span className="font-serif text-xl font-bold">SMART KIDS SCHOOL</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Nurturing young minds from Creche to Junior High School since 2008.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-white transition"><Facebook size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition"><Twitter size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition"><Instagram size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition"><Linkedin size={20} /></a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold mb-6 text-academy-gold">Quick Links</h3>
              <ul className="space-y-3 text-slate-300">
                <li><NavLink to="/about" className="hover:text-white transition">About Us</NavLink></li>
                <li><NavLink to="/facilities" className="hover:text-white transition">Facilities</NavLink></li>
                <li><NavLink to="/gallery" className="hover:text-white transition">Gallery</NavLink></li>
                <li><NavLink to="/admissions" className="hover:text-white transition">Admissions</NavLink></li>
                <li><NavLink to="/news" className="hover:text-white transition">News & Events</NavLink></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold mb-6 text-academy-gold">Academics</h3>
              <ul className="space-y-3 text-slate-300">
                <li><NavLink to="/creche" className="hover:text-white transition">Creche & Nursery</NavLink></li>
                <li><NavLink to="/kindergarten" className="hover:text-white transition">Kindergarten</NavLink></li>
                <li><NavLink to="/primary" className="hover:text-white transition">Primary School</NavLink></li>
                <li><NavLink to="/jhs" className="hover:text-white transition">Junior High School</NavLink></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold mb-6 text-academy-gold">Contact</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-academy-gold shrink-0 mt-1" />
                  <span>Accra, Ghana</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-academy-gold shrink-0" />
                  <span>+233 20 819 2118</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-academy-gold shrink-0" />
                  <span>info@smartkids.edu.gh</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Smart Kids School. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};