import DisplayContext from '../context/DisplayContext'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Events() {
  const { events, getEvents } = useContext(DisplayContext);
  
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className='pt-[75px] w-full h-max'>
      <div className='w-full flex flex-col items-center'>
        <div className="text-4xl font-semibold p-5 text-center">Events</div>
        <div className='p-5 w-full px-5 md:px-20 flex flex-col items-center'>
          {events && events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {events.map((event) => (
                <Link 
                  to={`/events/${event.id}`} 
                  key={event.id} 
                  className="p-4 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center border rounded-lg w-full"
                >
                  <h2 className="text-2xl font-semibold pt-3 text-center">{event.Title}</h2>
                  <img 
                    src={`${event.Img}`} 
                    alt={event.Title} 
                    className="w-full sm:w-[600px] md:w-[800px] max-w-full h-auto m-5 border border-black rounded-lg"
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-lg font-semibold">Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
}
