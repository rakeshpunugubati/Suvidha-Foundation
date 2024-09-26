import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin , faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
function Header() {
    const[visible ,setVisible] = useState(false);
    const toggleMenu = () => {
        setVisible(!visible); 
      };
    
      const closeMenu = () => {
        setVisible(false); 
      };
  return (
    < >
        {/* Top section of Navbar for Desktop */}
        <div className='navbartop w-full min-h-10 text-white flex flex-wrap items-center gap-2 border-solid border-b-2 border-yellow-500 bg-gray-800'>
            <a href="mailto:info@suvidhafoundationedutech.org" className=' text-center text-xs ml-16 '>info@suvidhafoundationedutech.org</a>
            <a href="https://www.linkedin.com/company/suvidha-foundation/" target='_blank' className=' hover:text-blue-700' >
                <FontAwesomeIcon icon={faLinkedin}  className=' size-5 hover:size-4 ' />
            </a>
            <a href="https://www.instagram.com/suvidha_mahila_mandal/" target='_blank' className=' hover:text-pink-500' >
                <FontAwesomeIcon icon={faInstagram} className=' size-5 hover:size-4'  />
            </a>
            <a href="https://www.facebook.com/suvidhamahilamandal/" target='_blank' className=' hover:text-blue-500' >
                <FontAwesomeIcon icon={faFacebook}  className=' size-5 hover:size-4' />
            </a>
        </div> 

        {/* Navbar Section */}
        <nav className='font-serif header-container w-full flex sm:flex-wrap justify-around items-center bg-gray-800 border-solid border-b-2 border-yellow-500'>
            <div >
              <NavLink>
                <img
                  src="Images/SuvidhaLogo.jpg"
                  alt="Suvidha Foundataion"
                  className='logo bg-gray-800'
                />
              </NavLink>
            </div>

            
            <FontAwesomeIcon
              icon={visible ? faTimes : faBars} // Change icon based on the visibility state
              onClick={toggleMenu} // Toggle menu visibility
              className='text-4xl text-gray-500 w-14 sm:hidden cursor-pointer' // Only visible on small screens
            />

            {/* Navbar menu */}
            <ul
              className={`navlinks sm:static text-white p-4 sm:flex flex-wrap items-center md:gap-10 gap-7 transition-all duration-300 ease-in-out ${visible ? 'block' : 'hidden'} sm:block`}
            >
              <li className='sm:hover:scale-125'>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                  onClick={closeMenu} // Close menu on click
                >
                  Home
                </NavLink>
              </li>
              <li className='sm:hover:scale-125'>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li className='sm:hover:scale-125'>
                <NavLink
                  to="/events"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                  onClick={closeMenu}
                >
                  Events
                </NavLink>
              </li>
              <li className='sm:hover:scale-125'>
                <NavLink
                  to="/internships"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                  onClick={closeMenu}
                >
                  Internships
                </NavLink>
              </li>
              <li className='sm:hover:scale-125'>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                  onClick={closeMenu}
                >
                  Contact Us
                </NavLink>
              </li>
              <li className='heart-beat text-pink-900 bg-yellow-500 rounded-md h-10 w-28 flex items-center justify-center'>
                <NavLink
                  to="/supportus"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                  onClick={closeMenu}
                >
                  Support Us
                </NavLink>
              </li>
            </ul>
        </nav>

    </>
  )
}

export default Header