import { useEffect, useState, useRef } from 'react';
import sports_logo from '/src/images/sports_logo.jpeg';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDropdownFocus = () => {
    setDropdownOpen(true);
  };

  const handleDropdownBlur = (event) => {
    if (!dropdownRef.current.contains(event.relatedTarget)) {
      setDropdownOpen(false);
    }
  };

  return (
    <div className={`${isScrolled ? 'bg-blue-400 text-white' : 'bg-blue-300 bg-opacity-0'} p-2 flex justify-between items-center fixed w-screen h-18 transition-all duration-300 z-50`}>
      <div className='flex items-center'>
        <img src={sports_logo} alt="Logo" width={60} />
      </div>
      
      {/* Desktop Menu */}
      <div className='hidden md:flex'>
        <Link to={'/'} className='p-2 mx-5 text-xl font-bold'>Home</Link>
        <Link to={'/facilities'} className='p-2 mx-5 text-xl font-bold'>Facilities</Link>
        <Link to={'/events'} className='p-2 mx-5 text-xl font-bold'>Events</Link>
        
        {/* Dropdown for People */}
        <div
          className='relative p-2 mx-5 text-xl font-bold'
          onFocus={handleDropdownFocus}
          onBlur={handleDropdownBlur}
          tabIndex="0"
          ref={dropdownRef}
        >
          <div className='cursor-pointer'>People</div>
          {dropdownOpen && (
            <div className='absolute top-full mt-2 bg-white shadow-xl rounded-lg w-40'>
              <Link to={'/staff'} className='block px-5 p-3 hover:bg-gray-200 text-black font-semibold rounded-t-md'>Staff</Link>
              <Link to={'/team'} className='block px-5 p-3 hover:bg-gray-200 text-black font-semibold rounded-b-md'>Team</Link>
            </div>
          )}
        </div>

        <Link to={'/clubsAndSocities'} className='p-2 mx-5 text-xl font-bold'>Clubs</Link>
        <Link to={'/gallery'} className='p-2 mx-5 text-xl font-bold'>Gallery</Link>
        <Link to={'/contact'} className='p-2 mx-5 text-xl font-bold'>Contact</Link>
      </div>
      
      {/* Mobile Menu Button */}
      <div className='md:hidden flex items-center'>
        <button onClick={() => setMenuOpen(!menuOpen)} className='text-white text-3xl focus:outline-none'>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-blue-400 text-white flex flex-col items-center justify-center md:hidden z-40'>
          <button onClick={() => setMenuOpen(false)} className='absolute top-5 right-5 text-3xl'>
            <FiX />
          </button>
          <Link to={'/'} className='p-4 text-xl' onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to={'/facilities'} className='p-4 text-xl' onClick={() => setMenuOpen(false)}>Facilities</Link>
          <Link to={'/events'} className='p-4 text-xl' onClick={() => setMenuOpen(false)}>Events</Link>
          <Link to={'/staff'} className='p-4 text-xl' onClick={() => setMenuOpen(false)}>Staff</Link>
          <Link to={'/team'} className='p-4 text-xl' onClick={() => setMenuOpen(false)}>Team</Link>
          <Link to={'/clubsAndSocities'} className='p-4 text-xl' onClick={() => setMenuOpen(false)}>Clubs</Link>
          <Link to={'/gallery'} className='p-4 text-xl' onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to={'/contact'} className='p-4 text-xl' onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
}
