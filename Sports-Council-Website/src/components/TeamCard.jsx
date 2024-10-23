import React from 'react';

export default function TeamCard({ id, Img, Name, phoneNumber, EmailID }) {
  return (
    <div key={id} className="mb-5 border p-4 shadow-md hover:shadow-2xl flex flex-col justify-center items-center h-full w-auto border-black transition-all duration-300">
      <img src={Img} alt={Name} className="w-[400px] h-auto m-5 p-5" />
      <div className='flex flex-col w-full items-center justify-start h-full'>
        <h2 className="text-2xl font-semibold">{Name}</h2>
        <p className="mt-5 text-lg">Phone : {phoneNumber}</p>
        <p className="mt-3 text-lg">Email : {EmailID}</p>
      </div>
    </div>
  );
}
