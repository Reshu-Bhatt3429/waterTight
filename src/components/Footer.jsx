import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#why-us' },
        { name: 'Services', href: '#services' },
        { name: 'Our Process', href: '#process' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
    ];

    const services = [
        'Roof Replacement',
        'Roof Restoration',
        'Roof Inspections',
        'Insurance Claims',
        'Preventive Maintenance',
        'Emergency Repairs',
    ];

    const serviceAreas = [
        'Downtown Austin',
        'East Side',
        'South Congress',
        'North Burnet',
        'Round Rock',
        'Cedar Park',
    ];

    return (
        <footer className="footer">
            <div className="footer__wave">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path
                        d="M0,60 C480,120 960,0 1440,60 L1440,120 L0,120 Z"
                        fill="var(--slate-900)"
                    />
                </svg>
            </div>

            <div className="footer__main">
                <div className="container">
                    <div className="footer__grid">
                        {/* Company Info */}
                        <div className="footer__column footer__company">
                            <div className="footer__logo">
                                <div className="footer__logo-icon">
                                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 4L4 16V36H36V16L20 4Z" stroke="currentColor" strokeWidth="2" fill="none" />
                                        <path d="M20 4L4 16H36L20 4Z" fill="url(#footerRoofGradient)" />
                                        <path d="M14 24H26V36H14V24Z" stroke="currentColor" strokeWidth="2" />
                                        <defs>
                                            <linearGradient id="footerRoofGradient" x1="4" y1="10" x2="36" y2="10">
                                                <stop stopColor="#3b82f6" />
                                                <stop offset="1" stopColor="#06b6d4" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="footer__logo-text">
                                    <span className="footer__logo-name">WaterTight</span>
                                    <span className="footer__logo-tagline">Roofing</span>
                                </div>
                            </div>
                            <p className="footer__description">
                                Protecting what matters most, one roof at a time. Your trusted commercial roofing partner in Austin, TX.
                            </p>
                            <div className="footer__social">
                                <a href="#" className="footer__social-link" aria-label="Facebook">
                                    <FiFacebook />
                                </a>
                                <a href="#" className="footer__social-link" aria-label="Twitter">
                                    <FiTwitter />
                                </a>
                                <a href="#" className="footer__social-link" aria-label="LinkedIn">
                                    <FiLinkedin />
                                </a>
                                <a href="#" className="footer__social-link" aria-label="Instagram">
                                    <FiInstagram />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer__column">
                            <h4 className="footer__heading">Quick Links</h4>
                            <ul className="footer__list">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="footer__link">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer__column">
                            <h4 className="footer__heading">Our Services</h4>
                            <ul className="footer__list">
                                {services.map((service) => (
                                    <li key={service}>
                                        <span className="footer__link">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Service Areas */}
                        <div className="footer__column">
                            <h4 className="footer__heading">Service Areas</h4>
                            <ul className="footer__list">
                                {serviceAreas.map((area) => (
                                    <li key={area}>
                                        <span className="footer__link">{area}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer__column">
                            <h4 className="footer__heading">Contact Us</h4>
                            <div className="footer__contact">
                                <a href="tel:888-809-9976" className="footer__contact-item">
                                    <FiPhone className="footer__contact-icon" />
                                    <span>888-809-9976</span>
                                </a>
                                <a href="mailto:info@wtroofs.com" className="footer__contact-item">
                                    <FiMail className="footer__contact-icon" />
                                    <span>info@wtroofs.com</span>
                                </a>
                                <div className="footer__contact-item">
                                    <FiMapPin className="footer__contact-icon" />
                                    <span>Austin, TX</span>
                                </div>
                            </div>
                            <div className="footer__hours">
                                <p><strong>Office Hours:</strong></p>
                                <p>Mon–Fri: 8AM–5PM CST</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-content">
                        <p className="footer__copyright">
                            © {currentYear} WaterTight Roofing. All rights reserved.
                        </p>
                        <div className="footer__legal">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
