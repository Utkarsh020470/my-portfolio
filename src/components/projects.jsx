import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import {
  ExternalLink,
  Github,
  MessageSquare,
  Calculator,
  ShoppingCart,
  ListTodo,
  Brain,
  Layout,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

const projects = [
  {
    id: 1,
    title: 'Insights Hub',
    description: 'A modern blog website with rich content management features.',
    icon: <Layout className="w-24 h-24 text-emerald-500" />,
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    demoLink: '/demo-unavailable',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Chat Space',
    description: 'Real-time chat application with private and group messaging.',
    icon: <MessageSquare className="w-24 h-24 text-emerald-500" />,
    tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
    demoLink: '/demo-unavailable',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Connect-4',
    description: 'Interactive Connect-4 game with AI opponent options.',
    icon: <Brain className="w-24 h-24 text-emerald-500" />,
    tags: ['JavaScript', 'HTML', 'CSS'],
    demoLink: '/demo-unavailable',
    githubLink: '#',
  },
  {
    id: 4,
    title: 'To-Do List',
    description: 'Task manager with categories, priorities, and reminders.',
    icon: <ListTodo className="w-24 h-24 text-emerald-500" />,
    tags: ['React', 'LocalStorage', 'Tailwind CSS'],
    demoLink: '/demo-unavailable',
    githubLink: '#',
  },
  {
    id: 5,
    title: 'E-Commerce Clone',
    description:
      'Fully functional e-commerce platform with payment integration.',
    icon: <ShoppingCart className="w-24 h-24 text-emerald-500" />,
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoLink: '/demo-unavailable',
    githubLink: '#',
  },
  {
    id: 6,
    title: 'Calculator',
    description: 'Advanced calculator with scientific operations and history.',
    icon: <Calculator className="w-24 h-24 text-emerald-500" />,
    tags: ['JavaScript', 'HTML', 'CSS'],
    demoLink: '/demo-unavailable',
    githubLink: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const navigate = useNavigate();

  const handleDemoClick = (e, link) => {
    e.preventDefault();
    navigate(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section
      id="projects"
      className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800"
    >
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
              My <span className="text-emerald-500">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 dark:bg-gray-900 border-gray-200 dark:border-gray-700 group">
                    <div className="relative flex items-center justify-center h-48 w-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm overflow-hidden group-hover:bg-emerald-50/50 dark:group-hover:bg-emerald-900/20 transition-colors duration-300">
                      <motion.div
                        className="transform transition-transform duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {project.icon}
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.5 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent" />
                      </motion.div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag, index) => (
                          <motion.span
                            key={index}
                            className="px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 rounded-full"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button asChild variant="outline" size="sm">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={16} className="mr-2" />
                            Code
                          </a>
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="sm"
                          className="bg-emerald-500 hover:bg-emerald-600"
                          onClick={(e) => handleDemoClick(e, project.demoLink)}
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </Button>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
