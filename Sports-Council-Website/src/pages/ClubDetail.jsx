import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DisplayContext from '../context/DisplayContext';
import TeamCard from '../components/TeamCard';

const BASE_URL = "http://127.0.0.1:8000/";

export default function ClubDetail() {
  const { id } = useParams();
  const { getClubMembers, clubMembers, clubRules, clubs } = useContext(DisplayContext);  // Include clubRules
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
          Img={`${BASE_URL}` + member.Img} 
          Name={member.Name} 
          phoneNumber={member.phoneNumber} 
          EmailID={member.EmailID} 
        />
      ))
    ) : (
      <div>Loading...</div>
    )
  );

  return (
    <div className='pt-[75px] w-full h-max min-h-full'>
      <div className='w-full h-full flex flex-col justify-center items-center p-10'>
        {club ? (
          <>
            <div className="text-4xl font-semibold p-5">{club.Club_Name}</div>
          </>
        ) : (
          <div>Loading...</div>
        )}
        <div className='w-full flex flex-col'>
          <div className='flex w-full justify-center'>
            {clubMembers?.filter(member => member.Role === 'Coach').length !== 0 && (
              <div className='flex flex-col justify-center items-center p-10'>
                <div className='text-4xl font-semibold m-10'>Coach</div>
                <div className='flex'>{renderMembers('Coach')}</div>
              </div>
            )}
            {clubMembers?.filter(member => member.Role === 'club_head').length !== 0 && (
              <div className='flex flex-col justify-center items-center p-10'>
                <div className='text-4xl font-semibold m-10'>Club Head</div>
                <div className='flex'>{renderMembers('club_head')}</div>
              </div>
            )}
          </div>
          {clubMembers?.filter(member => member.Role === 'club_member').length !== 0 && (
            <div className='flex flex-col justify-center items-center p-10'>
              <div className='text-4xl font-semibold m-10'>Club Members</div>
              <div className='grid grid-cols-3 gap-7'>{renderMembers('club_member')}</div>
            </div>
          )}
        </div>

        {clubRules && clubRules.length > 0 && (
          <div className="w-full flex flex-col  mt-10 p-10">
            <div className="text-4xl font-semibold self-center m-10">Club Rules</div>
            <ul className="list-decimal text-xl items-start">
              {clubRules.map((rule) => (
                <li key={rule.id} className="p-2">{rule.rule}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
