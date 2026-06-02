import React, { useState } from 'react';
import StatCard from '../components/Pr_Components/card'; 
import sdg from '../assets/sdg.jpg';
import helper from '../components/Pr_Components/helper';
import Watch from '../assets/watch.jpg';
import sdgKid from '../assets/sdgKids.png';

function Products() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Updated array with circular economy details to support the card redesign
  const productList = [
    { 
      image: Watch, 
      title: 'នាឡិកាដៃ Premium', 
      rating: 5,
      description: 'នាឡិកាដៃឆ្លាតវៃ (Smart Watch) នៅដំណើរការល្អទាំងអស់ អាចវាស់ចលនាបេះដូង និងជំហានដើរបាន។ ចង់ប្រគល់ជូនអ្នកសិក្សាស្រាវជ្រាវក្រៅម៉ោង។',
      target: 'និស្សិត ឬសិស្សវិទ្យាល័យ',
      quantity: '១ គ្រឿង',
      quality: '៩០% (មានប្រអប់ និងខ្សែសាក)',
      status: 'កំពុងស្វែងរកម្ចាស់'
    },
    { 
      image: Watch, 
      title: 'នាឡិកាដៃ បុរាណ', 
      rating: 4,
      description: 'នាឡិកាប្រភេទកាត់បុរាណ ដើរដោយថាមពលថ្មធម្មតា។ រូបរាងស្អាត ស័ក្តិសមសម្រាប់អ្នកចូលចិត្តតុបតែងខ្លួនបែបសាមញ្ញ។',
      target: 'អ្នកស្រឡាញ់របស់បុរាណ',
      quantity: '១ គ្រឿង',
      quality: '៨៥% (ទើបតែដូរថ្មថ្មី)',
      status: 'កំពុងស្វែងរកម្ចាស់'
    },
    { 
      image: Watch, 
      title: 'នាឡិកាដៃ បែបស្ព័រ', 
      rating: 4,
      description: 'រឹងមាំ ធន់នឹងការជ្រាបទឹក កម្រិតស្រាល។ ស័ក្តិសមបំផុតសម្រាប់ប្អូនៗយកទៅប្រើប្រាស់ពេលលេងកីឡា ឬធ្វើដំណើរការងារសហគមន៍។',
      target: 'យុវជនស្ម័គ្រចិត្ត ឬសិស្សានុសិស្ស',
      quantity: '១ គ្រឿង',
      quality: '៨០% (មានស្នាមឆ្កូតតិចតួច)',
      status: 'កំពុងស្វែងរកម្ចាស់'
    },
    { 
      image: Watch, 
      title: 'នាឡិកាដៃ ទំនើប', 
      rating: 3,
      description: 'នាឡិកាម៉ូតទាន់សម័យ ទំងន់ស្រាល។ អាចប្រើប្រាស់ប្រចាំថ្ងៃសម្រាប់មើលម៉ោងការងារ ឬម៉ោងរៀនសូត្របានយ៉ាងច្បាស់លាស់។',
      target: 'សិស្ស ឬនិស្សិតឆ្នាំទី១',
      quantity: '១ គ្រឿង',
      quality: '៧៥% (ខ្សែជ័រមានសភាពចាស់បន្តិច)',
      status: 'កំពុងស្វែងរកម្ចាស់'
    },
    { 
      image: Watch, 
      title: 'នាឡិកាដៃ វៃឆ្លាត', 
      rating: 5,
      description: 'បង្ហាញម៉ោងជាលក្ខណៈឌីជីថល អាចភ្ជាប់ប៊្លូធូសបានយ៉ាងរហ័ស។ ជំនួយដល់ការគ្រប់គ្រងពេលវេលាសិក្សា និងការងារប្រចាំថ្ងៃ។',
      target: 'អ្នកដែលត្រូវការប្រើប្រាស់ចាំបាច់',
      quantity: '១ គ្រឿង',
      quality: '៩៥% (នៅថ្មីស្អាត)',
      status: 'កំពុងស្វែងរកម្ចាស់'
    },
    { 
      image: Watch, 
      title: 'នាឡិកាដៃ លំដាប់ខ្ពស់', 
      rating: 4,
      description: 'នាឡិកាដែកមាំមួន ប្រើប្រាស់បានយូរអង្វែង។ ត្រូវបានសម្អាត និងថែទាំយ៉ាងយកចិត្តទុកដាក់មុននឹងរៀបចំចែករំលែកបន្ត។',
      target: 'បុគ្គលិកស្ម័គ្រចិត្ត ឬសិស្សខ្វះខាត',
      quantity: '១ គ្រឿង',
      quality: '៨៨% (ដំណើរការល្អឥតខ្ចោះ)',
      status: 'កំពុងស្វែងរកម្ចាស់'
    },
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

        {/* Dynamic Marketing Showcase Banner Area using Custom Variables */}
        <div 
          className="w-full rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-all duration-300"
          style={{
            background: 'var(--card-bg)',
            borderColor: 'var(--border)',
            borderWidth: '1px',
            boxShadow: 'var(--shadow)',
            backdropFilter: 'var(--card-blur)',
            WebkitBackdropFilter: 'var(--card-blur)'
          }}
        >
          <div className="max-w-xl">
            <h1 className="text-xl md:text-3xl font-black tracking-wide leading-tight m-0" style={{ color: 'var(--text-h)' }}>
              សម្ភារៈដែល រំលែក ទទួលបាន
            </h1>
          </div>
          
          {/* Dynamic Action Search Filter Container Layout */}
          <div 
            className="flex items-center rounded-xl px-3 py-2 w-full md:w-80 shadow-inner transition-colors duration-300"
            style={{
              background: 'var(--code-bg)',
              borderColor: 'var(--border)',
              borderWidth: '1px'
            }}
          >
            <input 
              type="text" 
              placeholder="ស្វែងរករបស់ដែលអ្នកត្រូវការ..." 
              className="bg-transparent text-sm w-full focus:outline-none placeholder-slate-400 dark:placeholder-slate-500"
              style={{ color: 'var(--text)' }}
            />
            <button 
              className="text-white text-xs px-4 py-2 rounded-lg font-bold transition-all shadow-sm whitespace-nowrap hover:opacity-90 active:scale-95 cursor-pointer border-none"
              style={{ background: 'var(--accent)' }}
            >
              ស្វែងរក
            </button>
          </div>
        </div>

        {/* Secondary Sub-Header Control Bar Layer */}
        <div 
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 mb-6 gap-4"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          
          {/* Left Block: Active Filter Chip Badges Stack & Mobile Toggle Action Button */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {/* MOBILE ONLY FILTER BUTTON */}
            <button 
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer border-none"
              style={{ background: 'var(--accent)' }}
            >
              <span>តម្រងស្វែងរក</span>
            </button>

            <div className="hidden sm:flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mr-1">តម្រងបច្ចុប្បន្ន:</span>
              
              <div 
                className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium shadow-sm transition-colors duration-300"
                style={{ background: 'var(--social-bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
              >
                <span>សរុបទាំងអស់ (75)</span>
                <span className="text-slate-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-400 cursor-pointer text-[10px] ml-1">✕</span>
              </div>
              
              <div 
                className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium shadow-sm transition-colors duration-300"
                style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)', color: 'var(--accent)' }}
              >
                <span>នាឡិកាដៃ</span>
                <span className="hover:text-red-500 dark:hover:text-red-400 cursor-pointer text-[10px] ml-1" style={{ color: 'var(--accent)' }}>✕</span>
              </div>
            </div>
          </div>

          {/* Right Block: Sorting Selector Switch */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs font-medium text-slate-400 dark:text-slate-500">តម្រៀបតាម:</span>
            <select 
              className="rounded-lg px-3 py-1.5 text-xs font-semibold focus:outline-none shadow-sm cursor-pointer transition-colors duration-300"
              style={{ background: 'var(--social-bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
            >
              <option style={{ background: 'var(--bg)', color: 'var(--text)' }}>ផលិតផលថ្មីៗ</option>
              <option style={{ background: 'var(--bg)', color: 'var(--text)' }}>ចំនួនអតិបរមា</option>
              <option style={{ background: 'var(--bg)', color: 'var(--text)' }}>ចំនួនអប្បបរមា</option>
            </select>
          </div>
        </div>

        {/* Content Division Grid Frame layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* DESKTOP ACCORDION FILTER SIDEBAR */}
          <aside 
            className="hidden lg:block w-full lg:w-64 rounded-2xl p-4 shadow-sm space-y-3 lg:sticky lg:top-6 transition-all duration-300 flex-shrink-0"
            style={{
              background: 'var(--social-bg)',
              border: '1px solid var(--border)',
              backdropFilter: 'var(--card-blur)',
              WebkitBackdropFilter: 'var(--card-blur)'
            }}
          >
            {renderSidebarContent()}
          </aside>

          {/* MOBILE SLIDE-OVER DRAWER */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
              <div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                onClick={() => setIsMobileFilterOpen(false)}
              />
              
              <div 
                className="relative w-80 max-w-full h-full p-6 shadow-xl flex flex-col overflow-y-auto transition-transform duration-300 animate-slide-in"
                style={{ background: 'var(--bg)', borderLeft: '1px solid var(--border)' }}
              >
                <div className="flex items-center justify-between pb-4 mb-4" style={{ borderBottom: '1px solid var(--border)' }}>
                  <h2 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-h)' }}>តម្រងស្វែងរក</h2>
                  <button 
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="h-8 w-8 rounded-full flex items-center justify-center font-bold text-base border-none cursor-pointer"
                    style={{ background: 'var(--code-bg)', color: 'var(--text)' }}
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

          {/* MAIN PRODUCT GRID VIEW AND CONTROLS CONTAINER */}
          <main className="flex-1 w-full">
            
            {/* Grid display using stretch behavior to keep heights uniform */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center w-full px-4 sm:px-2">
              {productList.map((product, index) => (
                <div key={index} className="flex h-full w-full">
                  <StatCard data={product} />
                </div>
              ))}
            </div>

            {/* Pagination Controls Section Footer Layout */}
            <div 
              className="flex items-center justify-center gap-1.5 sm:gap-2 mt-12 pt-6 text-xs font-bold flex-wrap"
              style={{ borderTop: '1px solid var(--border)', color: 'var(--text-muted)' }}
            >
              <button className="hover:text-slate-800 dark:hover:text-white transition-colors mr-1 sm:mr-3 bg-transparent border-none cursor-pointer text-slate-400 dark:text-slate-600">
                ← ថយក្រោយ
              </button>
              
              <span 
                className="h-8 w-8 flex items-center justify-center text-white rounded-lg cursor-pointer shadow-md"
                style={{ background: 'var(--accent)' }}
              >
                1
              </span>
              
              {[2, 3].map((page) => (
                <span 
                  key={page}
                  className="h-8 w-8 flex items-center justify-center rounded-lg cursor-pointer transition-colors shadow-sm"
                  style={{ background: 'var(--social-bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
                >
                  {page}
                </span>
              ))}
              
              <span className="px-1 text-slate-300 dark:text-slate-700">...</span>
              
              <span 
                className="h-8 w-8 flex items-center justify-center rounded-lg cursor-pointer transition-colors shadow-sm"
                style={{ background: 'var(--social-bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
              >
                10
              </span>
              
              <button className="hover:text-slate-800 dark:hover:text-white transition-colors ml-1 sm:ml-3 bg-transparent border-none cursor-pointer text-slate-400 dark:text-slate-600">
                បន្ទាប់ →
              </button>
            </div>

          </main>

        </div>

        {/* Bottom Contextual Sections */}
        <section className="w-full pt-16">
          <h2 className="text-3xl font-bold mb-6 pl-1 border-l-4 border-red-500" style={{ color: 'var(--text-h)' }}>
            អត្ថប្រយោជន៍នៃការចូលរួមជាមួយយើង
          </h2>
          {helper()}
        </section>
        
        <section className="w-full pt-16">
          <h2 className="text-3xl font-bold mb-16 pl-1 border-l-4 border-emerald-500" style={{ color: 'var(--text-h)' }}>
            ការអភិវឌ្ឍន៍ប្រកបដោយចីរភាព (SDGs)
          </h2>
          <img
            src={sdg}
            alt="SDGs"
            className="w-full h-auto rounded-lg mt-10 shadow-md object-cover transition-transform duration-300"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--border)',
              boxShadow: 'var(--shadow)'
            }}
          />
        </section>
        
        <section className="w-full pt-16">
          <h2 className="text-3xl font-bold mb-16 pl-1 border-l-4 border-blue-500" style={{ color: 'var(--text-h)' }}>
            ការចូលរួមរបស់កុមារៗក្នុងការអភិវឌ្ឍន៍ប្រកបដោយចីរភាព
          </h2>
          <img
            src={sdgKid}
            alt="SDGs Kids"
            className="w-full h-auto rounded-lg mt-10 shadow-md object-cover transition-transform duration-300"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--border)',
              boxShadow: 'var(--shadow)'
            }}
          />
        </section>
      </div>
    </div>
  );

  function renderSidebarContent() {
    return (
      <>
        {/* Accordion Group 1: Categories */}
        <div className="pb-2" style={{ borderBottom: '1px solid var(--border)' }}>
          <button 
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-widest py-2 transition-colors bg-transparent border-none cursor-pointer"
            style={{ color: 'var(--text-muted)' }}
          >
            <span>ប្រភេទសម្ភារៈ</span>
            <span className={`text-[10px] transform transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>
          
          {isCategoryOpen && (
            <ul className="mt-2 space-y-1 pl-1 m-0 p-0 list-none text-left">
              <li 
                className="flex items-center justify-between font-bold text-xs px-3 py-2 rounded-xl cursor-pointer transition-colors"
                style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}
              >
                <span>សម្ភារៈទាំងអស់</span>
                <span 
                  className="text-[10px] px-1.5 py-0.5 rounded-md"
                  style={{ background: 'var(--code-bg)', color: 'var(--accent)' }}
                >
                  75
                </span>
              </li>
              {['សម្ភារៈសិក្សា', 'សម្ភារៈកុមារ', 'សម្ភារៈនារី', 'សម្ភារៈអេឡិចត្រូនិច'].map((item, idx) => (
                <li 
                  key={idx} 
                  className="flex items-center justify-between text-xs px-3 py-2 rounded-xl cursor-pointer transition-all hover:opacity-80"
                  style={{ color: 'var(--text)' }}
                >
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
            className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-widest py-2 transition-colors bg-transparent border-none cursor-pointer"
            style={{ color: 'var(--text-muted)' }}
          >
            <span>ស្ថានភាពការប្រើប្រាស់</span>
            <span className={`text-[10px] transform transition-transform duration-200 ${isBrandOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>
          
          {isBrandOpen && (
            <ul className="mt-2 space-y-1 pl-1 text-xs m-0 p-0 list-none text-left" style={{ color: 'var(--text)' }}>
              {['ប្រើប្រាស់ឥតគិតថ្លៃ', 'ត្រូវការការអនុញ្ញាត'].map((label, idx) => (
                <li key={idx} className="flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer transition-colors hover:opacity-80">
                  <input 
                    type="checkbox" 
                    id={`label-${idx}`} 
                    className="rounded border-slate-300 focus:ring-0 cursor-pointer"
                    style={{ accentColor: 'var(--accent)' }}
                  />
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