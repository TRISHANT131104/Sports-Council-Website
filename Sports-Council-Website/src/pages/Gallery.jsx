import DisplayContext from '../context/DisplayContext';
import { useContext, useEffect } from 'react';

export default function Gallery() {
  const { gallery, hallOfFame, getGallery } = useContext(DisplayContext);
  
  useEffect(() => {
    getGallery();
  }, []);
  return (
    <div className='pt-[75px] w-full h-max'>
      <div className='w-full h-full flex flex-col justify-center p-10 items-center'>
      <div className="text-4xl font-semibold p-5">Hall of Fame</div>
        <div className='grid grid-cols-4 gap-7'>
          {hallOfFame && hallOfFame.length > 0 ? (
            hallOfFame.map((image) => (
                <div key={image.id} className="mb-5 border flex justify-center items-center h-full w-full border-black shadow-md hover:shadow-2xl transition-all duration-300">
                    <img src={`${image.Img}`} alt={image.Title} className="w-[400px] h-auto p-5" />
                </div>
            ))
        ) : (
            <div>Loading...</div>
        )}
        </div>
        <div className="text-4xl font-semibold p-5">Gallery</div>
        <div className='grid grid-cols-4 gap-7'>
          {gallery && gallery.length > 0 ? (
            gallery.map((image) => (
                <div key={image.id} className="mb-5 border flex justify-center items-center h-full w-full border-black shadow-md hover:shadow-2xl transition-all duration-300">
                    <img src={`${image.Img}`} alt={image.Title} className="w-[400px] h-auto p-5" />
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
