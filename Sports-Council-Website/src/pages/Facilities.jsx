import DisplayContext from '../context/DisplayContext';
import { useContext, useEffect, useState } from 'react';

export default function Facilities() {
  const { facilities, getFacilities } = useContext(DisplayContext);
  const [hoveredFacility, setHoveredFacility] = useState(null);

  useEffect(() => {
    getFacilities();
  }, []);

  return (
    <div className='pt-[75px] w-full h-max'>
      <div className='w-full h-full flex flex-col items-center'>
        <div className="text-4xl font-semibold p-5 text-center">Facilities</div>
        <div className='p-5 w-full px-5 md:px-10 lg:px-20'>
          {facilities && facilities.length > 0 ? (
            facilities.map((facility) => (
              <div 
                key={facility.id} 
                className="relative mb-5 border p-4 shadow-md hover:shadow-2xl flex flex-col md:flex-row justify-center items-center 
                          h-full w-full border-black transition-all duration-300"
                onMouseEnter={() => setHoveredFacility(facility.id)}
                onMouseLeave={() => setHoveredFacility(null)}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img 
                    src={`${facility.Img}`} 
                    alt={facility.Title} 
                    className="w-full max-w-[600px] h-auto md:m-5 p-5 md:p-10" 
                  />
                </div>

                {/* Content Section */}
                <div className='flex flex-col w-full md:w-1/2 items-center justify-start h-full relative text-center'>
                  <h2 className="text-2xl md:text-3xl font-semibold">{facility.Title}</h2>

                  {/* Description (visible by default, hidden on hover) */}
                  <p 
                    className={`m-5 text-base md:text-lg transition-all duration-300 ${hoveredFacility === facility.id ? 'opacity-0 h-0' : 'opacity-100 h-auto'}`}
                  >
                    {facility.Description}
                  </p>

                  {/* Rules (hidden by default, shown on hover) */}
                  <ul 
                    className={`m-5 text-base md:text-lg font-medium transition-all duration-300 ${hoveredFacility === facility.id ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                  >
                    {facility.rules.length > 0 ? (
                      facility.rules.map((rule, index) => (
                        <li key={index} className="py-1">
                          • {rule}
                        </li>
                      ))
                    ) : (
                      <li>No rules available.</li>
                    )}
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
}
