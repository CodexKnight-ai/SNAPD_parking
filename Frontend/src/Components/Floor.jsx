import React from "react";

function Floor({ fname }) {
  return (
    <div className="flex bg-[#141321] w-[90%] rounded-2xl h-fit p-5 gap-3">
      <p className="font-adventure text-5xl my-auto w-1/2 text-white flex justify-center items-center">
        {fname} :
      </p>
      <div className="flex flex-col w-3/5 h-auto border-2 border-slate-600 gap-3 p-4">
        <div className="flex gap-14 justify-center">
          <div className="bg-slate-500 w-32 h-40 rounded-3xl"></div>
          <div className="bg-slate-500 w-32 h-40 rounded-3xl"></div>
        </div>
        <div className="flex gap-6 justify-between">
          <div className="bg-slate-500 w-40 h-32 rounded-3xl"></div>
          <div className="bg-slate-500 w-40 h-32 rounded-3xl"></div>
        </div>
        <div className="flex gap-6 justify-between bg-slate-800 font-poppins text-2xl mt-6">
          <span className="bg-slate-600 w-1/4 h-14 text-white text-center my-auto">
            Gate 1
          </span>
          {fname !== "Second Floor" && (
            <span className="bg-slate-600 w-1/4 h-14 text-white text-center my-auto">
              Gate 2
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Floor;
