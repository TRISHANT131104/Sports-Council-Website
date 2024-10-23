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
      <div className='w-full h-full flex justify-start flex-col items-center'>
        <div className="text-4xl font-semibold p-5">Events</div>
        <div className='p-5 w-full px-20 flex flex-col justify-center items-center'>
                {events && events.length > 0 ? (
                    events.map((event) => (
                        <Link to={`/events/${event.id}`} key={event.id} className="mb-5 p-4 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center h-full w-max border">
                            <h2 className="text-3xl font-semibold pt-5">{event.Title}</h2>
                            <img src={`${event.Img}`} alt={event.Title} className="w-[800px] h-auto m-10 border border-black"/>
                        </Link>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
      </div>
    </div>
  )
}
