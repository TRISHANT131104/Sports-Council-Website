import DisplayContext from '../context/DisplayContext';
import { useContext, useEffect } from 'react';
import homeBG from '/src/images/image.png';
import { motion } from "framer-motion";

export default function Home() {
  const { updates, getUpdates, stats, getStats } = useContext(DisplayContext);

  useEffect(() => {
    getUpdates();
    getStats();
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${homeBG})` }}>
        <motion.div className='ml-6 md:ml-24 text-center md:text-left'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white p-2 md:p-4">Sports Council</h1>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white p-2 md:p-4">IIT INDORE</h1>
        </motion.div>
      </div>

      {/* About Us Section */}
      <div className='h-auto py-16 w-full bg-white'>
        <h1 className="text-4xl md:text-6xl p-5 font-bold text-gray-800 text-center">About Us</h1>
        <div className='my-10 mx-6 md:mx-20 text-lg md:text-xl font-semibold text-center md:text-left'>
          The Sports Council of IIT Indore manages many sports and fitness clubs, promoting an active lifestyle on campus.
          Each year, it hosts major events like Lakshya, Josh, and the General Championship, which encourage students to
          compete and have fun. These events highlight student talent in various sports, fostering teamwork and sportsmanship.
          The Council's efforts make sports a key part of life at IIT Indore.
        </div>
        {/* Stats Section */}
        <div className='flex flex-wrap justify-center gap-6 md:gap-10 p-4'>
          {stats && stats.map((stat, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }} 
              className='bg-gray-100 h-[150px] w-[150px] md:h-[200px] md:w-[200px] flex flex-col justify-center items-center rounded-3xl hover:bg-blue-200 cursor-pointer'>
              <div className='text-md md:text-lg font-bold text-gray-700 text-center'>{stat.Stat_name}</div>
              <div className='text-xl md:text-2xl font-bold text-gray-800'>{stat.Stat_number}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Updates Section */}
      <div className='h-auto py-16 w-full bg-gray-100'>
        <h1 className="text-4xl md:text-6xl p-5 font-bold text-gray-800 text-center">Updates</h1>
        <div className='p-4 md:p-10'>
          {updates && updates.map((update, index) => (
            <div key={index} className='mb-8 text-center md:text-left'>
              <h2 className='text-xl md:text-2xl'>{update.Title}</h2>
              <a href={update.Link} target='blank' className='text-md md:text-lg text-blue-500 underline break-all'>{update.Link}</a>
              <hr className='mt-4 border-gray-400' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}