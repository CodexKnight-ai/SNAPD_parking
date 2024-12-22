import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; 
import { logout } from '../store/authSlice'; 

function Navbar() {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const { status, userData } = useSelector((state) => state.auth); 

  const handleLogout = () => {
    dispatch(logout()); 
    navigate('/login'); 
  };

  return (
    <div className="w-full h-20 px-4 bg-navbar fixed top-0 shadow-lg flex items-center justify-between z-50 shadow-primary">
      {/* Logo and Title */}
      <div className="flex items-center gap-2">
        <img 
          className="h-12 w-12 sm:h-16 sm:w-16 rounded-full" 
          src="/logo.png" 
          alt="Logo" 
        />
        <p className="text-white text-lg sm:text-xl lg:text-2xl font-bosch">Parking System</p>
      </div>
      
      {/* Navigation Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `px-4 py-2 rounded-md text-sm sm:text-base lg:text-lg ${isActive ? 'bg-blue-900 text-white' : 'text-gray-200 hover:text-white'}`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/slot" 
          className={({ isActive }) => 
            `px-4 py-2 rounded-md text-sm sm:text-base lg:text-lg ${isActive ? 'bg-blue-900 text-white' : 'text-gray-200 hover:text-white'}`
          }
        >
          Slots
        </NavLink>
        <NavLink 
          to="/project-report" 
          className={({ isActive }) => 
            `px-4 py-2 rounded-md text-sm sm:text-base lg:text-lg ${isActive ? 'bg-blue-900 text-white' : 'text-gray-200 hover:text-white'}`
          }
        >
          Project Report
        </NavLink>
        <NavLink 
          to="/about-us" 
          className={({ isActive }) => 
            `px-4 py-2 rounded-md text-sm sm:text-base lg:text-lg ${isActive ? 'bg-blue-900 text-white' : 'text-gray-200 hover:text-white'}`
          }
        >
          About Us
        </NavLink>
      </div>

      {/* User Actions */}
      <div className="flex gap-4 items-center">
        {status ? (
          <>
            <p className="hidden sm:block text-sm text-white">Welcome, {userData?.user?.username}</p>
            <button 
              onClick={handleLogout} 
              className="bg-teal-500 text-white px-3 py-2 rounded-md text-sm hover:bg-teal-400"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink 
              to="/login" 
              className="bg-teal-500 text-white px-3 py-2 rounded-md text-sm hover:bg-teal-400"
            >
              Login
            </NavLink>
            <NavLink 
              to="/signup" 
              className="bg-teal-500 text-white px-3 py-2 rounded-md text-sm hover:bg-teal-400"
            >
              SignUp
            </NavLink>
          </>
        )}
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button className="text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M4 6h16M4 12h16m-7 6h7" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
