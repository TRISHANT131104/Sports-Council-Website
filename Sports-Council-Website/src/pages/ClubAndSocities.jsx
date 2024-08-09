import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DisplayContext from '../context/DisplayContext';

export default function ClubAndSocieties() {
  const { clubs, getClubs } = useContext(DisplayContext);
  
  useEffect(() => {
    getClubs();
  }, []);
  
  return (
    <div className='pt-[75px] w-full h-max'>
      <div className='w-full h-full flex flex-col justify-center items-center p-10'>
        <div className="text-4xl font-semibold p-5">Our Clubs & Societies</div>
        <div className='grid grid-cols-3 gap-7'>
          {clubs && clubs.length > 0 ? (
            clubs.map((club) => (
              <div key={club.id}>
                <Link to={`/clubsAndSocieties/${club.id}`} className="mb-5 border p-4 flex flex-col justify-center items-center h-full w-full border-black">
                  <img src={`${club.Club_logo}`} alt={club.Title} className="w-[400px] h-auto m-5 p-10" />
                  <div className="text-4xl font-semibold">{club.Club_Name}</div>
                </Link>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
}
