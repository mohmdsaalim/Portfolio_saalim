import { useEffect } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export const useCursorEngine = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
    const smoothedX = useSpring(x, smoothOptions);
    const smoothedY = useSpring(y, smoothOptions);

    useEffect(() => {
        const handleMouseMove = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [x, y]);

    return { x, y, smoothedX, smoothedY };
};
