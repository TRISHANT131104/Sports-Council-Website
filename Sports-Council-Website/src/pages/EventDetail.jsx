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
            console.log("Event:", foundEvent);
            setEvent(foundEvent);
        }
    }, [id, events]);

    return (
        <div className='pt-[75px] w-full min-h-screen flex flex-col items-center px-5'>
            {event ? (
                <div className='w-full max-w-4xl flex flex-col items-center text-center'>
                    <h1 className="text-3xl md:text-4xl font-semibold p-5">{event.Title}</h1>
                    <img 
                        src={event.Img} 
                        alt={event.Title} 
                        className="w-full sm:w-[600px] md:w-[800px] max-w-full h-auto border border-black rounded-lg shadow-lg"
                    />
                    <p className='text-lg md:text-xl font-semibold mt-5 px-2 sm:px-10' style={{ whiteSpace: 'pre-wrap' }}>
                        {event.Description}
                    </p>
                    <br />
                </div>
            ) : (
                <div className="text-lg font-semibold mt-10">Loading...</div>
            )}
        </div>
    );
}
