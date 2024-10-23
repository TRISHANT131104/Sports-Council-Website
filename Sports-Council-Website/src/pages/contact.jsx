import DisplayContext from '../context/DisplayContext'
import { useContext, useEffect } from 'react'

export default function contact() {
  const { SaveMessage } = useContext(DisplayContext);
  return (
    <div className='pt-[75px] w-full p-20'>
      <div className='w-full h-full flex justify-center'>
        <div className='w-full h-full border border-gray-300 rounded-md flex flex-col items-center justify-center m-16 hover:shadow-2xl transition-all duration-300 bg-gray-50'>
          <div className='text-4xl font-semibold p-5 text-center'>Contact Us</div>
          <div>Feel free to contact us? Submit your queries here, we will listen.</div>
          <div className='flex'>
            <div className='flex flex-col m-5'>
              <div className='bg-[#5900FF] m-5 p-5 rounded-xl flex flex-col justify-between items-start h-[200px] w-[360px]'>
                <div className='flex flex-col'>
                  <div className='text-white text-md my-1'>Call Us Directly At</div>
                  <div className='text-white text-xl my-1 font-bold'>+91 123 4567 890</div>
                </div>
                <div className='text-white text-md px-4 py-2 bg-gray-50 bg-opacity-30 rounded-full w-full text-center'>Contact Us</div>
              </div>
              <div className='bg-gray-100 m-5 p-5 rounded-xl flex flex-col justify-between items-start h-[200px] w-[360px]'>
                <div className='flex flex-col'>
                  <div className='text-md my-1'>Chat with our team</div>
                  <div className='text-xl my-1 font-bold'>gs.sports@iiti.ac.in</div>
                </div>
                <div className='text-md px-4 py-2 bg-gray-500 bg-opacity-30 rounded-full w-full text-center'>Contact Us</div>
              </div>
            </div>
            <form onSubmit={SaveMessage} className='flex flex-col m-5 w-[600px] justify-between py-10'>
              <div className=''>
                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name" required=""/>
              </div>
              <div className='flex'>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 mr-5" placeholder="Email" required=""/>
                <input type="number" name="phone" id="phone" className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5" placeholder="Phone Number" required=""/>
              </div>
              <div className=''>
                <textarea id="message" name='message' rows="6" className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Message Here..."></textarea>
              </div>
              <div>
                <button type="submit" className='w-full bg-black text-white py-3 rounded-full'>Send Message</button>
                {/* <a href="mailto:trishanttalluri@gmail.com?subject=Your%20Subject&body=Your%20message%20goes%20here">Send Email</a> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
