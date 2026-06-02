import React from 'react';

function StatCard({ data = {} }) {
  // ចាប់យកទិន្នន័យចាស់ និងទិន្នន័យថ្មីៗសម្រាប់ការបរិច្ចាគ (Donation Data)
  const title = data.title || "មិនមានចំណងជើង";
  const imageSrc = data.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop";
  const rating = data.rating || 4;
  
  // បន្ថែមដើម្បីទាញទិន្នន័យថ្មីៗមកបង្ហាញលើ Card ផ្ទាល់
  const description = data.description || "មិនមានការពិពណ៌នាឡើយ។";
  const targetRecipient = data.target || "អ្នកដែលត្រូវការប្រើប្រាស់ចាំបាច់";
  const quantity = data.quantity || "១ គ្រឿង";
  const quality = data.quality || "មិនទាន់បញ្ជាក់";
  const statusBadge = data.status || "កំពុងស្វែងរកម្ចាស់";

  return (
    <div 
      className="w-full max-w-[390px] rounded-[32px] p-[16px] overflow-hidden border transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-[1.03] mx-auto flex flex-col justify-between"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--card-border)',
        boxShadow: 'var(--shadow)'
      }}
    >
      
      {/* ១. ផ្នែករូបភាពខាងលើ (Top Image Canvas Container) */}
      <div className="w-full h-[260px] sm:h-[280px] rounded-[24px] overflow-hidden relative bg-neutral-100 dark:bg-neutral-800 flex-shrink-0">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        
        {/* បង្ហាញ Status Badge ដោយប្រើប្រាស់ CSS Variables ត្រឹមត្រូវ */}
        <div 
          className="absolute top-3 left-3 backdrop-blur-md border px-3 py-1 rounded-full shadow-sm"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)',
            opacity: 0.9
          }}
        >
          <span className="text-[11px] font-bold tracking-wide" style={{ color: 'var(--text)' }}>
            {statusBadge}
          </span>
        </div>
      </div>

      {/* ២. ផ្នែកព័ត៌មានលម្អិត និងប៊ូតុងបញ្ជា (Card Info & Actions) */}
      <div className="mt-5 px-1 pb-1 text-left flex-1 flex flex-col justify-between">
        
        <div>
          {/* ចំណងជើងផលិតផល */}
          <h3 
            className="text-[20px] sm:text-[22px] font-bold tracking-[0.2px] truncate transition-colors duration-300 mb-2"
            style={{ color: 'var(--card-text-h)' }}
          >
            {title}
          </h3>

          {/* បង្ហាញការពិពណ៌នា (Description) តាមរយៈ var(--text-muted) */}
          <p 
            className="text-[13px] leading-relaxed line-clamp-2 mb-4"
            style={{ color: 'var(--text-muted)' }}
          >
            {description}
          </p>

          {/* បន្ទាត់ខណ្ឌស្តើងៗដែលស៊ីជាមួយពណ៌ Border សកល */}
          <div className="w-full h-[1px]" style={{ backgroundColor: 'var(--border)' }} />

          {/* បង្ហាញព័ត៌មាន ចំនួន គុណភាព និងអ្នកដែលចង់ចែកជូន (Meta Details) */}
          <div className="space-y-3 my-4 text-[13px]">
            <div className="flex items-start gap-2">
              <span className="font-bold whitespace-nowrap" style={{ color: 'var(--text-h)' }}>ចង់ចែកជូនដល់:</span>
              <span style={{ color: 'var(--text-muted)' }}>{targetRecipient}</span>
            </div>

            {/* កែប្រែពណ៌ផ្ទៃខាងក្រោយ និងអត្ថបទឱ្យស៊ីគ្នាជាលក្ខណៈ Clean UI */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-1.5">
                <span className="font-bold" style={{ color: 'var(--text-h)' }}>ចំនួន:</span>
                <span 
                  className="px-2.5 py-1 rounded-lg text-[12px] font-semibold"
                  style={{ backgroundColor: 'var(--code-bg)', color: 'var(--text)' }}
                >
                  {quantity}
                </span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <span className="font-bold" style={{ color: 'var(--text-h)' }}>គុណភាព:</span>
                <span 
                  className="px-2.5 py-1 rounded-lg text-[12px] font-semibold"
                  style={{ backgroundColor: 'var(--code-bg)', color: 'var(--text)' }}
                >
                  {quality}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ៣. ជួរផ្កាយ និងប៊ូតុងសកម្មភាពនៅខាងក្រោមបង្អស់ */}
        <div className="flex justify-between items-center mt-3 gap-2 pt-2">
          
          {/* ផ្កាយវាយតម្លៃ (Star Ratings) */}
          <div className="flex gap-0.5 items-center flex-shrink-0">
            {[...Array(5)].map((_, index) => (
              <svg 
                key={index}
                className={`w-4 h-4 sm:w-5 sm:h-5 ${index < rating ? 'text-amber-400' : 'text-gray-300 opacity-40'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* ប៊ូតុងដាក់សំណើ */}
          <button 
            className="px-4 sm:px-6 py-[8px] sm:py-[10px] rounded-full text-xs sm:text-[14px] font-bold transition-all duration-300 hover:opacity-90 active:scale-95 whitespace-nowrap cursor-pointer border-none text-white dark:text-[#0A2353]"
            style={{
              backgroundColor: 'var(--accent)'
            }}
          >
            ដាក់សំណើ
          </button>

        </div>
      </div>

    </div>
  );
}

export default StatCard;