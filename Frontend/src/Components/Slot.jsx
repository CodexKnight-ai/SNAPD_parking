import React, { useState, useEffect } from "react";
import axios from "axios";
import Floor from "./Floor";

function Slot() {
  // State for slots
  const [slots, setSlots] = useState([true, true, true, true, true, true]);
  const [availableSlot, setAvailableSlot] = useState(0);

  // Calculate available slots whenever `slots` state changes
  useEffect(() => {
    const count = slots.filter((slot) => !slot).length; // Count the number of `false` slots
    setAvailableSlot(count);
  }, [slots]);

  // Fetch slots from the backend
  const fetchSlots = async () => {
    try {
      const response = await axios.get(
        "https://snapd-parking-1.onrender.com/api/v1/slots/"
      );
      const slotArr = response.data.statuses;
      setSlots(slotArr);

      // Update available slots
      const occupiedSlots = slotArr.filter((slot) => slot.isOccupied).length;
      setAvailableSlot(6 - occupiedSlots);
    } catch (error) {
      console.error("Error fetching slots:", error);
    }
  };

  // Fetch slot statuses every 1 second
  useEffect(() => {
    fetchSlots(); // Fetch initially
    const interval = setInterval(fetchSlots, 1000); // Fetch every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Split slots for first and second floors
  const firstSlots = [slots[0], true, slots[1], true]; // First 2 actual slots + 2 dummy slots
  const secondSlots = slots.slice(2); // Remaining slots for the second floor

  // Render
  return (
    <div className="bg-primary w-full h-fit mt-20 p-6 sm:p-10 pb-10 flex flex-col justify-around gap-6">
      {/* Available Slots Indicator */}
      <div className="flex justify-center">
        <p className="font-bosch text-lg sm:text-2xl md:text-4xl bg-[#E2E2D2] p-3 sm:p-4 rounded-full shadow-black shadow-lg h-fit w-fit text-center font-bold">
          Available Slots: {availableSlot}/8
        </p>
      </div>
      
      {/* Floors */}
      <Floor name="First Floor" slotArr={firstSlots} />
      <Floor name="Second Floor" slotArr={secondSlots} />
    </div>
  );
}

export default Slot;
