import React  from 'react';
import './styles.css';
import Form from '../Form/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin , faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Contact() {
  
  return (
    <div className='bg-gray-100'>
      {/* Contact Us Banner Section */}
      <div className='contactusbg w-full h-60 sm:h-96 flex justify-center items-end'>
        <h1 className='text-white text-4xl sm:text-6xl pb-10 font-bold'>Contact Us</h1>
      </div>

      {/* Contact Information and Form Section */}
      <div className='py-8 sm:py-12 px-2 sm:px-4 font-serif'>
        <div className='sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-10'>
          {/* Contact Information */}
          <div>
            <h2 className='text-xl sm:text-2xl font-bold mb-4'>Get in Touch</h2>
            <p className='mb-4 text-sm sm:text-lg'>Feel free to reach out to us by phone, email, or through our social media channels.</p>
            <div className='space-y-4'>
              <div  className='flex gap-x-2 sm:gap-x-4 '>
                <a href="https://maps.app.goo.gl/j6HpTvYR84jWTZtH8" target='_blank'><FontAwesomeIcon icon={faLocationDot} className='text-lg sm:text-xl text-red-600'/></a>
                <p className='w-3/4 text-xs sm:text-lg'>Suvidha Foundation, Ward No. 4,
                    Sant Nagar, Annamod, Near Water Tank, Khaperkheda,
                    Nagpur, Maharashtra 441102</p>
              </div>

              <div className='flex gap-x-2 sm:gap-x-4 '>
                <a href="" > <FontAwesomeIcon icon={faLocationDot} className='text-lg sm:text-xl text-red-600' /> </a>
                
                <p className='w-3/4 text-xs sm:text-lg'>Vazhra Nirman Pushpak, C Block 701,
                500090, Hyderabad</p>
              </div>

              <a href="tel:+917020044091" className='flex gap-x-2 sm:gap-x-4 items-center'><FontAwesomeIcon icon={faPhone}  className='text-lg sm:text-xl text-blue-700' /> <p>7020044091</p> </a>

              <a href="mailto:info@suvidhafoundationedutech.org" className='flex gap-x-2 sm:gap-x-4 items-center'><FontAwesomeIcon icon={faEnvelope}  className='text-lg sm:text-xl text-red-600'/> <p>info@suvidhafoundationedutech.org</p> </a>
            </div>
            
            {/* Social Media Links */}
            <h2 className='text-lg sm:text-2xl font-bold mt-8 mb-4'>Follow Us On</h2>
            <div className="mt-2  flex gap-5">
                <a href="https://www.linkedin.com/company/suvidha-foundation/" target='_blank' className='w-4 sm:w-6 text-blue-700' >
                    <FontAwesomeIcon icon={faLinkedin} className='text-2xl sm:text-3xl sm:hover:size-8 ' />
                </a>
                <a href="https://www.instagram.com/suvidha_mahila_mandal/" target='_blank' className='w-6 text-pink-500' >
                    <FontAwesomeIcon icon={faInstagram} className='text-2xl sm:text-3xl sm:hover:size-8 '  />
                </a>
                <a href="https://www.facebook.com/suvidhamahilamandal/" target='_blank' className='w-6 text-blue-500' >
                    <FontAwesomeIcon icon={faFacebook} className='text-2xl sm:text-3xl sm:hover:size-8 ' />
                </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className='text-xl sm:text-2xl text-center font-bold mb-4'>Send Us a Message</h2>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
