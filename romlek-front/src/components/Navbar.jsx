import React, { useState, useRef } from 'react';
import Romlek from '../assets/RomlekSticker.png';
import { CircleUser, Menu } from 'lucide-react';
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
        { to: "/products", label: "សម្ភារៈ" },
        { to: "/events", label: "ទំនាក់ទំនង" },
        { to: "/contents", label: "អំពី រំលែក" }
    ];

    const itemRefs = useRef([]);

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

    const handleMouseLeave = () => {
        setSliderStyle((prev) => ({ ...prev, opacity: 0 }));
    };

    // --- Dynamic Navigation Design Classes Matched to Your Specific Matrix ---
    const navContainerStyle = `
        w-full backdrop-blur-xl transition-all duration-300 border-b
        bg-white/45 border-[var(--border)] shadow-[var(--shadow)]
        dark:bg-[linear-gradient(135deg,rgba(86,225,233,0.04),rgba(187,99,255,0.04))]
    `;

    const menuPillStyle = `
        relative flex items-center gap-1 p-1.5 rounded-full border
        bg-white/30 border-[var(--border)]
        dark:bg-white/5 dark:border-white/10
    `;

    return (
        <div className="w-full sticky top-0 z-50 px-0 sm:px-4 pt-0 sm:pt-2">
            {/* Added a light wrapper constraint so the mobile menu can float as a pill */}
            <nav className={`${navContainerStyle} sm:rounded-2xl`}>
                <div className="w-full flex h-20 items-center justify-between px-6 lg:px-12">
                    
                    {/* Logo Section */}
                    <div className="flex items-center min-w-[60px]">
                        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                            <img src={Romlek} alt="Romlek" className="h-20 w-auto object-contain" />
                        </Link>
                    </div>

                    {/* Desktop Navigation Links with Glowing Auto-Sliding Hover */}
                    <div className="hidden md:flex md:items-center">
                        <ul className={menuPillStyle} onMouseLeave={handleMouseLeave}>
                            
                            <div 
                                className="absolute top-1.5 bottom-1.5 rounded-full pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] 
                                bg-[var(--space-purple)] dark:bg-[var(--accent)] 
                                shadow-[0_0_15px_rgba(91,88,235,0.4)] dark:shadow-[0_0_20px_rgba(0,240,255,0.6)]"
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
                                        className="block px-6 py-2 text-sm font-medium rounded-full text-center whitespace-nowrap transition-colors duration-200 
                                        text-[var(--text)] dark:text-slate-200 
                                        hover:text-white dark:hover:text-[#051330]"
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
                            <button className="group flex h-10 w-10 items-center justify-center rounded-full text-white bg-[var(--space-dark)] dark:bg-[var(--accent)] dark:text-[#051330] shadow-[var(--shadow)] transition-all duration-300 hover:scale-105 active:scale-95">
                                <CircleUser className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                            </button>
                            <div className="p-1 rounded-full bg-white/30 dark:bg-white/5 border border-[var(--border)]">
                                <DarkMode />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-3">
                        <DarkMode />
                        <button
                            onClick={toggleMenu}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white/40 dark:bg-white/5 border-[var(--border)] text-[var(--text)] dark:text-slate-200 shadow-sm backdrop-blur-md transition-all duration-300 active:scale-95"
                        >
                            {isOpen ? <Menu className="h-5 w-5 animate-in fade-in zoom-in duration-200" /> : <Menu className="h-5 w-5 animate-in fade-in zoom-in duration-200" />}
                        </button>
                    </div>
                </div>

                {/* --- TRANSFORMed MOBILE DROPDOWN CAPSULE --- */}
                {isOpen && (
                    <div className="absolute top-[88px] left-4 right-4 md:hidden overflow-hidden rounded-2xl border backdrop-blur-2xl transition-all duration-300 shadow-[var(--shadow)] animate-in slide-in-from-top-4 duration-300 ease-out
                        bg-[#5a58eba9] border-[var(--border)]
                        dark:bg-[#5a58eba9] dark:border-white/10"
                    >
                        {/* Interactive Item Container */}
                        <div className="p-4 space-y-1">
                            {navItems.map((item) => (
                                <Link 
                                    key={item.to}
                                    to={item.to} 
                                    onClick={closeMenu} 
                                    className="block rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-200 
                                        text-[var(--text)] dark:text-slate-200 
                                        hover:bg-[var(--space-purple)]/15 dark:hover:bg-[var(--accent)]/10 
                                        hover:text-[var(--space-purple)] dark:hover:text-[var(--accent)]
                                        active:scale-[0.99]"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Action Drawer Area */}
                        <div className="px-4 pb-4 pt-2 border-t border-[var(--border)] dark:border-white/5 bg-black/5 dark:bg-white/5">
                            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--space-dark)] text-white dark:bg-[var(--accent)] dark:text-[#051330] px-4 py-3.5 text-sm font-semibold shadow-md active:scale-[0.98] transition-all duration-150">
                                <CircleUser className="h-5 w-5" />
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