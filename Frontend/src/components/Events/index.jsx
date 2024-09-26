import React from 'react';
import './styles.css';
import { events } from './data';

function Events() {
  return (
    <div className='bg-gray-100'>
      {/* Events Background */}
      <div className='eventsbg w-full h-60 sm:h-96 flex justify-center items-end'>
        <h1 className='text-white text-4xl sm:text-6xl pb-8 sm:pb-10 font-bold'>Events</h1>
      </div>

      {/* Events Grid */}
      <h1 className='text-center mt-4  sm:p-8  text-xl sm:text-5xl text-gray-600 font-bold'>Join Us in Making a Difference</h1>
      <div className='sm:max-w-6xl sm:mx-auto py-4 sm:py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10'>
          {events.map((event) => (
            <div 
              key={event.id} 
              className='p-8 bg-gradient-to-r from-yellow-300 to-yellow-600 shadow-lg rounded-lg border-2 border-yellow-400 overflow-hidden transition-transform duration-300 transform hover:scale-105'>
              <img
                src={event.imageUrl}
                alt={event.title}
                loading='lazy'
                className='w-full h-48 sm:h-72 object-cover transition-transform duration-300 transform hover:scale-110'
              />
              <div className='p-x-6 pt-6 '>
                <h2 className='text-lg sm:text-3xl font-bold mb-2 '>{event.title}</h2>
                <p className='text-xs sm:text-lg'>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
