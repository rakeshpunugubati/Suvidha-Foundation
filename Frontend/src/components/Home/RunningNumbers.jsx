import React, { useState, useEffect, useRef } from 'react';

export default function RunningNumbers({ max , parent='' }) {
  const [count, setCount] = useState(1);  
  const ref = useRef(null);               

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setCount(prevCount => {
              if (prevCount < max) {
                return prevCount + 1;     
              } else {
                clearInterval(interval);  
                return max;               
              }
            });
          }, 100); 
        }
      },
      {
        threshold: 1 
      }
    );
    const currentElement = ref.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [max]);

  return (
    <div ref={ref} className="text-2xl sm:text-4xl font-bold text-center">
      {count < max ? count : `${max}${parent === 'located'? '':'L'}+`} 
    </div>
  );
}

