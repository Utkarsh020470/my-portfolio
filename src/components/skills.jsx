import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2,
  Database,
  Layers,
  PenTool,
  GraduationCap,
  FileCode,
  Hash,
  Binary,
  DatabaseIcon,
  Server,
  Braces,
  FileJson,
  GitBranch,
  Cloud,
  Workflow,
  Terminal,
  BookOpen,
  Network,
  Share2,
  FolderCog,
  GitMerge,
  Monitor,
  Cpu,
  Globe,
  Palette,
  Box,
  Atom,
  ServerIcon,
  Boxes,
  Flame,
  Webhook,
  GitFork,
  CircuitBoard,
  Settings,
  Send,
  Laptop,
  Cog,
  Folder,
  BarChart,
  LineChart,
  PieChart,
  Table,
} from 'lucide-react';

const skillCategories = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'C++', icon: <Hash className="h-4 w-4" /> },
      { name: 'C#', icon: <CircuitBoard className="h-4 w-4" /> },
      { name: 'Python', icon: <Box className="h-4 w-4" /> },
      { name: 'SQL', icon: <Database className="h-4 w-4" /> },
    ],
    icon: <Code2 className="h-6 w-6" />,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    hoverColor: 'bg-emerald-100',
  },
  {
    name: 'Database Management',
    skills: [
      { name: 'PostgreSQL', icon: <Boxes className="h-4 w-4" /> },
      { name: 'MySQL', icon: <DatabaseIcon className="h-4 w-4" /> },
      { name: 'MongoDB', icon: <Folder className="h-4 w-4" /> },
      { name: 'Firebase', icon: <Flame className="h-4 w-4" /> },
    ],
    icon: <Database className="h-6 w-6" />,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    hoverColor: 'bg-emerald-100',
  },
  {
    name: 'Development & Frameworks',
    skills: [
      { name: 'HTML', icon: <Globe className="h-4 w-4" /> },
      { name: 'CSS', icon: <Palette className="h-4 w-4" /> },
      { name: 'JavaScript', icon: <FileJson className="h-4 w-4" /> },
      { name: 'React', icon: <Atom className="h-4 w-4" /> },
      { name: 'Node.js', icon: <ServerIcon className="h-4 w-4" /> },
      { name: 'Express', icon: <Server className="h-4 w-4" /> },
      { name: 'RESTful APIs', icon: <Webhook className="h-4 w-4" /> },
      { name: '.NET', icon: <CircuitBoard className="h-4 w-4" /> },
    ],
    icon: <Layers className="h-6 w-6" />,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    hoverColor: 'bg-emerald-100',
  },
  {
    name: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: <GitBranch className="h-4 w-4" /> },
      { name: 'GitHub Actions', icon: <GitFork className="h-4 w-4" /> },
      { name: 'Azure Pipelines', icon: <Cloud className="h-4 w-4" /> },
      { name: 'CI/CD', icon: <Workflow className="h-4 w-4" /> },
      { name: 'Visual Studio', icon: <Settings className="h-4 w-4" /> },
      { name: 'VS Code', icon: <Code2 className="h-4 w-4" /> },
      { name: 'Postman', icon: <Send className="h-4 w-4" /> },
    ],
    icon: <PenTool className="h-6 w-6" />,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    hoverColor: 'bg-emerald-100',
  },
  {
    name: 'Data Analytics',
    skills: [
      { name: 'Power BI', icon: <BarChart className="h-4 w-4" /> },
      { name: 'Tableau', icon: <PieChart className="h-4 w-4" /> },
      { name: 'Excel', icon: <Table className="h-4 w-4" /> },
      { name: 'Data Visualization', icon: <LineChart className="h-4 w-4" /> },
    ],
    icon: <BarChart className="h-6 w-6" />,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    hoverColor: 'bg-emerald-100',
  },
  {
    name: 'Core CS Courses',
    skills: [
      { name: 'OOPS', icon: <Box className="h-4 w-4" /> },
      { name: 'DBMS', icon: <Database className="h-4 w-4" /> },
      { name: 'Computer Networks', icon: <Network className="h-4 w-4" /> },
      { name: 'Unix', icon: <Terminal className="h-4 w-4" /> },
      { name: 'Operating Systems', icon: <Cpu className="h-4 w-4" /> },
      { name: 'Data Structures', icon: <Code2 className="h-4 w-4" /> },
      { name: 'Algorithms', icon: <Code2 className="h-4 w-4" /> },
    ],
    icon: <GraduationCap className="h-6 w-6" />,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    hoverColor: 'bg-emerald-100',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.08,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="skills" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-emerald-500">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                <motion.div className="flex items-center mb-4">
                  <div
                    className={`p-2 rounded-lg mr-3 ${category.bgColor} ${category.color}`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                </motion.div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ scale: 1.05 }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${category.bgColor} ${category.color} transition-all duration-300`}
                    >
                      {skill.icon}
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
