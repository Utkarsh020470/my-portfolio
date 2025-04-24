import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if cursor is over clickable element
      const target = e.target;
      const isClickable =
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        getComputedStyle(target).cursor === 'pointer';

      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - (isPointer ? 32 : 8),
          y: mousePosition.y - (isPointer ? 32 : 8),
          scale: isPointer ? 2.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          mass: 0.5,
          stiffness: 400,
        }}
      >
        <div
          className={`rounded-full bg-white ${
            isPointer ? 'w-4 h-4' : 'w-4 h-4'
          }`}
        />
      </motion.div>
    </AnimatePresence>
  );
}
