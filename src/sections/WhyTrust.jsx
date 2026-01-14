import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiMapPin, FiCamera, FiThermometer, FiFileText, FiClock } from 'react-icons/fi';
import './WhyTrust.css';

const WhyTrust = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const features = [
        {
            icon: <FiClock />,
            title: 'Decades of Experience',
            description: 'Trusted by Austin businesses for decades of reliable service and high-quality workmanship.',
        },
        {
            icon: <FiCamera />,
            title: 'Drone Technology',
            description: 'We leverage drone technology for comprehensive aerial inspections and detailed documentation.',
        },
        {
            icon: <FiThermometer />,
            title: 'Infrared Scans',
            description: 'Advanced infrared scanning to detect hidden moisture, insulation gaps, and thermal anomalies.',
        },
        {
            icon: <FiFileText />,
            title: 'Detailed Reporting',
            description: 'Comprehensive inspection reports with photos, findings, and actionable recommendations.',
        },
        {
            icon: <FiMapPin />,
            title: 'Local Expertise',
            description: 'Deep knowledge of Austin\'s climate, building codes, and commercial roofing conditions.',
        },
        {
            icon: <FiAward />,
            title: 'Quality Guaranteed',
            description: 'Strong manufacturer and workmanship warranties to protect your investment.',
        },
    ];

    const stats = [
        { value: '25+', label: 'Years in Austin' },
        { value: '5000+', label: 'Roofs Replaced' },
        { value: '100%', label: 'Satisfaction' },
        { value: '24/7', label: 'Emergency Support' },
    ];

    return (
        <section className="why-trust section" id="why-us" ref={ref}>
            <div className="why-trust__bg">
                <div className="why-trust__bg-gradient" />
            </div>

            <div className="container">
                <div className="section-header">
                    <span className="section-label">
                        <FiAward />
                        Why Choose Us
                    </span>
                    <h2 className="section-title">
                        Why Austin Businesses <span className="gradient-text">Trust WaterTight</span>
                    </h2>
                    <p className="section-description">
                        We've earned our reputation through reliable service, cutting-edge technology, and deep local expertise.
                    </p>
                </div>

                <motion.div
                    className="why-trust__stats"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="why-trust__stat">
                            <span className="why-trust__stat-value">{stat.value}</span>
                            <span className="why-trust__stat-label">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    className="why-trust__grid"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="trust-feature"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <div className="trust-feature__icon">{feature.icon}</div>
                            <div className="trust-feature__content">
                                <h3 className="trust-feature__title">{feature.title}</h3>
                                <p className="trust-feature__description">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyTrust;
