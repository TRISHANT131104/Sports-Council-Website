import { useEffect, useState } from 'react';
import sports_logo from '/src/images/sports_logo.jpeg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [teamClicked, setTeamClicked] = useState(false);

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
    <div className={`${isScrolled ? 'bg-black text-white' : 'bg-blue-300 bg-opacity-0'} p-2 flex justify-between items-center fixed w-screen h-18 transition-all duration-300`}>
      <div>
        <img src={sports_logo} alt="Logo" width={60} />
      </div>
      <div className='flex'>
        <Link to={'/'} className='p-2 mx-5 text-xl font-bold'>Home</Link>
        <Link to={'/facilities'} className='p-2 mx-5 text-xl font-bold'>Facilities</Link>
        <Link to={'/events'} className='p-2 mx-5 text-xl font-bold'>Events</Link>
        <Link to={'/team'} className='p-2 mx-5 text-xl font-bold'>Team</Link>
        <div className='relative p-2 mx-5 text-xl font-bold' onMouseEnter={() => setTeamClicked(true)} onMouseLeave={() => setTeamClicked(false)}>
          <div>People</div>
          {teamClicked && (
            <div className='absolute top-full mt-2 bg-white shadow-lg rounded-lg w-40'>
              <Link to={'/staff'} className='block p-2 hover:bg-gray-200 text-black font-semibold'>Staff</Link>
              <Link to={'/team'} className='block p-2 hover:bg-gray-200 text-black font-semibold'>Team</Link>
            </div>
          )}
        </div>
        <Link to={'/clubsAndSocities'} className='p-2 mx-5 text-xl font-bold'>Clubs & Societies</Link>
        <Link to={'/gallery'} className='p-2 mx-5 text-xl font-bold'>Gallery</Link>
        <Link to={'/contact'} className='p-2 mx-5 text-xl font-bold'>Contact</Link>
      </div>
    </div>
  )
}
