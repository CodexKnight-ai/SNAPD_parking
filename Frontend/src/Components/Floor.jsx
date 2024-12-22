import React from "react";

function Floor({ name, slotArr }) {
  const num = (name === "Second Floor") ? 5 : 1;

  return (
    <div className="flex bg-[#141321] w-[90%] rounded-2xl h-fit p-5 gap-3">
      {/* Floor Name Section */}
      <div className="w-1/2 h-1/2 text-white text-4xl font-adventure flex flex-col justify-center items-center">
        {name} :
      </div>
      
      {/* Slots Section */}
      <div className="flex h-fit w-1/2 gap-2">
        {slotArr.map((isOccupied, index) => (
          <div 
            key={index}
            className={`${
              isOccupied ? "bg-red-800" : "bg-green-900"
            } w-24 h-32 rounded-xl m-2 flex flex-col justify-center items-center`}
          >
            <p className="text-white text-sm font-bold">
              {isOccupied ? "Occupied" : "Available"}
            </p>
            <p className="text-white text-sm font-bold">Slot:{index + num}</p>
            {(num+index==2 || num+index==4)?<span className="text-white text-sm font-bold">( Dummy )</span>:null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Floor;
