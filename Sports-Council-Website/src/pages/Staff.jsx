import TeamCard from '../components/TeamCard';
import DisplayContext from '../context/DisplayContext';
import { useContext, useEffect } from 'react';

export default function Staff() {
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
        <div className='pt-[75px] w-full h-max'>
            <div className='w-full flex flex-col items-center'>
                <div className='flex flex-col justify-center items-center px-5 py-10'>
                    <h1 className='text-3xl md:text-4xl font-semibold mb-10 text-center'>Staff</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full max-w-6xl'>
                        {renderMembers('staff')}
                    </div>
                </div>
            </div>        
        </div>
    );
}
