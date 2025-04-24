import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Construction, Code2, ArrowLeft, Coffee } from 'lucide-react';

export default function DemoUnavailable() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/#projects');
    // Add a small delay to ensure the navigation happens before scrolling
    setTimeout(() => {
      document
        .getElementById('projects')
        ?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4 mb-6"
        >
          <Construction className="w-16 h-16 text-emerald-500" />
          <Coffee className="w-16 h-16 text-emerald-500" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Demo Under Construction
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4 mb-8"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Hey there! 👋 The live demo is still brewing...
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            In the meantime, you can explore the code and see how it's built!
          </p>
          <div className="flex items-center justify-center gap-2 text-emerald-500 dark:text-emerald-400 mt-4">
            <Code2 className="w-5 h-5" />
            <span className="font-mono text-sm">
              npm run build-awesome-demo
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            className="bg-emerald-500 hover:bg-emerald-600 gap-2"
            onClick={handleGoBack}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
