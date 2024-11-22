import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { spaceEmpty, spaceFill } from "../store/occupySlice";

function Slot() {
  const { space } = useSelector((state) => state.occupy);
  const dispatch = useDispatch();

  // State for slots
  const [slots, setSlots] = useState([]);

  // Fetch slots from the backend
  const fetchSlots = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/slots/");
      const slotArr = response.data.statuses;
      setSlots(slotArr);

      // Update Redux state based on slots
      const occupiedSlots = slotArr.filter((slot) => slot.isOccupied).length;
      dispatch({ type: "occupy/spaceFill", payload: occupiedSlots });
    } catch (error) {
      console.error("Error fetching slots:", error);
    }
  };

  // Fetch slot statuses every 3 seconds
  useEffect(() => {
    fetchSlots(); // Fetch initially
    const interval = setInterval(fetchSlots, 3000); // Fetch every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Handle slot click to toggle status
  const handleClick = async (index) => {
    const updatedSlots = [...slots];
    const slot = updatedSlots[index];

    // Toggle the status of the clicked slot
    slot.isOccupied = !slot.isOccupied;

    // Update state and Redux
    setSlots(updatedSlots);
    slot.isOccupied ? dispatch(spaceFill()) : dispatch(spaceEmpty());

    // Send the updated status to the backend
    try {
      await fetch(`/api/v1/slots/${slot.slotNumber}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isOccupied: slot.isOccupied }),
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
          Available Slots: {8 - space}/8
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
                  key={slot.slotNumber}
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
