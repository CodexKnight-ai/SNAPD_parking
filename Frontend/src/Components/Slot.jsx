import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { spaceEmpty, spaceFill } from "../store/occupySlice";

function Slot() {
  const { space } = useSelector((state) => state.occupy);
  const dispatch = useDispatch();

  // State for slots: { id, isOccupied } for each slot
  const [slots, setSlots] = useState([]);

  // Fetch slots from backend
  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await fetch("/api/v1/slots");
        const data = await response.json();
        setSlots(data.slots); // Assume backend returns { slots: [{ id, isOccupied }] }
      } catch (error) {
        console.error("Error fetching slots:", error);
      }
    };
    fetchSlots();
  }, []);

  // Handle slot click to toggle status
  const handleClick = async (index) => {
    const updatedSlots = [...slots];
    updatedSlots[index].isOccupied = !updatedSlots[index].isOccupied;

    // Update state and Redux
    setSlots(updatedSlots);
    updatedSlots[index].isOccupied ? dispatch(spaceFill()) : dispatch(spaceEmpty());

    // Send update to backend
    try {
      await fetch(`/api/v1/slots/${updatedSlots[index].id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isOccupied: updatedSlots[index].isOccupied }),
      });
    } catch (error) {
      console.error("Error updating slot status:", error);
    }
  };

  // Render
  return (
    <div className="bg-primary w-full h-fit mt-20 p-10 pb-20 flex flex-col justify-around gap-6">
      <div>
        <p className="font-bosch text-4xl bg-[#E2E2D2] p-4 rounded-full h-fit w-1/3 text-center bold">
          Available Slots: {12 - space}/8
        </p>
      </div>
      {["First Floor", "Second Floor"].map((floor, floorIndex) => (
        <div
          key={floorIndex}
          className="flex bg-[#141321] w-[90%] rounded-2xl h-fit p-5 gap-3"
        >
          <p className="font-adventure text-5xl my-auto w-1/2 text-white flex justify-center items-center">
            {floor} :
          </p>
          <div className="flex flex-wrap w-3/5 h-auto border-2 border-slate-600 gap-3 p-4 rounded-lg">
            {[0, 1, 2, 3].map((index) => {
              const slotIndex = floorIndex * 4 + index;
              const slot = slots[slotIndex];

              return slot ? (
                <div
                  key={slot.id}
                  onClick={() => handleClick(slotIndex)}
                  className={`${
                    slot.isOccupied ? "bg-red-800" : "bg-green-800"
                  } w-32 h-40 rounded-xl cursor-pointer`}
                ></div>
              ) : (
                <div
                  key={index}
                  className="bg-gray-500 w-32 h-40 rounded-xl"
                ></div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slot;
