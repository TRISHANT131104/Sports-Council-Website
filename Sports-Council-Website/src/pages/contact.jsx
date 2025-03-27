import DisplayContext from '../context/DisplayContext'
import { useContext } from 'react'

export default function Contact() {
  const { SaveMessage } = useContext(DisplayContext);

  return (
    <div className='pt-[100px] w-full p-5 sm:p-20'>
      <div className='w-full h-full flex justify-center'>
        <div className='w-full max-w-6xl border border-gray-300 rounded-md flex flex-col items-center justify-center p-8 sm:p-16 shadow-lg bg-gray-50'>

          {/* Contact Header */}
          <h2 className='text-3xl md:text-4xl font-semibold p-5 text-center'>Contact Us</h2>
          <p className='text-center text-gray-700 px-5'>Feel free to contact us! Submit your queries here, we will listen.</p>

          {/* Contact Options */}
          <div className='flex flex-wrap md:flex-nowrap justify-center gap-5 w-full mt-10'>

            {/* Phone Contact Card */}
            <div className='bg-[#5900FF] p-5 rounded-xl flex flex-col justify-between items-start h-[200px] w-full md:w-[360px]'>
              <div>
                <p className='text-white text-md my-1'>Call Us Directly At</p>
                <p className='text-white text-xl my-1 font-bold'>+91 123 4567 890</p>
              </div>
              <button className='text-white text-md px-4 py-2 bg-gray-50 bg-opacity-30 rounded-full w-full text-center'>Contact Us</button>
            </div>

            {/* Email Contact Card */}
            <div className='bg-gray-100 p-5 rounded-xl flex flex-col justify-between items-start h-[200px] w-full md:w-[360px]'>
              <div>
                <p className='text-md my-1'>Chat with our team</p>
                <p className='text-xl my-1 font-bold'>gs.sports@iiti.ac.in</p>
              </div>
              <button className='text-md px-4 py-2 bg-gray-500 bg-opacity-30 rounded-full w-full text-center'>Contact Us</button>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={SaveMessage} className='flex flex-col w-full md:w-[600px] mt-10 gap-5'>
            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name" required />
            
            <div className='flex flex-col md:flex-row gap-5'>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/2 p-2.5" placeholder="Email" required />
              <input type="number" name="phone" id="phone" className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/2 p-2.5" placeholder="Phone Number" required />
            </div>

            <textarea id="message" name='message' rows="6" className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Message Here..."></textarea>
            
            <button type="submit" className='w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-all duration-300'>Send Message</button>
          </form>

        </div>
      </div>
    </div>
  )
}
