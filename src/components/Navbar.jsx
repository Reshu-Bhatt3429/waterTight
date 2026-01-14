import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="navbar__top-bar">
        <div className="container">
          <div className="navbar__top-content">
            <span className="navbar__hours">Office Hours: Mon–Fri 8AM–5PM CST</span>
            <div className="navbar__contact-info">
              <a href="tel:888-809-9976" className="navbar__contact-link">
                <FiPhone /> 888-809-9976
              </a>
              <a href="mailto:info@wtroofs.com" className="navbar__contact-link">
                <FiMail /> info@wtroofs.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar__main">
        <div className="container">
          <div className="navbar__content">
            <a href="#home" className="navbar__logo">
              <div className="navbar__logo-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4L4 16V36H36V16L20 4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M20 4L4 16H36L20 4Z" fill="url(#roofGradient)"/>
                  <path d="M14 24H26V36H14V24Z" stroke="currentColor" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="roofGradient" x1="4" y1="10" x2="36" y2="10">
                      <stop stopColor="#3b82f6"/>
                      <stop offset="1" stopColor="#06b6d4"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="navbar__logo-text">
                <span className="navbar__logo-name">WaterTight</span>
                <span className="navbar__logo-tagline">Roofing</span>
              </div>
            </a>

            <ul className="navbar__links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="navbar__link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="navbar__actions">
              <a href="tel:888-809-9976" className="btn btn-primary">
                <FiPhone /> Get Free Quote
              </a>
            </div>

            <button
              className="navbar__mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className={`navbar__mobile-menu ${isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}
        initial={false}
        animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
        transition={{ duration: 0.3 }}
      >
        <ul className="navbar__mobile-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="navbar__mobile-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a href="tel:888-809-9976" className="btn btn-primary btn-lg">
          <FiPhone /> Call Now
        </a>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
