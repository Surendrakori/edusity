import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom'; // Import from react-router-dom for navigation
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Clean up
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt='logo' className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><ScrollLink to='hero' smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to='programs' smooth={true} offset={-260} duration={500}>Programs</ScrollLink></li>
        <li><ScrollLink to='about' smooth={true} offset={-150} duration={500}>About Us</ScrollLink></li>
        <li><ScrollLink to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</ScrollLink></li>
        <li><ScrollLink to='contact' smooth={true} offset={-260} duration={500} >Contact us</ScrollLink></li>
        <li><Link to='/certificate' className='btn'>Download Certificate</Link></li>
      </ul>
      <img src={menu_icon} alt="menu" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
