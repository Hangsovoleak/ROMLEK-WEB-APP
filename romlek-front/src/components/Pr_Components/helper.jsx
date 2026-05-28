import React from 'react';
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";

const Helper = () => {
  const cardData = [
    { 
      icon: icon1, 
      title: "សន្សំសំចៃថវិកា",
    },
    { 
      icon: icon2, 
      title: "សន្សំពេលវេលា", 
    },
    { 
      icon: icon3, 
      title: "កាត់បន្ថយការបំពុល", 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 w-full mx-auto mt-10 sm:px-0">
      {cardData.map((item, index) => (
        <div 
          key={index} 
          className="group text-center p-6 rounded-2xl shadow-lg border-2 border-transparent transition-all duration-300 flex flex-col items-center justify-center min-h-[220px] hover:scale-105 cursor-pointer"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)',
            boxShadow: 'var(--shadow)'
        }}
        >  
          {/* Icon Wrapper Frame */}
          <div className="mb-4 p-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-32 h-32">
            {/* FIXED: Removed 'filter brightness-0 invert' so original colors show perfectly */}
            <img 
              src={item.icon} 
              alt={item.title} 
              className="w-full h-full object-contain" 
            />
          </div>

          {/* Title Element */}
          <h3 
            className="text-[22px] sm:text-[24px] font-bold tracking-[0.2px] truncate transition-colors duration-300 mb-2"
            style={{ color: 'var(--card-text-h)' }}
            >
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Helper;