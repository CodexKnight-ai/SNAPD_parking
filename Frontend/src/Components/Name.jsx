import React from "react";

export default function Name({ src, name, enrollment, course, email }) {
  return (
    <div className="flex flex-col sm:flex-row items-center rounded-xl bg-secondary w-full h-auto shadow-md gap-6 sm:gap-10 p-4 sm:p-6 hover:shadow-md hover:shadow-black">
      {/* Image Section */}
      <div className="w-full sm:w-1/5 flex justify-center items-center">
        <img
          src={src}
          alt={name}
          className="w-32 h-40 sm:w-64 sm:h-72 rounded-md object-cover"
        />
      </div>

      {/* Details Section */}
      <div className="text-white font-adventure flex flex-col gap-2 sm:gap-4 w-full sm:w-auto text-center sm:text-left">
        <h2 className="text-2xl sm:text-4xl md:text-6xl">
          <span className="underline">{name[0]}</span>
          {name.slice(1)}
        </h2>
        <p className="text-sm sm:text-lg md:text-2xl font-poppins">
          Enrollment number: {enrollment}
        </p>
        <p className="text-sm sm:text-lg md:text-2xl font-poppins">
          Course: {course}
        </p>
        <p className="text-sm sm:text-lg md:text-2xl font-poppins">
          Email: {email}
        </p>
      </div>
    </div>
  );
}
