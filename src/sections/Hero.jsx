import { motion } from 'framer-motion';
import { FiPhone, FiArrowRight, FiShield, FiAward, FiUsers, FiCheckCircle } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    const stats = [
        { icon: <FiAward />, value: '25+', label: 'Years Experience' },
        { icon: <FiUsers />, value: '5000+', label: 'Projects Completed' },
        { icon: <FiShield />, value: '100%', label: 'Satisfaction Rate' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section className="hero" id="home">
            <div className="hero__bg">
                <div className="hero__bg-gradient" />
                <div className="hero__bg-pattern" />
                <div className="hero__bg-glow" />
            </div>

            <div className="container">
                <motion.div
                    className="hero__content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="hero__badge" variants={itemVariants}>
                        <FiCheckCircle />
                        <span>Austin's Trusted Commercial Roofing Experts</span>
                    </motion.div>

                    <motion.h1 className="hero__title" variants={itemVariants}>
                        Commercial Roof <br />
                        <span className="gradient-text">Replacement</span> in Austin, TX
                    </motion.h1>

                    <motion.p className="hero__description" variants={itemVariants}>
                        Protect your business with durable, energy-efficient roofing systems built to
                        withstand Texas weather. From expert evaluations to professional installation,
                        we deliver comprehensive roof replacement solutions tailored to your needs.
                    </motion.p>

                    <motion.div className="hero__ctas" variants={itemVariants}>
                        <a href="#contact" className="btn btn-primary btn-lg">
                            Get Free Evaluation
                            <FiArrowRight />
                        </a>
                        <a href="tel:888-809-9976" className="btn btn-secondary btn-lg">
                            <FiPhone />
                            888-809-9976
                        </a>
                    </motion.div>

                    <motion.div className="hero__stats" variants={itemVariants}>
                        {stats.map((stat, index) => (
                            <div key={index} className="hero__stat">
                                <div className="hero__stat-icon">{stat.icon}</div>
                                <div className="hero__stat-content">
                                    <span className="hero__stat-value">{stat.value}</span>
                                    <span className="hero__stat-label">{stat.label}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <div className="hero__scroll-indicator">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <span>Scroll to explore</span>
                    <div className="hero__scroll-line" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
