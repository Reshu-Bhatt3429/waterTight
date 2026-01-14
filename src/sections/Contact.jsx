import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiCheck } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        // Simulate form submission
        setTimeout(() => {
            setFormStatus('success');
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section className="contact section" id="contact" ref={ref}>
            <div className="contact__bg">
                <div className="contact__bg-gradient" />
            </div>

            <div className="container">
                <div className="section-header">
                    <span className="section-label">
                        <FiMail />
                        Contact Us
                    </span>
                    <h2 className="section-title">
                        Schedule Your <span className="gradient-text">Free Evaluation</span>
                    </h2>
                    <p className="section-description">
                        Ready to protect your business with a new commercial roof? Get in touch today for a free consultation.
                    </p>
                </div>

                <motion.div
                    className="contact__grid"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Contact Form */}
                    <div className="contact__form-wrapper glass-card">
                        <h3 className="contact__form-title">Request a Free Quote</h3>
                        <form className="contact__form" onSubmit={handleSubmit}>
                            <div className="contact__form-row">
                                <div className="contact__form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="name" placeholder="John Smith" required />
                                </div>
                                <div className="contact__form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" placeholder="Your Company" />
                                </div>
                            </div>

                            <div className="contact__form-row">
                                <div className="contact__form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" placeholder="john@company.com" required />
                                </div>
                                <div className="contact__form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" required />
                                </div>
                            </div>

                            <div className="contact__form-group">
                                <label htmlFor="service">Service Needed</label>
                                <select id="service" name="service" required>
                                    <option value="">Select a service...</option>
                                    <option value="replacement">Roof Replacement</option>
                                    <option value="inspection">Roof Inspection</option>
                                    <option value="repair">Roof Repair</option>
                                    <option value="maintenance">Preventive Maintenance</option>
                                    <option value="insurance">Insurance Claim Support</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="contact__form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your roofing project..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-lg contact__submit"
                                disabled={formStatus !== 'idle'}
                            >
                                {formStatus === 'idle' && (
                                    <>
                                        <FiSend />
                                        Send Message
                                    </>
                                )}
                                {formStatus === 'submitting' && 'Sending...'}
                                {formStatus === 'success' && (
                                    <>
                                        <FiCheck />
                                        Message Sent!
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="contact__info">
                        <div className="contact__info-card glass-card">
                            <div className="contact__info-icon">
                                <FiPhone />
                            </div>
                            <div className="contact__info-content">
                                <h4>Call Us</h4>
                                <a href="tel:888-809-9976">888-809-9976</a>
                                <p>24/7 Emergency Line Available</p>
                            </div>
                        </div>

                        <div className="contact__info-card glass-card">
                            <div className="contact__info-icon">
                                <FiMail />
                            </div>
                            <div className="contact__info-content">
                                <h4>Email Us</h4>
                                <a href="mailto:info@wtroofs.com">info@wtroofs.com</a>
                                <p>We respond within 24 hours</p>
                            </div>
                        </div>

                        <div className="contact__info-card glass-card">
                            <div className="contact__info-icon">
                                <FiMapPin />
                            </div>
                            <div className="contact__info-content">
                                <h4>Service Area</h4>
                                <p>Austin, TX & Surrounding Areas</p>
                                <p>Downtown, East Side, South Congress, North Burnet</p>
                            </div>
                        </div>

                        <div className="contact__info-card glass-card">
                            <div className="contact__info-icon">
                                <FiClock />
                            </div>
                            <div className="contact__info-content">
                                <h4>Office Hours</h4>
                                <p>Monday – Friday: 8AM – 5PM CST</p>
                                <p>Emergency services available 24/7</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
