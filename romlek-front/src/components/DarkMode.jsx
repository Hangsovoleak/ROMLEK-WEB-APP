import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

function DarkMode() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="relative flex h-10 w-24 items-center rounded-full bg-slate-200 p-1 text-slate-700 transition-all duration-300 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-100"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span
        className={`absolute left-1 top-1 h-8 w-8 rounded-full bg-white shadow transition-transform duration-300 dark:bg-slate-900 ${isDark ? 'translate-x-0' : 'translate-x-14'}`}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-2">
        <Moon className={`h-4 w-4 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-30'}`} />
        <Sun className={`h-4 w-4 transition-opacity duration-300 ${isDark ? 'opacity-30' : 'opacity-100'}`} />
      </span>
    </button>
  );
}

export default DarkMode;