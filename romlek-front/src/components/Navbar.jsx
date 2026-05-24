import React, { useState } from 'react';
import Romlek from '../assets/RomlekSticker.png';
import { CircleUser, Menu, X } from 'lucide-react';
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="w-full sticky top-0 z-50 border-b border-slate-200 bg-slate-50 shadow-sm backdrop-blur-xl">
            <div className="mx-auto flex flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center justify-between gap-4">
                    <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
                        <img src={Romlek} alt="Romlek" className="h-20 w-20" />
                    </Link>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                <div className="hidden md:flex md:items-center md:gap-6">
                    <ul className="flex flex-wrap items-center gap-3 rounded-full px-3 py-3">
                        <li className="rounded-full border border-transparent transition-all duration-300 hover:border-white/30 hover:bg-[#]/10 hover:backdrop-blur-md ">
                            <Link to="/about" className="block px-4 py-2 text-sm font-semibold text-slate-700">
                                ទំព័រដើម
                            </Link>
                        </li>

                        <li className="rounded-full border border-transparent transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:backdrop-blur-md ">
                            <Link to="/goals" className="block px-4 py-2 text-sm font-semibold text-slate-700">
                                សម្ភារៈ
                            </Link>
                        </li>

                        <li className="rounded-full border border-transparent transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:backdrop-blur-md ">
                            <Link to="/events" className="block px-4 py-2 text-sm font-semibold text-slate-700">
                                ទំនាក់ទំនង
                            </Link>
                        </li>

                        <li className="rounded-full border border-transparent transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:backdrop-blur-md ">
                            <Link to="/contents" className="block px-4 py-2 text-sm font-semibold text-slate-700">
                                អំពី រំលែក
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="hidden md:flex md:items-center md:gap-4">

                    <div className="flex items-center gap-3">
                        <button className="grid h-10 w-10 place-items-center rounded-full bg-slate-700 text-slate-200 shadow-sm transition hover:bg-slate-800">
                            <CircleUser className="h-4 w-4" />
                        </button>
                        <DarkMode />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden border-t border-slate-200 bg-white/95 px-4 pb-4 pt-3 backdrop-blur-xl shadow-sm">
                    <div className="space-y-3">
                        <Link to="/about" onClick={closeMenu} className="block rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                            ទំព័រដើម
                        </Link>
                        <Link to="/goals" onClick={closeMenu} className="block rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                            សម្ភារៈ
                        </Link>
                        <Link to="/events" onClick={closeMenu} className="block rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                            ទំនាក់ទំនង
                        </Link>
                        <Link to="/contents" onClick={closeMenu} className="block rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                            អំពី រំលែក
                        </Link>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                        <button className="flex items-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                            <CircleUser className="h-4 w-4" />
                            Profile
                        </button>
                        <DarkMode />
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;