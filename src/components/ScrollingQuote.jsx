import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollingQuote = () => {
    const containerRef = useRef(null);
    const quote = "Design is not just what it looks like and feels like. Design is how it works.";

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Map scroll progress to reveal progress (focused on middle of scroll)
    const revealProgress = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]);

    return (
        <section ref={containerRef} className="relative bg-black py-12 overflow-hidden">
            <div className="max-w-5xl mx-auto px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-serif tracking-wide leading-relaxed" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
                    "{quote.split('').map((char, index) => (
                        <Letter
                            key={index}
                            char={char}
                            index={index}
                            total={quote.length}
                            progress={revealProgress}
                        />
                    ))}"
                </h2>
            </div>
        </section>
    );
};

const Letter = ({ char, index, total, progress }) => {
    // Calculate when this letter should turn white based on its position
    const letterProgress = useTransform(
        progress,
        [index / total, (index + 1) / total],
        [0, 1]
    );

    const color = useTransform(
        letterProgress,
        [0, 1],
        ['rgba(100, 100, 100, 1)', 'rgba(255, 255, 255, 1)']
    );

    return (
        <motion.span
            style={{ color }}
            className={char === ' ' ? 'inline' : 'inline-block'}
        >
            {char === ' ' ? '\u00A0' : char}
        </motion.span>
    );
};

export default ScrollingQuote;
