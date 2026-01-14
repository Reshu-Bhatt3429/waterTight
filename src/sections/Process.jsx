import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiSearch, FiClipboard, FiPackage, FiTool, FiCheckCircle, FiSettings } from 'react-icons/fi';
import './Process.css';

const Process = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const steps = [
        {
            icon: <FiSearch />,
            step: '01',
            title: 'On-Site Evaluation',
            description: 'We start with a detailed inspection, assessing all roofing layers, insulation, drainage, and structural components. We also review your maintenance history and identify urgent vulnerabilities.',
        },
        {
            icon: <FiClipboard />,
            step: '02',
            title: 'Custom Replacement Plan',
            description: 'We create a tailored roof replacement strategy that considers your building\'s size, use, budget, energy goals, and future needs.',
        },
        {
            icon: <FiPackage />,
            step: '03',
            title: 'Premium Materials & Technology',
            description: 'We use only industry-leading materials from trusted manufacturers—including TPO, PVC, EPDM, modified bitumen, and metal systems.',
        },
        {
            icon: <FiTool />,
            step: '04',
            title: 'Expert Installation',
            description: 'Our skilled Austin-based crews follow OSHA-compliant safety protocols and complete each project efficiently with minimal disruption.',
        },
        {
            icon: <FiCheckCircle />,
            step: '05',
            title: 'Final Inspection & Warranty',
            description: 'Every project concludes with a final walkthrough and quality inspection. We offer strong manufacturer and workmanship warranties.',
        },
        {
            icon: <FiSettings />,
            step: '06',
            title: 'Ongoing Maintenance Support',
            description: 'We offer preventative roof maintenance services to help extend the life of your new roof and prevent future issues.',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const stepVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section className="process section" id="process" ref={ref}>
            <div className="process__bg">
                <div className="process__bg-gradient" />
            </div>

            <div className="container">
                <div className="section-header">
                    <span className="section-label">
                        <FiTool />
                        Our Process
                    </span>
                    <h2 className="section-title">
                        How We <span className="gradient-text">Replace Your Roof</span>
                    </h2>
                    <p className="section-description">
                        From initial evaluation to ongoing maintenance, we deliver a seamless roof replacement experience.
                    </p>
                </div>

                <motion.div
                    className="process__timeline"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <div className="process__line" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="process__step"
                            variants={stepVariants}
                        >
                            <div className="process__step-indicator">
                                <div className="process__step-number">{step.step}</div>
                                <div className="process__step-dot" />
                            </div>

                            <div className="process__step-card glass-card">
                                <div className="process__step-icon">{step.icon}</div>
                                <div className="process__step-content">
                                    <h3 className="process__step-title">{step.title}</h3>
                                    <p className="process__step-description">{step.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
