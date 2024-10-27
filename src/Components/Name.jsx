import React from 'react';

export default function Name({ src, name, enrollment, course, email }) {
  return (
    <div className="flex items-center rounded-lg px-10 bg-[#141D26] w-full h-80 shadow-md gap-10">
      <img
        src={src}
        alt={name}
        className="w-64 h-72 rounded-xl"
      />
      <div className="ml-4 text-white font-adventure flex flex-col gap-4">
        <h2 className="text-6xl">{name}</h2>
        <p className='text-4xl font-poppins' >Enrollment number: {enrollment}</p>
        <p className='text-4xl font-poppins' >Course: {course}</p>
        <p className='text-3xl font-poppins' >Email: {email}</p>
      </div>
    </div>
  );
}
