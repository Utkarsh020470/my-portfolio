import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-8">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://github.com/Utkarsh020470"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/utkarsh-2807-saxena/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:utkarsh2807saxena@gmail.com"
              className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400"
            >
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2024 Utkarsh Saxena. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
