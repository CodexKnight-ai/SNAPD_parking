import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-20 p-4 bg-navbar top-0 fixed shadow-xl shadow-black flex px-6">
      <div className="w-1/3 h-full flex gap-1 items-center justify-start">
        <img className="h-full w-auto rounded-full" src="/public/logo.png" alt="Logo" />
        <p className="text-white text-4xl font-bosch">Parking System</p>
      </div>
      <ul className="w-1/2 flex justify-around items-center text-white text-lg font-poppins">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              `px-4 py-2  ${isActive ? 'bg-blue-900 rounded-full' : ''}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/slot" 
            className={({ isActive }) =>
              `px-4 py-2  ${isActive ? 'bg-blue-900 rounded-full' : ''}`
            }
          >
            Slots
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/project-report" 
            className={({ isActive }) =>
              `px-4 py-2 ${isActive ? 'bg-blue-900 rounded-full' : ''}`
            }
          >
            Project Report
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about-us" 
            className={({ isActive }) =>
              `px-4 py-2 ${isActive ? 'bg-blue-900 rounded-full' : ''}`
            }
          >
            About Us
          </NavLink>
        </li>
      </ul>
      <ul className="w-1/4 flex justify-end items-center text-black text-lg gap-4 font-poppins">
        <li className="bg-[#92E1E2] px-4 py-2 rounded-full">SignUp</li>
        <li className="bg-[#92E1E2] px-4 py-2 rounded-full">Login</li>
      </ul>
    </div>
  );
}

export default Navbar;
