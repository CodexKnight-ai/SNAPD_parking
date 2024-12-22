import React from "react";

function Floor({ name, slotArr }) {
  const num = name === "Second Floor" ? 5 : 1;

  return (
    <div className="flex flex-col sm:flex-row bg-[#141321] w-full sm:w-[90%] rounded-2xl h-fit p-5 gap-3">
      {/* Floor Name Section */}
      <div className="w-full sm:w-1/2 text-white text-2xl sm:text-4xl font-adventure flex flex-col justify-center items-center">
        {name} :
      </div>

      {/* Slots Section */}
      <div className="flex flex-wrap h-fit w-full sm:w-1/2 gap-2 justify-center">
        {slotArr.map((isOccupied, index) => (
          <div
            key={index}
            className={`${
              isOccupied ? "bg-red-800" : "bg-green-900"
            } w-20 sm:w-24 h-28 sm:h-32 rounded-xl m-2 flex flex-col justify-center items-center`}
          >
            <p className="text-white text-xs sm:text-sm font-bold">
              {isOccupied ? "Occupied" : "Available"}
            </p>
            <p className="text-white text-xs sm:text-sm font-bold">Slot: {index + num}</p>
            {(num + index === 2 || num + index === 4) && (
              <span className="text-white text-xs sm:text-sm font-bold">(Dummy)</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Floor;
