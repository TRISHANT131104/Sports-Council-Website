import { useEffect, useState } from 'react';
import sports_logo from '/src/images/sports_logo.jpeg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
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
  return (
    <div className={`${isScrolled ? 'bg-black text-white' : 'bg-blue-300 bg-opacity-70'} p-2  flex justify-between items-center fixed w-screen h-18 transition-all duration-300`}>
      <div>
      <img src={sports_logo} alt="Logo" width={60} />
      </div>
      <div className='flex'>
        <Link to={'/'} className='p-2 mx-5 text-xl font-bold'>Home</Link>
        <Link to={'/facilities'} className='p-2 mx-5 text-xl font-bold'>Facilities</Link>
        <Link to={'/events'} className='p-2 mx-5 text-xl font-bold'>Events</Link>
        <Link to={'/team'} className='p-2 mx-5 text-xl font-bold'>Team</Link>
        <Link to={'/clubsAndSocities'} className='p-2 mx-5 text-xl font-bold'>Clubs & Socities</Link>
        <Link to={'/gallery'} className='p-2 mx-5 text-xl font-bold'>Gallery</Link>
        <Link to={'/contant'} className='p-2 mx-5 text-xl font-bold'>Contact</Link>
      </div>
    </div>
  )
}
