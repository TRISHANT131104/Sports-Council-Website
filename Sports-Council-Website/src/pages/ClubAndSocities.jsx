import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DisplayContext from '../context/DisplayContext';

export default function ClubAndSocieties() {
  const { clubs, getClubs } = useContext(DisplayContext);
  
  useEffect(() => {
    getClubs();
  }, []);
  
  return (
    <div className='pt-[75px] w-full h-max flex flex-col items-center px-5'>
      <div className='w-full max-w-6xl flex flex-col justify-center items-center py-10'>
        
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10">Our Clubs & Societies</h1>

        {/* Clubs Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full'>
          {clubs && clubs.length > 0 ? (
            clubs.map((club) => (
              <Link 
                key={club.id} 
                to={`/clubsAndSocieties/${club.id}`} 
                className="border p-4 flex flex-col items-center border-black shadow-md hover:shadow-2xl transition-all duration-300 rounded-lg"
              >
                <img 
                  src={`${club.Club_logo}`} 
                  alt={club.Title} 
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto m-5 p-4"
                />
                <h2 className="text-2xl md:text-3xl font-semibold text-center">{club.Club_Name}</h2>
              </Link>
            ))
          ) : (
            <div className="text-lg font-semibold text-center">Loading...</div>
          )}
        </div>

      </div>
    </div>
  );
}
