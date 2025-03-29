
import React from 'react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-4 overflow-hidden">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Own Your Health.
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        R3GENX™ — The future of regeneration is coming.
      </motion.p>
      <motion.div
        className="text-sm md:text-base text-gray-500 italic text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Our site is currently under construction.<br />
        Something powerful is on the way.
      </motion.div>
      <motion.div
        className="mt-12 text-gray-600 text-3xl flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }}>●</motion.span>
        <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.3 }}>●</motion.span>
        <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.6 }}>●</motion.span>
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-[-1] bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
      />
    </div>
  );
}
