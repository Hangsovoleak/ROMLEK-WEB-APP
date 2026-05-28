import React from 'react';

function StatCard({ data = {} }) {
  // Fallback to safe defaults if fields are empty
  const title = data.title || "មិនមានចំណងជើង";
  const imageSrc = data.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop";
  const rating = data.rating || 4;

  return (
    /* FIXED: Changed 'w-[400px]' to 'w-full max-w-[390px]' 
      This ensures the card is completely responsive on mobile viewports while preserving desktop sizing!
    */
    <div 
      className="w-full max-w-[390px] rounded-[32px] p-[16px] overflow-hidden border transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-[1.03] mx-auto"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--card-border)',
        boxShadow: 'var(--shadow)'
      }}
    >
      
      {/* Top Image Canvas Container */}
      <div className="w-full h-[300px] sm:h-[320px] rounded-[24px] overflow-hidden relative bg-neutral-100 dark:bg-neutral-800">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Card Info & Actions Footer Section */}
      <div className="mt-5 sm:mt-6 px-1 sm:px-2 pb-1 text-left">
        
        {/* Product Title Line */}
        <h3 
          className="text-[22px] sm:text-[24px] font-bold tracking-[0.2px] truncate transition-colors duration-300 mb-2"
          style={{ color: 'var(--card-text-h)' }}
        >
          {title}
        </h3>
        
        {/* Bottom Interactive Row: Stars Left, Action Button Right */}
        <div className="flex justify-between items-center mt-4 gap-2">
          
          {/* Star Ratings Component */}
          <div className="flex gap-0.5 sm:flex-row items-center flex-shrink-0">
            {[...Array(5)].map((_, index) => (
              <svg 
                key={index}
                className={`w-5 h-5 sm:w-6 sm:h-6 ${index < rating ? 'text-amber-400' : 'text-gray-300 opacity-40'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Clean Rounded Action CTA Button */}
          <button 
            className="px-4 sm:px-6 py-[8px] sm:py-[10px] rounded-full text-xs sm:text-[15px] font-bold transition-all duration-300 hover:opacity-90 active:scale-95 whitespace-nowrap cursor-pointer border-none"
            style={{
              backgroundColor: 'var(--bg)', 
              color: 'var(--text-h)'
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