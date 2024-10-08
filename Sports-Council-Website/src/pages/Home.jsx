import DisplayContext from '../context/DisplayContext';
import { useContext, useEffect } from 'react';
import homeBG from '/src/images/image.png';
import { motion } from "framer-motion"

export default function Home() {
  const { updates, getUpdates, stats, getStats } = useContext(DisplayContext);
  
  useEffect(() => {
    getUpdates();
    getStats();
  }, []);
  return (
    <div className=" z-[-1] relative w-full overflow-x-hidden">
      <div className=" w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${homeBG})` }}>
        <motion.div className='ml-24 h-screen flex flex-col items-start justify-center'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-white p-4">Sports Council</h1>
          <h1 className="text-8xl font-bold text-white p-4">IIT INDORE</h1>
        </motion.div>
      </div>
      <div className='h-screen w-full bg-white'>
        <h1 className="text-6xl p-5 font-bold text-gray-800">About Us</h1>
        <div className='my-16 mx-20 flex justify-center text-xl font-semibold'>The Sports Council of IIT Indore manages many sports and fitness clubs, promoting an active lifestyle on campus. Each year, it hosts major events like Lakshya, Josh, and the General Championship, which encourage students to compete and have fun. These events highlight student talent in various sports, fostering teamwork and sportsmanship. The Council's efforts make sports a key part of life at IIT Indore.</div>
        <div className='flex justify-center'>
          {stats && stats.map((stat, index) => (
            <motion.div whileHover={{ scale: 1.2 }} className='bg-gray-100 h-[200px] w-[200px] m-10 flex flex-col justify-center items-center rounded-3xl hover:bg-blue-200 cursor-pointer'>
              <div className='text-lg font-bold text-gray-700'>{stat.Stat_name}</div>
              <div className='text-2xl font-bold text-gray-800'>{stat.Stat_number}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className='h-screen w-full bg-gray-100'>
        <h1 className="text-6xl p-5 font-bold text-gray-800">Updates</h1>
        <div className='p-5 m-10'>
          {updates && updates.map((update, index) => (
            <div key={index} className='mb-8'>
              <h2 className='text-2xl'>{update.Title}</h2>
              <a href={update.Link} target='blank' className='text-lg text-blue-500 underline'>{update.Link}</a>
              <hr className='mt-4' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
