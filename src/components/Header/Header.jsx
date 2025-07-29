import { useEffect, useState } from 'react';

export default function Header() {
  const [isDark, setIsDark] = useState(() => {
    const theme = localStorage.getItem("theme");
    if (theme) return theme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-primary dark:text-primary-dark">
        <span className="text-secondary dark:text-secondary-dark">To</span>-Do
      </h1>

      {/* Theme Toggle */}
      <div className="flex items-center">
        <span className="mr-2 text-sm font-medium text-secondary dark:text-secondary-dark">
          <i className="fas fa-sun"></i>
        </span>
        <label htmlFor="theme-toggle" className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="theme-toggle"
            className="sr-only peer"
            checked={isDark}
            onChange={() => setIsDark(prev => !prev)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-light dark:peer-checked:bg-primary-dark"></div>
        </label>
        <span className="ml-2 text-sm font-medium text-secondary dark:text-secondary-dark">
          <i className="fas fa-moon"></i>
        </span>
      </div>
    </header>
  );
}
