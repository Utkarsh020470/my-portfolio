import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative inline-block">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg py-2 pl-10 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {theme === 'dark' && (
          <Moon size={16} className="text-gray-600 dark:text-gray-400" />
        )}
        {theme === 'light' && (
          <Sun size={16} className="text-gray-600 dark:text-gray-400" />
        )}
        {theme === 'system' && (
          <Monitor size={16} className="text-gray-600 dark:text-gray-400" />
        )}
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg
          className="h-4 w-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
