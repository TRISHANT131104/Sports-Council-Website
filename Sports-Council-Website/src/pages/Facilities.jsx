import DisplayContext from '../context/DisplayContext'
import { useContext, useEffect } from 'react'

export default function Facilities() {
  const { facilities, getFacilities } = useContext(DisplayContext);
  useEffect(() => {
    getFacilities();
  }, []);
  return (
    <div className='pt-[75px] w-full h-max'>
      <div className='w-full h-full flex justify-start flex-col items-center'>
        <div className="text-4xl font-semibold p-5">Facilities</div>
        <div className='p-5 w-full px-20'>
                {facilities && facilities.length > 0 ? (
                    facilities.map((facility) => (
                        <div key={facility.id} className="mb-5 border p-4 shadow-lg flex justify-center items-center h-full w-full border-black">
                            <div>
                            <img src={`${facility.Img}`} alt={facility.Title} className="w-[600px] h-auto m-5 p-10" />
                            </div>
                            <div className='flex flex-col w-full items-center justify-start h-full'>
                              <h2 className="text-3xl font-semibold">{facility.Title}</h2>
                              <p className="m-5 text-lg">{facility.Description}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
      </div>
    </div>
  )
}
