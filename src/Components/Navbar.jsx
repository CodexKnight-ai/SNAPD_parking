import React from "react";

function Navbar() {
  return (
    <div className="w-screen h-14 bg-blue-950 top-0 shadow-2xl shadow-blue-500/20 flex px-6 py-1">
      <div className="w-1/4 h-full flex gap-1 items-center justify-left">
        <img className="h-full w-auto rounded-full" src="/public/logo.png" alt="Logo" />
        <p className="text-white text-3xl font-adventure">Parking System</p>
      </div>
      <ul className="w-1/2 flex justify-around items-center text-white text-lg font-poppins">
        <li>Home</li>
        <li>Slots</li>
        <li>Project Report</li>
        <li>About Us</li>
      </ul>
      <ul className="w-1/4 flex justify-end items-center text-white text-lg gap-4">
        <li>SignUp</li>
        <li>Login</li>
      </ul>
    </div>
  );
}

export default Navbar;
