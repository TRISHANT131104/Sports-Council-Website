import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DisplayContext from '../context/DisplayContext';
import TeamCard from '../components/TeamCard';

const BASE_URL = "http://127.0.0.1:8000/";

export default function ClubDetail() {
  const { id } = useParams();
  const { getClubMembers, clubMembers, clubRules, clubs } = useContext(DisplayContext);
  const [club, setClub] = useState(null);

  useEffect(() => {
    getClubMembers(id);
  }, [id]);

  useEffect(() => {
    if (clubs && clubs.length > 0 && id) {
      const foundClub = clubs.find(c => c.id.toString() === id.toString());
      setClub(foundClub);
    }
  }, [id, clubs]);

  const renderMembers = (role) => (
    clubMembers && clubMembers.length > 0 ? (
      clubMembers.filter(member => member.Role === role).map(member => (
        <TeamCard 
          key={member.id} 
          id={member.id} 
          Img={`${BASE_URL}${member.Img}`} 
          Name={member.Name} 
          phoneNumber={member.phoneNumber} 
          EmailID={member.EmailID} 
        />
      ))
    ) : (
      <div className="text-lg font-semibold">Loading...</div>
    )
  );

  return (
    <div className='pt-[75px] w-full h-max min-h-screen flex flex-col items-center px-5'>
      
      {/* Club Title */}
      <div className='text-3xl md:text-4xl font-semibold text-center mt-10'>
        {club ? club.Club_Name : "Loading..."}
      </div>

      {/* Members Section */}
      <div className='w-full max-w-6xl flex flex-col mt-10'>

        {/* Coach & Club Head */}
        <div className='flex flex-col md:flex-row justify-center gap-10'>
          {clubMembers?.some(member => member.Role === 'Coach') && (
            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-2xl md:text-3xl font-semibold mb-5'>Coach</h2>
              <div className='flex flex-wrap justify-center gap-5'>{renderMembers('Coach')}</div>
            </div>
          )}

          {clubMembers?.some(member => member.Role === 'club_head') && (
            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-2xl md:text-3xl font-semibold mb-5'>Club Head</h2>
              <div className='flex flex-wrap justify-center gap-5'>{renderMembers('club_head')}</div>
            </div>
          )}
        </div>

        {/* Club Members */}
        {clubMembers?.some(member => member.Role === 'club_member') && (
          <div className='flex flex-col justify-center items-center mt-10'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-5'>Club Members</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full'>
              {renderMembers('club_member')}
            </div>
          </div>
        )}
      </div>

      {/* Club Rules */}
      {clubRules && clubRules.length > 0 && (
        <div className="w-full max-w-5xl mt-10 p-5">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-5">Rules</h2>
          <ul className="list-disc ml-5 md:ml-10 text-lg">
            {clubRules.map((rule) => (
              <li key={rule.id} className="p-2">{rule.rule}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}
