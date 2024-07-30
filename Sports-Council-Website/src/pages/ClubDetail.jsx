import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DisplayContext from '../context/DisplayContext';
import TeamCard from '../components/TeamCard';

export default function ClubDetail() {
  const { id } = useParams();
  const { getClubMembers, clubMembers, clubs } = useContext(DisplayContext);
  const [club, setClub] = useState(null);

  useEffect(() => {
    getClubMembers(id);
  }, [id]);
  //

  useEffect(() => {
    if (clubs && clubs.length > 0 && id) {
      const foundClub = clubs.find(c => c.id.toString() === id.toString());
      console.log("Club:",foundClub)
      setClub(foundClub);
    }
  }, [id, clubs]);

  const renderMembers = (role) => (
    clubMembers && clubMembers.length > 0 ? (
      clubMembers.filter(member => member.Role === role).map(member => (
        <TeamCard 
          key={member.id} 
          id={member.id} 
          Img={member.Img} 
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
    <div className='pt-[75px] w-full h-max'>
      <div className='w-full h-full flex flex-col justify-center items-center p-10'>
        {club ? (
          <>
            <div className="text-4xl font-semibold p-5">{club.Club_Name}</div>
          </>
        ) : (
          <div>Loading...</div>
        )}
        <div className='w-full flex flex-col'>
          <div className='flex flex-col justify-center items-center p-10'>
            <div className='text-4xl font-semibold m-10'>Council Head</div>
            <div className='flex'>
              {renderMembers('club_head')}
            </div>
          </div>
          <div className='flex flex-col justify-center items-center p-10'>
            <div className='text-4xl font-semibold m-10'>Council Members</div>
            <div className='grid grid-cols-3 gap-7'>
              {renderMembers('club_member')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
