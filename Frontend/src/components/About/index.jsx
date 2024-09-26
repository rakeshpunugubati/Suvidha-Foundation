import React from 'react';
import { causes, team } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './styles.css'
function About() {
  return (
  <div>
    {/* Contact Us Banner Section */}
    <div className='aboutusbg h-60 sm:h-96 flex justify-center items-end'>
        <h1 className='text-white  text-4xl sm:text-6xl pb-10 font-bold'>About Us</h1>
    </div>
    <div className="about-page px-4 sm:px-28 py-7 sm:py-10  bg-gray-100">
      
      {/* About Section */}
      <section className="text-center mb-10 sm:mb-16">
        <h1 className="text-xl sm:text-5xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-start text-xs sm:text-lg text-gray-700 max-w-3xl mx-auto">
        Suvidha Mahila Mandal, founded on September 8, 1995, is a non-profit
         organization dedicated to providing education to financially disadvantaged communities, 
         empowering young minds to build a brighter future. The organization offers 
         opportunities for student internships, mentorship programs, and volunteering, 
         all with the goal of fostering innovative, lasting education. Through these initiatives, 
         Suvidha Mahila Mandal strives to equip students with the skills and 
         knowledge they need to navigate an ever-changing future.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mb-10 sm:mb-16">
        <div className="p-6 sm:p-8 bg-yellow-100 shadow-md rounded-lg">
          <h2 className="text-lg sm:text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-xs sm:text-lg text-gray-700">
            Our mission is to empower vulnerable communities by providing 
            access to resources that foster sustainability, improve quality of life, 
            and uplift the lives of individuals through education, healthcare, and social awareness.
          </p>
        </div>
        <div className="p-6 sm:p-8 bg-green-100 shadow-md rounded-lg">
          <h2 className=" text-lg sm:text-3xl font-semibold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-xs sm:text-lg text-gray-700">
            We envision a world where everyone has equal opportunities to succeed, 
            where children have access to education, and where communities are aware, 
            empowered, and healthy working together for a sustainable future.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="mb-10 sm:mb-16">
        <h2 className=" text-xl sm:text-4xl font-bold text-gray-900 text-center mb-12">What We Do?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {causes.map((cause, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-yellow-50 transition duration-300">
              <h3 className={`text-lg sm:text-2xl font-bold ${cause.color} mb-4`}>{cause.title}</h3>
              <p className="text-xs sm:text-lg text-gray-700">{cause.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section>
        <h2 className="text-xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div key={index} className= "relative bg-white p-6 rounded-lg shadow-md text-center ">
              <a href={member.linkedinUrl} target='_blank' className='absolute right-3 hover:text-blue-700' >
                <FontAwesomeIcon icon={faLinkedin}  className=' size-5 hover:size-4 ' />
              </a>
              <img
                src={member.img}
                alt={member.name}
                loading='lazy'
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-xs sm:text-lg text-gray-600">{member.role}</p>
              
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
  );
};

export default About;
