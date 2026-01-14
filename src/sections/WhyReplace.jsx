import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiShield, FiZap, FiTrendingUp, FiFileText, FiAlertTriangle } from 'react-icons/fi';
import './WhyReplace.css';

const WhyReplace = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const benefits = [
        {
            icon: <FiShield />,
            title: 'Enhanced Weather Protection',
            description: 'A new roofing system shields your property from leaks, water intrusion, and structural issues, keeping your operations uninterrupted and your building safe from Texas weather extremes.',
        },
        {
            icon: <FiZap />,
            title: 'Increased Energy Efficiency',
            description: 'Modern roofing materials with reflective membranes and upgraded insulation can significantly reduce HVAC strain and indoor heat buildup, saving on energy costs.',
        },
        {
            icon: <FiTrendingUp />,
            title: 'Boosted Property Value',
            description: 'An upgraded commercial roof adds immediate value and visual appeal, helping attract higher-paying tenants and strengthening resale value in Austin\'s competitive market.',
        },
        {
            icon: <FiFileText />,
            title: 'Code & Insurance Compliance',
            description: 'We ensure your new roofing system meets Austin\'s strict building codes for wind uplift, fire safety, and energy efficiency, streamlining permitting and insurance eligibility.',
        },
        {
            icon: <FiAlertTriangle />,
            title: 'Reduced Risk & Liability',
            description: 'Replacing your aging roof helps prevent interior damage, mold growth, safety hazards, and potential lawsuits—giving you peace of mind and protection.',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section className="why-replace section" id="services" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">
                        <FiShield />
                        Why Replace Your Roof
                    </span>
                    <h2 className="section-title">
                        Benefits of Commercial <span className="gradient-text">Roof Replacement</span>
                    </h2>
                    <p className="section-description">
                        Austin is no stranger to weather extremes. Here's why investing in a new roof is a smart business decision.
                    </p>
                </div>

                <motion.div
                    className="why-replace__grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="benefit-card glass-card"
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className="benefit-card__icon">{benefit.icon}</div>
                            <h3 className="benefit-card__title">{benefit.title}</h3>
                            <p className="benefit-card__description">{benefit.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyReplace;
