import React from "react";
import Floor from "./Floor";

function Slot() {
  return (
    <div className="bg-primary w-full h-fit mt-20 p-10 pb-20 flex flex-col justify-around gap-6">
      <div>
        <p className="font-bosch text-4xl bg-[#E2E2D2] p-4 rounded-full h-fit w-1/3 text-center bold">
          Available Slots: 12/12
        </p>
      </div>
      <Floor fname='Ground Floor'/>
      <Floor fname='First Floor'/>
      <Floor fname='Second Floor'/>

    </div>
  );
}

export default Slot;
