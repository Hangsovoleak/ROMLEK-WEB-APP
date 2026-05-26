import React, { useState, useRef } from 'react';
import Romlek from '../assets/RomlekSticker.png';
import { CircleUser, Menu, X } from 'lucide-react';
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    // Track the sliding indicator positions dynamically
    const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0, opacity: 0 });

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navItems = [
        { to: "/about", label: "ទំព័រដើម" },
        { to: "/goals", label: "សម្ភារៈ" },
        { to: "/events", label: "ទំនាក់ទំនង" },
        { to: "/contents", label: "អំពី រំលែក" }
    ];

    // Create an array of references to measure each link element's real size
    const itemRefs = useRef([]);

    // This handles the smooth mouse entry calculation
    const handleMouseEnter = (index) => {
        const currentItem = itemRefs.current[index];
        if (currentItem) {
            const { offsetLeft, offsetWidth } = currentItem;
            setSliderStyle({
                left: offsetLeft,
                width: offsetWidth,
                opacity: 1,
            });
        }
    };

    // Hide the slider when the mouse completely leaves the navigation list
    const handleMouseLeave = () => {
        setSliderStyle((prev) => ({ ...prev, opacity: 0 }));
    };

    // --- Concept Theme Colors (White & Blue) ---
    const navContainerStyle = `
        w-full border-b backdrop-blur-xl transition-all duration-300
        bg-white/70 border-blue-100/80 shadow-[0_4px_20px_rgba(37,99,235,0.03)]
        dark:bg-slate-950/75 dark:border-blue-950/40 dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)]
    `;

    const menuPillStyle = `
        relative flex items-center gap-1 p-1.5 rounded-full border
        bg-blue-50/50 border-blue-100/50
        dark:bg-blue-950/20 dark:border-blue-900/30
    `;

    return (
        <div className="w-full sticky top-0 z-50">
            <nav className={navContainerStyle}>
                <div className="w-full flex h-16 items-center justify-between px-6 lg:px-12">
                    
                    {/* Logo Section */}
                    <div className="flex items-center min-w-[60px]">
                        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                            <img src={Romlek} alt="Romlek" className="h-20 w-auto object-contain" />
                        </Link>
                    </div>

                    {/* Desktop Navigation Links with Smart Auto-Sliding Hover */}
                    <div className="hidden md:flex md:items-center">
                        <ul className={menuPillStyle} onMouseLeave={handleMouseLeave}>
                            
                            {/* The Smart Sliding Glass Indicator */}
                            <div 
                                className="absolute top-1.5 bottom-1.5 rounded-full shadow-sm pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] bg-white dark:bg-blue-600"
                                style={{
                                    left: `${sliderStyle.left}px`,
                                    width: `${sliderStyle.width}px`,
                                    opacity: sliderStyle.opacity,
                                    transform: sliderStyle.opacity ? 'scale(1)' : 'scale(0.95)'
                                }}
                            />

                            {navItems.map((item, index) => (
                                <li 
                                    key={item.to} 
                                    ref={(el) => (itemRefs.current[index] = el)}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    className="relative z-10"
                                >
                                    <Link 
                                        to={item.to} 
                                        className="block px-5 py-2 text-sm font-medium rounded-full text-center whitespace-nowrap transition-colors duration-300 text-slate-600 dark:text-slate-300 hover:text-blue-800 dark:hover:text-white"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Action Items */}
                    <div className="hidden md:flex md:items-center md:gap-4 min-w-[140px] justify-end">
                        <div className="flex items-center gap-3">
                            <button className="group flex h-10 w-10 items-center justify-center rounded-full text-white bg-blue-800 dark:bg-blue-900/30 shadow-sm transition-all duration-300 hover:bg-blue-800 dark:hover:bg-blue-900/15 hover:scale-105">
                                <CircleUser className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                            </button>
                            <div className="p-1 rounded-full bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100/50 dark:border-blue-900/30">
                                <DarkMode />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-3">
                        <DarkMode />
                        <button
                            onClick={toggleMenu}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white/50 dark:bg-slate-900/50 border-blue-100 dark:border-blue-950 text-slate-700 dark:text-slate-200 shadow-sm backdrop-blur-md transition-all duration-300"
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div className="md:hidden border-t bg-white/95 dark:bg-slate-950/95 border-blue-100 dark:border-blue-950 px-6 py-4 backdrop-blur-xl">
                        <div className="space-y-2">
                            {navItems.map((item) => (
                                <Link 
                                    key={item.to}
                                    to={item.to} 
                                    onClick={closeMenu} 
                                    className="block rounded-full px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-4 pt-4 border-t border-blue-100 dark:border-blue-950">
                            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-900 text-white px-4 py-3 text-sm font-medium shadow-sm">
                                <CircleUser className="h-4 w-4" />
                                Profile
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Navbar;