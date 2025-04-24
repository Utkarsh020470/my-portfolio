import React, { useRef } from 'react';
import { motion, useInView, useScroll, useSpring } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Software Engineering Intern',
    company: 'National Instruments (Emerson)',
    location: 'Bangalore, Karnataka',
    period: 'Jan 2021 - Present',
    description:
      'Worked on a .NET/C# project, building export modules and performance test components to improve cross-team interoperability. Automated 5 CI/CD workflows via GitHub and Azure DevOps for real-time issue updates. Built 4 release pipelines, cutting deployment time from ~2 hours to under 5 minutes. Updated 12+ dependencies and enhanced scripts to ensure CI pipeline reliability.',
  },
  {
    id: 2,
    role: 'B.E.- Electonics & Instrumentation',
    company: 'M.S. Ramaiah Institute of Technology',
    location: 'Bangalore, Karnataka',
    period: 'Dec 2021 - May 2025',
    description:
      'With a CGPA of 8.0 in B.E., focusing on core CS subjects—data structures, operating systems, DBMS, and networks—alongside electronics coursework. Completed academic projects to hone programming, software engineering, and system design skills. Gained hands-on experience with version control, full-stack tools, and collaborative workflows.',
  },
  {
    id: 3,
    role: 'Senior Secondary (ICSE)',
    company: 'Hartmann College',
    location: 'Bareilly, U.P',
    period: 'Mar 2019 - Mar 2020',
    description:
      'Scored 92.4% in PCM, building a rock-solid foundation in math, physics, and chemistry. Outside the classroom, I captained the football team and organized inter-house tournaments, learning teamwork and leadership firsthand. Balancing academics with these activities sharpened my time-management and creative-thinking skills.',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start start', 'end end'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const dotVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <style jsx global>{`
        :root {
          --card-hover-bg: #f8fafc;
        }
        .dark {
          --card-hover-bg: rgba(31, 41, 55, 0.7);
        }
      `}</style>
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Growth <span className="text-emerald-500">Story</span>
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </motion.div>

          <div className="relative" ref={timelineRef}>
            {/* Static timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200/50 dark:bg-emerald-900/50 z-10" />

            {/* Animated progress line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-emerald-500 to-emerald-600 origin-top z-10"
              style={{ scaleY, height: '100%' }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.4 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0
                    ? 'md:pr-16 md:text-left md:ml-auto md:mr-1/2'
                    : 'md:pl-16 md:text-left md:ml-1/2'
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <motion.div
                  variants={dotVariants}
                  className={`absolute top-0 w-6 h-6 transform -translate-y-1/2 z-20 ${
                    index % 2 === 0
                      ? 'left-[-12px] md:left-[-12px]' // Even numbers (right side cards) - dots on left
                      : 'right-[-12px] md:right-[-12px]' // Odd numbers (left side cards) - dots on right
                  }`}
                >
                  <div className="w-full h-full rounded-full bg-emerald-500 border-[3px] border-emerald-500 shadow-lg shadow-emerald-500/20" />
                </motion.div>

                <div className="bg-white dark:bg-gray-800/90 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                  <motion.h3
                    className="text-xl font-bold text-gray-900 dark:text-white mb-1"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {exp.role}
                  </motion.h3>
                  <motion.div
                    className="flex items-center mb-2 text-emerald-600 dark:text-emerald-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Briefcase size={16} className="mr-1" />
                    <span>{exp.company}</span>
                  </motion.div>
                  <motion.div
                    className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600 dark:text-gray-400 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="flex items-center mb-2 sm:mb-0">
                      <MapPin size={14} className="mr-1" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </motion.div>
                  <motion.p
                    className="text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {exp.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
