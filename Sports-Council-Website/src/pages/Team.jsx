import TeamCard from '../components/TeamCard';
import DisplayContext from '../context/DisplayContext';
import { useContext, useEffect } from 'react';

export default function Team() {
  const { team, getTeams } = useContext(DisplayContext);
  
  useEffect(() => {
    getTeams();
  }, []);

  const renderMembers = (role) => (
    team && team.length > 0 ? (
      team.filter(member => member.Role === role).map(member => (
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
      <div className='w-full h-full flex flex-col items-center justify-start'>
        <div className="text-4xl font-semibold p-5">Our Team</div>
        <div className='w-full flex flex-col'>
          <div className='flex flex-col justify-center items-center p-10'>
            <div className='text-4xl font-semibold m-10'>Staff</div>
            <div className='grid grid-cols-3 gap-7'>
              {renderMembers('staff')}
            </div>
          </div>
          <div className='flex flex-col justify-center items-center p-10'>
            <div className='text-4xl font-semibold m-10'>Council Head</div>
            <div className='flex'>
              {renderMembers('council_head')}
            </div>
          </div>
          <div className='flex flex-col justify-center items-center p-10'>
            <div className='text-4xl font-semibold m-10'>Council Members</div>
            <div className='grid grid-cols-3 gap-7'>
              {renderMembers('council_member')}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
