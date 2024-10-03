import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin , faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faLocationDot,faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    <footer className="font-serif bg-gray-800 text-white py-4 sm:py-8 px-1 sm:px-2">
      <div className="p-5  sm:flex  flex-wrap justify-around gap-y-6">
        
        {/* Office Headquarters */}
        <div className='mt-5'>
          <h2 className="  text-sm sm:text-lg font-bold text-yellow-400">Office Headquarters</h2>
          <div  className='mt-2 flex gap-x-2 '>
            <a href="https://maps.app.goo.gl/j6HpTvYR84jWTZtH8" target='_blank'><FontAwesomeIcon icon={faLocationDot} size='sm' color='red' /></a>
            <p className='  text-xs sm:text-lg'>Suvidha Foundation, Ward No. 4,
                Sant Nagar,<br /> Annamod, Near Water Tank, Khaperkheda,
                Nagpur,<br /> Maharashtra 441102</p>
          </div>

          <div className='flex gap-x-2 my-4'>
            <a href="" > <FontAwesomeIcon icon={faLocationDot} size='sm' color='red' /> </a>
            
            <p className='text-xs sm:text-lg' >Vazhra Nirman Pushpak, C Block 701,<br />
            Hydedarabad, Telangan, 500090.</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className='mt-5'>
          <h2 className=" text-xs sm:text-lg font-bold text-yellow-400">Quick Links</h2>
          <ul className="mt-2">
            <li><NavLink to={'/about'} className=" text-xs sm:text-lg hover:underline">About Us</NavLink></li>
            <li><NavLink to={'/donate'} className=" text-xs sm:text-lg hover:underline">Donate</NavLink></li>
            <li><NavLink to={'/internships'} className=" text-xs sm:text-lg hover:underline">Internships</NavLink></li>
            <li><NavLink to={'/contact'} className=" text-xs sm:text-lg hover:underline">Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Licenses Column */}
        <div className='mt-4'>
          <h2 className="text-xs sm:text-lg font-bold text-yellow-400">Important Links</h2>
          <ul className="mt-2">
            <li><a href="/Images/80G_APROVAL.pdf" target="_blank" className='text-xs sm:text-lg hover:underline'>80G Certificate</a></li>
            <li><a href="/Images/12A_APPROVAL.pdf" target="_blank" className='text-xs sm:text-lg hover:underline'>12A Certificate</a></li>
            <li><a href="/Images/CSR.pdf" target="_blank" className='text-xs sm:text-lg hover:underline'>CSR Certificate</a></li>
            <li><a href="/Images/suvidha_pan_card.pdf" target="_blank" className='text-xs sm:text-lg hover:underline'>Suvidha Pan Card</a></li>
          </ul>
        </div>

        {/* Reach Us Section */}
        <div className='mt-4'>
            <h2 className="text-sm sm:text-lg font-bold text-yellow-400">Reach Us At</h2>
            <a href="mailto:info@suvidhafoundationedutech.org" className='my-2 flex gap-x-4 items-center'>
              <FontAwesomeIcon icon={faEnvelope} size='sm' /> 
              <p className='text-xs sm:text-lg'>info@suvidhafoundationedutech.org</p>
            </a>
            <a href="tel:+917020044091" className='my-2 flex gap-x-4 items-center'>
              <FontAwesomeIcon icon={faPhone} size='sm'  /> 
              <p className='text-xs sm:text-lg'>7020044091</p> 
            </a>
            <div className="my-2 min-h-10 flex gap-2">
                <a href="https://www.linkedin.com/company/suvidha-foundation/" target='_blank' className='w-6' >
                    <FontAwesomeIcon icon={faLinkedin}  className=' size-5  hover:size-6 ' />
                </a>
                <a href="https://www.instagram.com/suvidha_mahila_mandal/" target='_blank' className='w-6' >
                    <FontAwesomeIcon icon={faInstagram} className=' size-5 hover:size-6'  />
                </a>
                <a href="https://www.facebook.com/suvidhamahilamandal/" target='_blank' className='w-6' >
                    <FontAwesomeIcon icon={faFacebook}  className=' size-5 hover:size-6' />
                </a>
            </div>
        </div>

        
      </div>

      {/* Copyright Section */}
      <div className="text-center text-xs sm:text-lg  sm:mt-8">
        <p>© 2024 Suvidha Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
