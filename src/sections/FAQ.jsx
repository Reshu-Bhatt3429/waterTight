import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiHelpCircle, FiChevronDown } from 'react-icons/fi';
import './FAQ.css';

const FAQ = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'How do I know if my commercial roof needs to be replaced?',
            answer: 'Common signs include persistent leaks, visible sagging, extensive membrane deterioration, mold or mildew in insulation, high energy bills, and repeated repairs that fail to resolve issues. We can perform a professional assessment to determine if replacement is necessary.',
        },
        {
            question: 'What types of roofing systems do you install?',
            answer: 'We specialize in TPO, EPDM, PVC, metal roofing, modified bitumen, spray foam, and built-up roofing (BUR). We tailor the roofing material and system to your building\'s needs, environment, and long-term performance goals.',
        },
        {
            question: 'How long does a commercial roof replacement take?',
            answer: 'The timeline depends on size, complexity, weather conditions, and the roofing system being installed. On average, most commercial roof replacements take between 1 to 3 weeks. We provide a clear schedule during your consultation.',
        },
        {
            question: 'Will a roof replacement disrupt my business operations?',
            answer: 'We take great care to minimize disruption. We coordinate with your facility manager to develop a phased approach, use safety barriers, and schedule noisy or high-traffic tasks outside of business hours when possible.',
        },
        {
            question: 'How much does a commercial roof replacement cost?',
            answer: 'Costs vary depending on the size of the roof, the system selected, and any underlying issues discovered during tear-off. We provide transparent, itemized estimates based on a thorough evaluation of your property.',
        },
        {
            question: 'Can you help with insurance claims for storm-damaged roofs?',
            answer: 'Yes! We\'re experienced in working with insurance companies and offer detailed damage documentation, support during adjuster inspections, and advocacy throughout the insurance claim process.',
        },
        {
            question: 'What is the benefit of replacing vs. repairing my roof?',
            answer: 'While repairs address isolated problems, a full roof replacement offers long-term protection, improved energy efficiency, increased property value, and code compliance. It\'s often the smarter investment when a roof is beyond its serviceable life.',
        },
        {
            question: 'What should I do to prepare for a commercial roof replacement?',
            answer: 'We provide a pre-project checklist, but generally you should secure interior assets below the roofline, inform tenants or staff of the schedule, and grant access to utilities or rooftop equipment. Our team handles the rest.',
        },
    ];

    return (
        <section className="faq section" id="faq" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">
                        <FiHelpCircle />
                        FAQ
                    </span>
                    <h2 className="section-title">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="section-description">
                        Get answers to common questions about commercial roof replacement in Austin.
                    </p>
                </div>

                <motion.div
                    className="faq__list"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={`faq__item glass-card ${openIndex === index ? 'faq__item--open' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: 0.05 * index }}
                        >
                            <button
                                className="faq__question"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <FiChevronDown className={`faq__icon ${openIndex === index ? 'faq__icon--rotated' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        className="faq__answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
