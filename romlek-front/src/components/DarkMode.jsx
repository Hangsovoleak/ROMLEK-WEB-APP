import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

function DarkMode() {
  const [isDark, setIsDark] = useState(false);

  // Check dark mode setting when the page loads
  useEffect(() => {
    const hasDarkClass = document.documentElement.classList.contains('dark');
    setIsDark(hasDarkClass);
  }, []);

  const toggleDarkMode = () => {
    const newDarkState = !isDark;
    setIsDark(newDarkState);
    document.documentElement.classList.toggle('dark', newDarkState);
  };

  // --- Clean Style Variables ---
  const buttonStyle = `
    group relative flex h-10 w-20 items-center rounded-full p-1 shadow-sm transition-all duration-300 
    bg-slate-100/80 border border-slate-200/40 
    dark:bg-slate-800/60 dark:border-slate-700/30 
    hover:scale-105 active:scale-95
  `;

  // We use simple right-1 and left-1 classes instead of complex math
  const sliderPosition = isDark ? 'right-1' : 'left-1';
  
  const sliderStyle = `
    absolute top-1 bottom-1 w-8 rounded-full bg-white shadow-md transition-all duration-300 ease-out
    dark:bg-slate-700 
    ${sliderPosition}
  `;

  // Conditional styles for icons (Color, Opacity, Size, and Rotation)
  const sunStyle = isDark 
    ? 'text-slate-400 opacity-40 scale-90' 
    : 'text-amber-500 opacity-100 scale-110 rotate-45';

  const moonStyle = isDark 
    ? 'text-indigo-400 opacity-100 scale-110 -rotate-12' 
    : 'text-slate-400 opacity-40 scale-90';

  return (
    <button onClick={toggleDarkMode} className={buttonStyle} aria-label="Toggle theme">
      
      {/* The White/Dark Sliding Block */}
      <span className={sliderStyle} />
      
      {/* The Icons Layer */}
      <span className="relative z-10 flex w-full items-center justify-between px-0">
        
        {/* Sun Container */}
        <span className="flex h-8 w-8 items-center justify-center">
          <Sun className={`h-[18px] w-[18px] transition-all duration-300 group-hover:rotate-90 ${sunStyle}`} />
        </span>
        
        {/* Moon Container */}
        <span className="flex h-8 w-8 items-center justify-center">
          <Moon className={`h-[18px] w-[18px] transition-all duration-300 group-hover:-rotate-45 ${moonStyle}`} />
        </span>

      </span>
    </button>
  );
}

export default DarkMode;