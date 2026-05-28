import React, { useState } from 'react';
import StatCard from '../components/Pr_Components/card'; // Preserving your file import path
import sdg from '../assets/sdg.jpg';
import helper from '../components/Pr_Components/helper';
import Watch from '../assets/watch.jpg'
import sdgKid from '../assets/sdgKids.png';

function Products() {
  // State for accordion toggles in the sidebar filters
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  
  // NEW: State to control slide-out filter sheet drawer on mobile devices
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const productList = [
    { image: Watch, title: 'នាឡិកាដៃ Premium', rating: 5 },
    { image: Watch, title: 'នាឡិកាដៃ បុរាណ', rating: 4 },
    { image: Watch, title: 'នាឡិកាដៃ បែបស្ព័រ', rating: 4 },
    { image: Watch, title: 'នាឡិកាដៃ ទំនើប', rating: 3 },
    { image: Watch, title: 'នាឡិកាដៃ វៃឆ្លាត', rating: 5 },
    { image: Watch, title: 'នាឡិកាដៃ លំដាប់ខ្ពស់', rating: 4 },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300">
      
      {/* Main Structural Wrapper */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Breadcrumbs Path Navigation */}
        <nav className="text-xs font-medium text-slate-400 dark:text-slate-500 mb-6 flex items-center gap-2">
          <span className="hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors">ទំព័រដើម</span>
          <span>/</span>
          <span className="hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors">សម្ភារៈ</span>
        </nav>

        {/* Dynamic Marketing Showcase Banner Area */}
        <div className="w-full bg-white dark:bg-[#161d33] border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 md:p-8 mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.2)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-colors duration-300">
          <div className="max-w-xl">
            <h1 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white tracking-wide leading-tight m-0">
              សម្ភារៈដែល រំលែក ទទួលបាន
            </h1>
          </div>
          
          {/* Dynamic Action Search Filter Container Layout */}
          <div className="flex items-center bg-slate-50 dark:bg-[#111628] border border-slate-200 dark:border-slate-800/80 rounded-xl px-3 py-2 w-full md:w-80 shadow-inner transition-colors duration-300">
            <input 
              type="text" 
              placeholder="ស្វែងរករបស់ដែលអ្នកត្រូវការ..." 
              className="bg-transparent text-sm w-full focus:outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
            />
            <button className="bg-[#1b233d] dark:bg-blue-600 text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-slate-800 dark:hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap">
              ស្វែងរក
            </button>
          </div>
        </div>

        {/* Secondary Sub-Header Control Bar Layer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-6 gap-4">
          
          {/* Left Block: Active Filter Chip Badges Stack & Mobile Toggle Action Button */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {/* MOBILE ONLY FILTER BUTTON BUTTON */}
            <button 
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-slate-900 dark:bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer"
            >
              <span>តម្រងស្វែងរក</span>
            </button>

            <div className="hidden sm:flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mr-1">តម្រងបច្ចុប្បន្ន:</span>
              <div className="flex items-center gap-1.5 bg-white dark:bg-[#161d33] border border-slate-200 dark:border-slate-800 rounded-lg px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 shadow-sm transition-colors duration-300">
                <span>សរុបទាំងអស់ (75)</span>
                <span className="text-slate-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-400 cursor-pointer text-[10px] ml-1">✕</span>
              </div>
              <div className="flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 rounded-lg px-2.5 py-1 text-xs font-medium text-blue-700 dark:text-blue-400 shadow-sm transition-colors duration-300">
                <span>កាតាបស្ពាយ</span>
                <span className="text-blue-400 dark:text-blue-500 hover:text-red-500 dark:hover:text-red-400 cursor-pointer text-[10px] ml-1">✕</span>
              </div>
            </div>
          </div>

          {/* Right Block: Sorting Selector Switch */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs font-medium text-slate-400 dark:text-slate-500">តម្រៀបតាម:</span>
            <select className="bg-white dark:bg-[#161d33] border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none shadow-sm cursor-pointer transition-colors duration-300">
              <option className="dark:bg-[#161d33]">ផលិតផលថ្មីៗ</option>
              <option className="dark:bg-[#161d33]">ចំនួនអតិបរមា</option>
              <option className="dark:bg-[#161d33]">ចំនួនអប្បបរមា</option>
            </select>
          </div>
        </div>

        {/* Content Division Grid Frame layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* DESKTOP ACCORDION FILTER SIDEBAR (Hidden on Mobile/Tablets, Appears seamlessly on lg screens) */}
          <aside className="hidden lg:block w-full lg:w-64 bg-white dark:bg-[#161d33] border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-4 shadow-sm space-y-3 lg:sticky lg:top-6 transition-colors duration-300 flex-shrink-0">
            {renderSidebarContent()}
          </aside>

          {/* MOBILE SLIDE-OVER DRAWER (Rendered via Fixed Portal-style Overlay Viewport Layers) */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
              {/* Dimmed Background Backdrop Mask */}
              <div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                onClick={() => setIsMobileFilterOpen(false)}
              />
              
              {/* Sliding Filter Content Drawer */}
              <div className="relative w-80 max-w-full bg-white dark:bg-[#161d33] h-full p-6 shadow-xl flex flex-col overflow-y-auto transition-transform duration-300 animate-slide-in">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-4">
                  <h2 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider">តម្រងស្វែងរក</h2>
                  <button 
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center font-bold text-base border-none cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
                <div className="space-y-4">
                  {renderSidebarContent()}
                </div>
              </div>
            </div>
          )}

          {/* MAIN PRODUCT GRID VIEW AND PAGINATION LINK CONTROLS CONTAINER */}
          <main className="flex-1 w-full">
            
            {/* Structured Product Mapping Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center w-full px-4 sm:px-2">
              {productList.map((product, index) => (
                <StatCard key={index} data={product} />
              ))}
            </div>

            {/* Pagination Controls Section Footer Layout */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-500 flex-wrap">
              <button className="hover:text-slate-800 dark:hover:text-white transition-colors mr-1 sm:mr-3 text-slate-400 dark:text-slate-600 bg-transparent border-none cursor-pointer">
                ← ថយក្រោយ
              </button>
              <span className="h-8 w-8 flex items-center justify-center bg-[#1b233d] dark:bg-blue-600 text-white rounded-lg cursor-pointer shadow-md">1</span>
              <span className="h-8 w-8 flex items-center justify-center bg-white dark:bg-[#161d33] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#111628] rounded-lg cursor-pointer transition-colors shadow-sm">2</span>
              <span className="h-8 w-8 flex items-center justify-center bg-white dark:bg-[#161d33] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#111628] rounded-lg cursor-pointer transition-colors shadow-sm">3</span>
              <span className="px-1 text-slate-300 dark:text-slate-700">...</span>
              <span className="h-8 w-8 flex items-center justify-center bg-white dark:bg-[#161d33] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#111628] rounded-lg cursor-pointer transition-colors shadow-sm">10</span>
              <button className="hover:text-slate-800 dark:hover:text-white transition-colors ml-1 sm:ml-3 text-slate-400 dark:text-slate-600 bg-transparent border-none cursor-pointer">
                បន្ទាប់ →
              </button>
            </div>

          </main>

        </div>
        <section className="w-full pt-16">
          <h2 className="text-3xl font-bold text-red-500 dark:text-white mb-6 pl-1 border-l-4 border-red-500">
            អត្ថប្រយោជន៍នៃការចូលរួមជាមួយយើង
          </h2>
          {helper()}
        </section>
        <section className="w-full pt-16">
          <h2 className="text-3xl font-bold text-emerald-500 dark:text-white mb-16 pl-1 border-l-4 border-emerald-500">
            ការអភិវឌ្ឍន៍ប្រកបដោយចីរភាព (SDGs)
          </h2>
          <img
            src={sdg}
            className="w-full h-auto rounded-lg mt-10 shadow-md object-cover transition-transform duration-300"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
              boxShadow: 'var(--shadow)'
            }}
          />
        </section>
        <section className="w-full pt-16">
          <h2 className="text-3xl font-bold text-blue-500 dark:text-white mb-16 pl-1 border-l-4 border-blue-500">
            ការចូលរួមរបស់កុមារៗក្នុងការអភិវឌ្ឍន៍ប្រកបដោយចីរភាព
          </h2>
          <img
            src={sdgKid}
            className="w-full h-auto rounded-lg mt-10 shadow-md object-cover transition-transform duration-300"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
              boxShadow: 'var(--shadow)'
            }}
          />
        </section>
      </div>
    </div>
  );

  // Helper helper to avoid duplicating the accordion render tree blocks for mobile drawer & desktop views
  function renderSidebarContent() {
    return (
      <>
        {/* Accordion Group 1: Categories */}
        <div className="border-b border-slate-100 dark:border-slate-800/60 pb-2">
          <button 
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="w-full flex items-center justify-between text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest py-2 hover:text-slate-600 dark:hover:text-slate-300 transition-colors bg-transparent border-none cursor-pointer"
          >
            <span>ប្រភេទសម្ភារៈ</span>
            <span className={`text-[10px] transform transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>
          
          {isCategoryOpen && (
            <ul className="mt-2 space-y-1 pl-1 m-0 p-0 list-none text-left">
              <li className="flex items-center justify-between bg-slate-50 dark:bg-[#111628] text-blue-600 dark:text-blue-400 font-bold text-xs px-3 py-2 rounded-xl cursor-pointer transition-colors">
                <span>សម្ភារៈទាំងអស់</span>
                <span className="text-[10px] bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded-md">75</span>
              </li>
              {['សម្ភារៈសិក្សា', 'សម្ភារៈកុមារ', 'សម្ភារៈនារី', 'សម្ភារៈអេឡិចត្រូនិច'].map((item, idx) => (
                <li key={idx} className="flex items-center justify-between text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-[#111628]/60 text-xs px-3 py-2 rounded-xl cursor-pointer transition-all">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Accordion Group 2: Status / Labels Filter */}
        <div>
          <button 
            onClick={() => setIsBrandOpen(!isBrandOpen)}
            className="w-full flex items-center justify-between text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest py-2 hover:text-slate-600 dark:hover:text-slate-300 transition-colors bg-transparent border-none cursor-pointer"
          >
            <span>ស្ថានភាពការប្រើប្រាស់</span>
            <span className={`text-[10px] transform transition-transform duration-200 ${isBrandOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>
          
          {isBrandOpen && (
            <ul className="mt-2 space-y-1 pl-1 text-xs text-slate-600 dark:text-slate-400 m-0 p-0 list-none text-left">
              {['ប្រើប្រាស់ឥតគិតថ្លៃ', 'ត្រូវការការអនុញ្ញាត'].map((label, idx) => (
                <li key={idx} className="flex items-center gap-2 px-3 py-2 hover:bg-slate-50 dark:hover:bg-[#111628]/60 rounded-xl cursor-pointer transition-colors">
                  <input type="checkbox" id={`label-${idx}`} className="rounded border-slate-300 dark:border-slate-700 dark:bg-[#0f1424] text-blue-600 accent-blue-600 focus:ring-0 cursor-pointer" />
                  <label htmlFor={`label-${idx}`} className="cursor-pointer select-none">{label}</label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </>
    );
  }
}

export default Products;