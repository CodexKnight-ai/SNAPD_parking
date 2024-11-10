import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { spaceEmpty, spaceFill } from "../store/occupySlice";

function Slot() {
  const { space } = useSelector((state) => state.occupy);
  const dispatch = useDispatch();
  const [slots, setSlots] = useState(new Array(12).fill(false));
  const handleClick = (index) => {
    const updatedSlots = [...slots];
    updatedSlots[index] = !updatedSlots[index];
    setSlots(updatedSlots);
    updatedSlots[index] ? dispatch(spaceFill()) : dispatch(spaceEmpty());
  };

  return (
    <div className="bg-primary w-full h-fit mt-20 p-10 pb-20 flex flex-col justify-around gap-6">
      <div>
        <p className="font-bosch text-4xl bg-[#E2E2D2] p-4 rounded-full h-fit w-1/3 text-center bold">
          Available Slots: {space}/12
        </p>
      </div>
      {["Ground Floor", "First Floor", "Second Floor"].map(
        (floor, floorIndex) => (
          <div
            key={floorIndex}
            className="flex bg-[#141321] w-[90%] rounded-2xl h-fit p-5 gap-3"
          >
            <p className="font-adventure text-5xl my-auto w-1/2 text-white flex justify-center items-center">
              {floor} :
            </p>
            <div className="flex flex-col w-3/5 h-auto border-2 border-slate-600 gap-3 p-4 rounded-lg">
              <div className="flex gap-14 justify-center">
                {[0, 1].map((index) => (
                  <div
                    key={index}
                    onClick={() => handleClick(floorIndex * 4 + index)}
                    className={
                      slots[floorIndex * 4 + index]
                        ? "bg-red-500 w-32 h-40 rounded-xl"
                        : "bg-slate-500 w-32 h-40 rounded-xl"
                    }
                  ></div>
                ))}
              </div>
              <div className="flex gap-6 justify-between">
                {[2, 3].map((index) => (
                  <div
                    key={index}
                    onClick={() => handleClick(floorIndex * 4 + index)}
                    className={
                      slots[floorIndex * 4 + index]
                        ? "bg-red-500 w-40 h-32 rounded-xl"
                        : "bg-slate-500 w-40 h-32 rounded-xl"
                    }
                  ></div>
                ))}
              </div>
              <div className="flex gap-6 justify-between bg-slate-800 font-poppins text-2xl mt-6">
                <span className="bg-slate-600 w-1/4 h-14 text-white text-center my-auto">
                  Gate 1
                </span>
                {floorIndex < 2 && (
                  <span className="bg-slate-600 w-1/4 h-14 text-white text-center my-auto">
                    Gate 2
                  </span>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Slot;
