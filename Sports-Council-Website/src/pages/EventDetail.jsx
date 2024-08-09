import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DisplayContext from '../context/DisplayContext';

export default function EventDetail() {
    const { id } = useParams();
    const { events, getEvents } = useContext(DisplayContext);
    const [event, setEvent] = useState(null);
    useEffect(() => {
      getEvents();
    }, []);
    useEffect(() => {
        if (events && events.length > 0 && id) {
          const foundEvent = events.find(c => c.id.toString() === id.toString());
          console.log("Club:",foundEvent)
          setEvent(foundEvent);
        }
      }, [id, events]);
  return (
    <div className='pt-[75px] w-full h-max min-h-screen'>
      <div className='w-full h-full flex flex-col justify-center items-center p-10'>
        {event ? (
          <>
            <div className="text-4xl font-semibold p-5">{event.Title}</div>
            <img src={`${event.Img}`} alt={event.Title} className="w-4/5 h-auto m-10 p-4 border border-black" />
            <div className='text-lg w-4/5 font-semibold mb-10' style={{ whiteSpace: 'pre-wrap' }}>{event.Description}</div>
          </>
        ) : (
          <div>Loading...</div>
        )}
        
      </div>
    </div>
  )
}
