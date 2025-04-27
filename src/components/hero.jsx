import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 to-teal-100/20 dark:from-emerald-900/20 dark:to-teal-900/20"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I&apos;m{' '}
              <span className="text-emerald-500">Utkarsh Saxena</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              A final-year engineering student and Software Engineering Intern
              at National Instruments (Emerson), passionate about building
              scalable software solutions and streamlining development
              workflows. Brings a strong foundation in software engineering
              principles, with a focus on problem-solving, code quality, and
              continuous improvement. Thrives in collaborative, fast-paced
              environments that drive innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 w-full sm:w-auto"
            >
              <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>
                View My Work
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-emerald-500 hover:bg-emerald-500/10 text-emerald-500"
            >
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
                Contact Me
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" onClick={(e) => handleScroll(e, 'about')}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-emerald-500/10"
          >
            <ArrowDown className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
