import React, { useEffect, useState, useRef } from 'react';
// import './ImageSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
const images = [
    { src: 'Images/mpg6.jpg', description: '' },
  { src: 'Images/mpg1.jpg', description: 'Empowering Women: Building Stronger Communities One Step at a Time' },
  { src: 'Images/mpg2.jpg', description: 'Celebrating Freedom: Independence Day with a Purpose' },
  { src: 'Images/mpg3.jpg', description: '' },
  { src: 'Images/mpg4.jpg', description: 'Feeding Hope: Together, We Can End Hunger' },
  { src: 'Images/mpg5.jpg', description: 'Greening Our Future: Join Us in Planting Trees for a Sustainable Tomorrow' },
  { src: 'Images/mpg7.jpg', description: 'Bringing Smiles: Spreading Joy Through Charity' }
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // To track visibility
  const sliderRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  // Handle automatic slide changing
  useEffect(() => {
    let interval;
    if (isVisible) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isVisible]);

  // Handle visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  // Navigate to the previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='w-full' ref={sliderRef}>
        <div className='relative h-64 sm:h-80 md:h-96 lg:h-[80vh] sm:mt-5 sm:mx-16 lg:mx-32 text-white'>
          <div className='absolute w-full px-2 h-full flex justify-between items-center bg-black bg-opacity-30'>
            <button className='left-arrow' onClick={goToPrevious}>
              <FontAwesomeIcon icon={faAngleLeft} size='xl' className='w-8 bg-black opacity-50 rounded-full hover:scale-110' />
            </button>
            <p className='text-sm sm:text-lg md:text-2xl w-3/5 text-center shadow-red-900 font-bold'>
              {images[currentIndex].description}
            </p>
            <button className='right-arrow' onClick={goToNext}>
              <FontAwesomeIcon icon={faAngleRight} size='xl' className='w-8 bg-black opacity-50 rounded-full hover:scale-110' />
            </button>
          </div>
          <img src={images[currentIndex].src} alt={`Slide ${currentIndex + 1}`} className='w-full h-full object-cover overflow-hidden' />

          {/* Video Button */}
          <button
            onClick={() => setShowVideo(true)}
            className="absolute bottom-5 right-5 bg-red-600 text-white text-xs py-1 px-1 lg:py-2 lg:px-4 rounded-lg  sm:text-base"
          >
            Watch Video
          </button>

          {showVideo && (
            <div className="z-10 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
              <div className="relative flex justify-center items-center rounded-lg overflow-hidden shadow-lg">
                <video
                  className="w-full sm:w-96 md:w-[640px] lg:w-[800px]" // Adjust video width for different screens
                  height="360"
                  controls
                  loading="lazy"
                  autoPlay
                >
                  <source src="Images/Suvidha_Foundation_Videok.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
                >
                  &#x2715; {/* Close icon */}
                </button>
              </div>
            </div>
          )}
        </div>
    </div>

);
}

export default ImageSlider;
