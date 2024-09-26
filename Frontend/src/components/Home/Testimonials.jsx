import React, { useEffect, useState, useRef } from 'react';
import { testimonialsData } from './TestimonialData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Testimonials() {
    const [display, setDisplay] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);
    const sectionRef = useRef(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 641);
        };

        window.addEventListener('resize', handleResize);

        const startInterval = () => {
            intervalRef.current = setInterval(() => {
                setDisplay((prevDisplay) => ((prevDisplay + 1) % testimonialsData.length));
            }, 5000);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startInterval();
                } else {
                    clearInterval(intervalRef.current);
                }
            });
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            clearInterval(intervalRef.current);
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
        };
    }, [testimonialsData]);

    return (
        <div ref={sectionRef} className='flex justify-center items-center p-2 sm:p-4 md:p-8 lg:p-8'>
            <button onClick={() => setDisplay((prevDisplay) => (prevDisplay - 1 + testimonialsData.length) % testimonialsData.length)}>
                <FontAwesomeIcon icon={faAngleLeft} size='xl' className='w-6 text-white bg-black opacity-50 rounded-full' />
            </button>
            <div className='flex  justify-center  lg:gap-5'>
                {isSmallScreen ? (
                    <div key={testimonialsData[display].id} className='w-44 h-72 flex flex-wrap justify-center  '>
                        <img src={testimonialsData[display].imgUrl} alt={testimonialsData[display].name} className='m-4 h-28 w-28 border-2 rounded-full border-yellow-500' />
                        <h1 className='w-full text-sm h-7 font-semibold'>{testimonialsData[display].name}</h1>
                        <p className='w-full text-xs h-36 overflow-y-hidden'>{testimonialsData[display].message}</p>
                    </div>
                ) : (
                    [...Array(3)].map((_, index) => {
                        const currentIndex = (display + index) % testimonialsData.length;
                        const tenant = testimonialsData[currentIndex];
                        return (
                            <div key={tenant.id} className=' md:min-w-52 md:max-w-52 sm:h-80 flex flex-wrap justify-center border-2 border-yellow-500'>
                                <img src={tenant.imgUrl} alt={tenant.name} className='m-4 h-28 w-28 border-2 rounded-full border-yellow-500' />
                                <h1 className='w-full  sm:text-lg  sm:h-7 font-semibold'>{tenant.name}</h1>
                                <p className='w-full  sm:text-sm  sm:h-36 overflow-y-hidden'>{tenant.message}</p>
                            </div>
                        );
                    })
                )}
            </div>
            <button onClick={() => setDisplay((prevDisplay) => (prevDisplay + 1) % testimonialsData.length)}>
                <FontAwesomeIcon icon={faAngleRight} size='xl' className='w-6 text-white bg-black opacity-50 rounded-full' />
            </button>
        </div>
    );
}

export default Testimonials;
