import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileDown, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-emerald-500">Me</span>
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <motion.div
              variants={itemVariants}
              className="relative lg:sticky lg:top-24 lg:flex-shrink-0"
            >
              <div className="relative w-full max-w-[340px] mx-auto lg:w-[340px] rounded-2xl overflow-hidden">
                <img
                  src="public/profilePic.jpg"
                  alt="Utkarsh Saxena"
                  className="w-full h-auto rounded-2xl scale-[0.85] transform origin-center"
                />
                <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-emerald-500 rounded-lg -z-10"></div>
                <div className="absolute -top-5 -left-5 w-28 h-28 bg-emerald-500 rounded-lg -z-10"></div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex-grow">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Software Engineer
              </h3>
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed">
                  Final-year Engineering student with a strong foundation in
                  software development, specializing in building reliable and
                  scalable systems. Equipped with hands-on experience across the
                  software development lifecycle—ranging from designing RESTful
                  APIs to deploying cross-platform CI/CD pipelines. Demonstrated
                  ability to solve real-world problems through clean code,
                  automation, and performance-focused engineering.
                </p>
                <p className="leading-relaxed">
                  Interned at National Instruments (Emerson), contributing to
                  the core C#/.NET codebase of an internal library used across
                  key software products. Developed and maintained 10+ GitHub
                  Actions and Azure DevOps pipelines for issue triage, automated
                  releases, and cross-platform integration. Spearheaded a
                  one-click release automation pipeline, reducing deployment
                  time from hours to minutes. Built export modules and testing
                  components used by multiple engineering teams to validate
                  critical performance metrics.
                </p>
                <p className="leading-relaxed">
                  Driven by curiosity and precision, with a passion for backend
                  systems, developer tooling, and automation. Always looking for
                  opportunities to collaborate, learn, and deliver high-impact
                  results in fast-paced environments. Ready to bring
                  adaptability, technical depth, and a builder's mindset to
                  every challenge.
                </p>
              </div>

              <div className="mt-8 mb-6">
                <div className="inline-block bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg px-4 py-2">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">
                      Current Role:
                    </span>{' '}
                    <span className="font-medium">
                      Software Engineering Intern @ National Instruments
                      (Emerson)
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild variant="outline" className="gap-2">
                    <a
                      href="https://www.linkedin.com/in/utkarsh-2807-saxena/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={18} />
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <a
                      href="https://github.com/Utkarsh020470"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <a
                      href="https://leetcode.com/u/Utkarsh_Saxena_28/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16.5 3.5a2.5 2.5 0 0 1 0 5h-9a2.5 2.5 0 0 0 0 5h9a2.5 2.5 0 0 1 0 5h-9a2.5 2.5 0 0 1 0-5" />
                      </svg>
                      LeetCode
                    </a>
                  </Button>
                </div>

                <Button
                  asChild
                  className="bg-emerald-500 hover:bg-emerald-600 gap-2"
                >
                  <a
                    href="/Utkarsh_Saxena_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileDown size={18} />
                    View Resume
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
