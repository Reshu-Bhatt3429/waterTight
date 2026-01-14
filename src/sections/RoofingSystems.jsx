import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiLayers } from 'react-icons/fi';
import './RoofingSystems.css';

const RoofingSystems = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const systems = [
        {
            abbr: 'TPO',
            name: 'Thermoplastic Polyolefin',
            description: 'Highly reflective, energy-efficient, and cost-effective—ideal for flat and low-slope commercial roofs in Austin\'s hot climate.',
            features: ['UV Resistant', 'Cost-Effective', 'Energy Efficient'],
            color: '#3b82f6',
        },
        {
            abbr: 'EPDM',
            name: 'Rubber Membrane',
            description: 'Known for its flexibility and durability, excellent for large commercial buildings needing a reliable, long-lasting roof.',
            features: ['Durable', 'Flexible', 'Long-Lasting'],
            color: '#8b5cf6',
        },
        {
            abbr: 'PVC',
            name: 'Polyvinyl Chloride',
            description: 'Perfect for restaurants, warehouses, and chemical facilities. Resistant to grease, fire, and chemicals.',
            features: ['Chemical Resistant', 'Fire Safe', 'Leak Proof'],
            color: '#06b6d4',
        },
        {
            abbr: 'MB',
            name: 'Modified Bitumen',
            description: 'Durable asphalt-based solution that stands up to foot traffic, hail, and temperature swings.',
            features: ['Impact Resistant', 'Heavy Duty', 'Storm Proof'],
            color: '#f59e0b',
        },
        {
            abbr: 'MTL',
            name: 'Metal Roofing',
            description: 'Unmatched longevity and resistance to hail, wind, and fire—a smart choice for strength and sustainability.',
            features: ['50+ Years Life', 'Eco-Friendly', 'Fire Resistant'],
            color: '#10b981',
        },
        {
            abbr: 'BUR',
            name: 'Built-Up Roofing',
            description: 'Thick, layered waterproofing protection commonly used on older buildings or heavy-duty industrial structures.',
            features: ['Multi-Layer', 'Waterproof', 'Industrial Grade'],
            color: '#ef4444',
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
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section className="roofing-systems section" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">
                        <FiLayers />
                        Roofing Solutions
                    </span>
                    <h2 className="section-title">
                        Roofing Systems <span className="gradient-text">We Install</span>
                    </h2>
                    <p className="section-description">
                        We specialize in a wide range of commercial roofing systems, tailored to your building's needs and Austin's climate.
                    </p>
                </div>

                <motion.div
                    className="roofing-systems__grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {systems.map((system, index) => (
                        <motion.div
                            key={index}
                            className="system-card glass-card"
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                        >
                            <div
                                className="system-card__abbr"
                                style={{ background: `linear-gradient(135deg, ${system.color}, ${system.color}99)` }}
                            >
                                {system.abbr}
                            </div>
                            <h3 className="system-card__name">{system.name}</h3>
                            <p className="system-card__description">{system.description}</p>
                            <div className="system-card__features">
                                {system.features.map((feature, i) => (
                                    <span key={i} className="system-card__feature">{feature}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default RoofingSystems;
