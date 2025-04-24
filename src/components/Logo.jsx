import React from 'react';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
      className="flex items-center space-x-2"
    >
      <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg hover:shadow-emerald-500/25 transition-shadow">
        <span className="text-sm font-semibold text-white">US</span>
      </div>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-bold text-gray-900 dark:text-white"
      >
        Utkarsh<span className="text-emerald-500">.</span>
      </motion.span>
    </motion.div>
  );
}
