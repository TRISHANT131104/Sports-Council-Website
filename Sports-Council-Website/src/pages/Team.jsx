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
      <div className="text-lg font-semibold text-center">Loading...</div>
    )
  );

  return (
    <div className='pt-[75px] w-full h-max flex flex-col items-center px-5'>
      <div className='w-full max-w-6xl flex flex-col'>

        {/* Council Head */}
        <div className='flex flex-col justify-center items-center py-10'>
          <h1 className='text-3xl md:text-4xl font-semibold mb-10 text-center'>Council Head</h1>
          <div className='flex flex-wrap justify-center'>
            {renderMembers('council_head')}
          </div>
        </div>

        {/* Council Members */}
        <div className='flex flex-col justify-center items-center py-10'>
          <h2 className='text-3xl md:text-4xl font-semibold mb-10 text-center'>Council Members</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full'>
            {renderMembers('council_member')}
          </div>
        </div>

      </div>
    </div>
  );
}
