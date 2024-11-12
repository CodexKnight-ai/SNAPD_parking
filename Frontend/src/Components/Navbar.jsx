import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; 
import { logout } from '../store/authSlice'; 

function Navbar() {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  // const name=useSelector((state)=>state.auth.userData);
  const { status, userData } = useSelector((state) => state.auth); 

  const handleLogout = () => {
    dispatch(logout()); 
    navigate('/login'); 
  };

  return (
    <div className="w-full h-20 p-4 bg-navbar top-0 fixed shadow-xl shadow-black flex px-6 z-50">
      <div className="w-1/3 h-full flex gap-1 items-center justify-start">
        <img className="h-full w-auto rounded-full" src="/logo.png" alt="Logo" />
        <p className="text-white text-4xl font-bosch">Parking System</p>
      </div>
      
      {/* Navigation links for larger screens */}
      <ul className="w-1/2 flex justify-around items-center text-white text-lg font-poppins hidden md:flex">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              `px-4 py-2 ${isActive ? 'bg-blue-900 rounded-full' : ''}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/slot" 
            className={({ isActive }) =>
              `px-4 py-2 ${isActive ? 'bg-blue-900 rounded-full' : ''}`
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
      
      {/* Right-side user status (Login/Logout) */}
      <ul className="w-1/4 flex justify-end items-center text-black text-lg gap-4 font-poppins">
        {status ? ( 
          <>
            <li className="text-white">Welcome, {userData?.user?.username}</li>
            <li 
              className="bg-[#00CED1] px-4 py-2 rounded-full hover:bg-[#00BFFF] cursor-pointer" 
              onClick={handleLogout}
            >
              Logout
            </li>
          </>
        ) : (
          <>
            <li className="bg-[#00CED1] px-4 py-2 rounded-full hover:bg-[#00BFFF]">
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li className="bg-[#00CED1] px-4 py-2 rounded-full hover:bg-[#00BFFF]">
              <NavLink to='/signup'>SignUp</NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
