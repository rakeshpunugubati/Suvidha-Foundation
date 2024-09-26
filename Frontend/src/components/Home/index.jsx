import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCity, faBook, faBowlFood , faTree} from '@fortawesome/free-solid-svg-icons';
import RunningNumbers from './RunningNumbers';
import Testimonials from './Testimonials';
import ImageSlider from './ImageSlider';
import { NavLink } from 'react-router-dom';
import './styles.css'
function Home() {
  return (
    <div className='font-serif w-full flex flex-wrap gap-8 justify-center text-gray-800 bg-gray-100'>
      {/* Responsive Banner Image Section */}
      <ImageSlider />

      {/* About Suvidha Foundation Section */}
      <section className='relative  md:p-8 md:w-3/4 flex flex-wrap justify-center border-b-2 border-solid border-yellow-500'>
        <div className='w-full '>
            <h1 className='text-center text-xl sm:text-4xl font-bold md:mb-4'>
              About Suvidha Foundation
            </h1>
            <p className='text-xs sm:text-lg text-start p-6 '>
            Suvidha Mahila Mandal, established in 1995, is a non-profit dedicated to child education, 
            womens empowerment, and animal welfare. Through its initiatives, including internships, 
            mentorships, and volunteer programs, the foundation strives to create a brighter and more equitable future
            </p>
        </div>
        <div className='absolute bottom-0 right-0 p-2 flex gap-2 items-center '>
            <p className='text-xs mb-2'> know more </p>
            <NavLink to={'/about'}>
              <FontAwesomeIcon icon={faArrowRight} className=' size-5 sm:size-7  text-black hover:scale-125'/>
            </NavLink> 
        </div>
          
      </section>

      {/* Internship and Mentorship Programs Section */}
      <section className=' sm:w-5/6 pb-8  border-b-2 border-yellow-500 '>
        <div className='internshipbg w-full'>
          <div className=' w-full p-2 sm:p-14 bg-black bg-opacity-50'>
            <h1 className='text-xl sm:text-4xl font-bold mb-4 sm:mb-12 text-center'>
              Strong Internship and Mentorship Programs
            </h1>
            <p className='text-xs text-start sm:text-lg  sm:mt-4'>
              Suvidha Foundation offers a variety of internship and mentorship programs designed to 
              empower students by providing them with hands-on experience and professional guidance. 
              These programs focus on enhancing the skills needed for future employment, with 
              opportunities in fields like education, technology, and social work. Mentors offer 
              personalized support to help students develop both academically and professionally.
            </p>
            <ul className=' text-start text-xs sm:text-lg list-disc list-inside mt-4'>
              <li>Internships in education, social services, and administration.</li>
              <li>Mentorship with experienced professionals across various industries.</li>
              <li>Certificate of completion and recommendation letter for top performers.</li>
            </ul>

            <button className='text-xs  sm:text-lg p-2 mt-4 sm:mt-8 bg-black bg-opacity-85 hover:scale-110  border-2 border-yellow-500'>
              <NavLink to={'/internships'} >Apply Now</NavLink>
            </button>
          </div>
          </div>
      </section>

      {/* Events Section */}
      <section className=" sm:w-5/6 pb-8 flex flex-wrap justify-center border-b-2 border-yellow-500">
        <h1 className="  text-xl sm:text-4xl font-bold pb-2 sm:p-4 ">Events</h1>
        <div className="w-full flex flex-wrap justify-center gap-10 ">
          <div className="w-full md:w-2/5 bg-slate-200 ">
            <img
              src="Images/childsupport.jpg"
              alt="Child Support"
              loading='lazy'
              className=" w-full h-[250px] max-250px sm:h-[400px] sm:max-h-[400px] object-cover  hover:scale-105 duration-1000 hover:duration-1000"
            />
            <h2 className="text-center mt-2 text-sm sm:text-xl font-semibold">Child Support</h2>
            <p className="text-start py-4 text-xs sm:text-lg">We empower underprivileged children by providing school supplies, textbooks, and access to quality education. Our mentorship programs help them build confidence and essential life skills.</p>
          </div>
          <div className="md:w-2/5  bg-slate-200 ">
            <img
              src="Images/treeplantation.jpg"
              alt="Tree Plantation"
              loading='lazy'
              className="w-full h-[250px] max-250px sm:h-[400px] sm:max-h-[400px]  object-cover hover:scale-105 duration-1000 hover:duration-1000"
            />
            <h2 className="text-center mt-2 text-sm sm:text-xl font-semibold">Tree Plantation</h2>
            <p className="text-start text-xs p-4 sm:text-lg ">We organize tree-planting events to reduce carbon emissions and restore natural habitats. Our initiative supports a greener planet while educating communities about environmental stewardship.</p>
          </div>
        </div>
        <button className='text-xs  sm:text-lg p-2 mt-4 sm:mt-8 bg-black bg-opacity-85 hover:scale-110  border-2 border-yellow-500 text-white'>
          <NavLink to={'/events'} >More Events</NavLink>
        </button>
      </section>
      {/* Donotion counts */}
      <section className=' sm:w-5/6 pb-8  border-b-2 border-yellow-500'>
        <div className='bgcount '>
          <div className=' bg-black bg-opacity-50 pt-20 pb-20 text-white text-center  flex flex-wrap justify-around items-center'>
            <div className=' flex items-center '>
              <div>
                <FontAwesomeIcon icon={faCity} className='text-5xl sm:text-7xl p-2 sm:p-5'/>
                <h2 >Located</h2>
              </div>
              <RunningNumbers max={15} parent={'located'}/>
            </div>
            <div className='flex items-center'>
              <div>
                <FontAwesomeIcon icon={faTree} className='text-5xl sm:text-7xl p-2 sm:p-5'/>
                <h2>Trees Planted</h2>
              </div>
              <RunningNumbers max={10}/>
            </div>
            <div className='flex items-center'>
              <div>
                <FontAwesomeIcon icon={faBowlFood} className='text-5xl sm:text-7xl p-2 sm:p-5'/>
                <h2>Meals Provided</h2>
              </div>
              <RunningNumbers max={5}/>
            </div>
            <div className='flex items-center'>
              <div>
                <FontAwesomeIcon icon={faBook} className='text-5xl sm:text-7xl p-2 sm:p-5' />
                <h2>Books Donated</h2>
              </div>
              <RunningNumbers max={4} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='testimonialbg w-full sm:mb-8 sm:w-11/12  md:w-5/6 text-center'>
        <div className='bg-black w-full  bg-opacity-70'>
          <h1 className='text-lg sm:text-4xl  sm:p-4 font-bold mb-2 sm:mb-4'>
            Testimonials
          </h1>
          <p className='text-xs sm:text-lg px-4 sm:px-6 text-start'>
            Hear from some of the students, interns, and volunteers whose lives have been positively 
            impacted by Suvidha Foundation.
          </p>
          <Testimonials />
          </div>
      </section>
    </div>
  );
}

export default Home;
