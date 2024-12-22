import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isAuthenticated = useSelector((state) => state.auth.status);
  const name = useSelector((state) => state.auth.userData?.user?.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/"); // Redirect if already logged in
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill out both fields.");
      return;
    }
    if (!acceptedTerms) {
      alert("Please accept the terms and conditions.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "https://snapd-parking-1.onrender.com/api/v1/users/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      dispatch(login(response.data));
      alert(`Welcome ${response.data.user.username}`);
      navigate("/");           
    } catch (error) {
      console.error("Login error:", error);
      setError(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[url('/authWallpaper.jpg')] bg-cover bg-center w-full h-screen mt-10 flex justify-center items-center">
      <div className="w-1/2 h-4/5 bg-gray-900/80 px-16 py-6 rounded-xl shadow-lg">
        <div className="w-full h-1/5 flex justify-center items-center">
          <img
            className="h-20 w-auto rounded-full"
            src="/logo.png"
            alt="Logo"
          />
        </div>
        <p className="text-blue-700 font-poppins text-center text-2xl mb-2">
          Welcome to SNAPD Automatic Parking System
        </p>
        <p className="text-gray-200 font-poppins text-center text-lg mb-10">
          Credentials are used for authentication. All saved data will be stored
          in our database.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <input
              className="bg-blue-950 px-8 py-4 rounded-3xl text-white placeholder-gray-400"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              className="bg-blue-950 px-8 py-4 rounded-3xl text-white placeholder-gray-400"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={acceptedTerms}
                onChange={() => setAcceptedTerms(!acceptedTerms)}
                className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 rounded cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="text-gray-200 font-poppins text-sm"
              >
                I accept the{" "}
                <NavLink
                  to="/terms-and-conditions"
                  className="text-blue-500 underline"
                >
                  Terms and Conditions
                </NavLink>
              </label>
            </div>
            <button
              type="submit"
              disabled={!acceptedTerms || loading}
              className={`${
                acceptedTerms && !loading
                  ? "bg-blue-900 hover:bg-blue-800"
                  : "bg-gray-600 cursor-not-allowed"
              } text-white rounded-full px-8 py-4 text-xl font-poppins transition duration-200 ease-in-out`}
            >
              {loading ? "Submitting..." : "Login"}
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
