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

  // --- Theme Synchronized Styles ---
  const buttonStyle = `
    group relative flex h-10 w-20 items-center rounded-full p-1 shadow-inner transition-all duration-300 
    hover:scale-105 active:scale-95 cursor-pointer border-none
  `;

  // This guarantees silky-smooth 60fps hardware-accelerated toggle animations!
  const sliderStyle = `
    absolute top-1 bottom-1 left-1 w-8 rounded-full shadow-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
    bg-white dark:bg-slate-900
    ${isDark ? 'translate-x-10' : 'translate-x-0'}
  `;

  // Icons styling optimized to blend perfectly with your specific image palette variables
  const sunStyle = isDark 
    ? 'text-slate-500 opacity-30 scale-90' 
    : 'text-amber-500 opacity-100 scale-110 rotate-45 [filter:drop-shadow(0_0_4px_rgba(245,158,11,0.4))]';

  const moonStyle = isDark 
    ? 'text-cyan-400 opacity-100 scale-110 -rotate-12 [filter:drop-shadow(0_0_6px_rgba(86,225,233,0.6))]' 
    : 'text-slate-400 opacity-30 scale-90';

  return (
    <button 
      onClick={toggleDarkMode} 
      className={buttonStyle} 
      aria-label="Toggle theme"
      style={{
        background: isDark ? 'rgba(17, 44, 113, 0.4)' : 'rgba(10, 35, 83, 0.06)',
        border: '1px solid var(--border)'
      }}
    >
      
      {/* The White/Dark Sliding Block */}
      <span className={sliderStyle} />
      
      {/* The Icons Layer */}
      <span className="relative z-10 flex w-full items-center justify-between px-0 pointer-events-none">
        
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