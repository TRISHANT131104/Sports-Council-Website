import DisplayContext from '../context/DisplayContext';
import { useContext, useEffect } from 'react';

export default function Gallery() {
  const { gallery, hallOfFame, getGallery } = useContext(DisplayContext);

  useEffect(() => {
    getGallery();
  }, []);

  return (
    <div className='pt-[75px] w-full h-max min-h-screen px-5'>
      <div className='w-full h-full flex flex-col justify-center items-center'>

        {/* Hall of Fame Section */}
        <h2 className="text-3xl md:text-4xl font-semibold p-5 text-center">Hall of Fame</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 w-full max-w-6xl'>
          {hallOfFame && hallOfFame.length > 0 ? (
            hallOfFame.map((image) => (
              <div 
                key={image.id} 
                className="border flex justify-center items-center border-black shadow-md hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden"
              >
                <img 
                  src={`${image.Img}`} 
                  alt={image.Title} 
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto p-3"
                />
              </div>
            ))
          ) : (
            <div className="text-lg font-semibold">Loading...</div>
          )}
        </div>

        {/* Gallery Section */}
        <h2 className="text-3xl md:text-4xl font-semibold p-5 mt-10 text-center">Gallery</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 w-full max-w-6xl'>
          {gallery && gallery.length > 0 ? (
            gallery.map((image) => (
              <div 
                key={image.id} 
                className="border flex justify-center items-center border-black shadow-md hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden"
              >
                <img 
                  src={`${image.Img}`} 
                  alt={image.Title} 
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto p-3"
                />
              </div>
            ))
          ) : (
            <div className="text-lg font-semibold">Loading...</div>
          )}
        </div>

      </div>
    </div>
  );
}
