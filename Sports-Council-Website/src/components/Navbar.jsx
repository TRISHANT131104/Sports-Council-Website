import { useEffect, useState, useRef } from 'react';
import sports_logo from '/src/images/sports_logo.jpeg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
    // If the blur event is happening on an element within the dropdown, don't close it
    if (!dropdownRef.current.contains(event.relatedTarget)) {
      setDropdownOpen(false);
    }
  };

  return (
    <div className={`${isScrolled ? 'bg-blue-400 text-white' : 'bg-blue-300 bg-opacity-0'} p-2 flex justify-between items-center fixed w-screen h-18 transition-all duration-300`}>
      <div>
        <img src={sports_logo} alt="Logo" width={60} />
      </div>
      <div className='flex'>
        <Link to={'/'} className='p-2 mx-5 text-xl font-bold'>Home</Link>
        <Link to={'/facilities'} className='p-2 mx-5 text-xl font-bold'>Facilities</Link>
        <Link to={'/events'} className='p-2 mx-5 text-xl font-bold'>Events</Link>
        
        {/* Dropdown for People */}
        <div
          className='relative p-2 mx-5 text-xl font-bold dropdown'
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
    </div>
  );
}
