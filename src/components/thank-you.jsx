import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 max-w-2xl mx-4"
      >
        <div className="mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block"
          >
            <CheckCircle2 className="h-16 w-16 text-emerald-500 mx-auto" />
          </motion.div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Thanks for reaching out! 🎉
        </h1>

        <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg mb-8">
          <p>
            Your message has been sent successfully! I'm super excited to read
            what you've got to say.
          </p>
          <p>
            I'll get back to you as soon as I can - usually within 24 hours. In
            the meantime, feel free to check out my other projects or connect
            with me on social media!
          </p>
          <p className="text-emerald-500 dark:text-emerald-400 font-medium">
            Talk to you soon! 👋
          </p>
        </div>

        <Button asChild className="gap-2">
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
