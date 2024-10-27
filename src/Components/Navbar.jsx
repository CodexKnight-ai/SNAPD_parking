import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-20 p-4 bg-[#C51F5D] top-0 fixed shadow-2xl shadow-blue-500/20 flex px-6">
      <div className="w-1/4 h-full flex gap-1 items-center justify-start">
        <img className="h-full w-auto rounded-full" src="/public/logo.png" alt="Logo" />
        <p className="text-white text-3xl font-adventure">Parking System</p>
      </div>
      <ul className="w-1/2 flex justify-around items-center text-white text-lg font-poppins">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              `px-4 py-2  ${isActive ? 'bg-green-700 rounded-full' : ''}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/slot" 
            className={({ isActive }) =>
              `px-4 py-2  ${isActive ? 'bg-green-700 rounded-full' : ''}`
            }
          >
            Slots
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/project-report" 
            className={({ isActive }) =>
              `px-4 py-2 ${isActive ? 'bg-green-700 rounded-full' : ''}`
            }
          >
            Project Report
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about-us" 
            className={({ isActive }) =>
              `px-4 py-2 ${isActive ? 'bg-green-700 rounded-full' : ''}`
            }
          >
            About Us
          </NavLink>
        </li>
      </ul>
      <ul className="w-1/4 flex justify-end items-center text-white text-lg gap-4">
        <li>SignUp</li>
        <li>Login</li>
      </ul>
    </div>
  );
}

export default Navbar;
