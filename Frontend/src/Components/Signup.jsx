import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    setError(null);

    try {
      const response = await axios.post("http://localhost:4000/api/v1/users/sign-up", {
        username: username.toLowerCase(),
        email,
        password,
      });

      alert("Registration successful!");
      console.log(response.data);
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[url('/authWallpaper.jpg')] bg-cover bg-center w-full h-screen mt-10 flex justify-center items-center">
      <div className="w-1/2 h-4/5 bg-gray-900/80 px-16 py-6 rounded-xl shadow-lg">
        <div className="w-full h-1/5 flex justify-center items-center">
          <img className="h-20 w-auto rounded-full" src="/logo.png" alt="Logo" />
        </div>
        <p className="text-blue-700 font-poppins text-center text-2xl mb-2">Welcome to SNAPD Automatic Parking System</p>
        <p className="text-gray-200 font-poppins text-center text-lg mb-10">
          Credentials are used for authentication. All saved data will be stored in our database.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <input
              className="bg-blue-950 px-8 py-4 rounded-3xl text-white placeholder-gray-400"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
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
              <label htmlFor="terms" className="text-gray-200 font-poppins text-sm">
                I accept the <NavLink to='/terms-and-conditions' className="text-blue-500 underline">Terms and Conditions</NavLink>
              </label>
            </div>
            <button
              type="submit"               
              disabled={!acceptedTerms || loading}
              className={`${
                acceptedTerms && !loading ? "bg-blue-900 hover:bg-blue-800" : "bg-gray-600 cursor-not-allowed"
              } text-white rounded-full px-8 py-4 text-xl font-poppins transition duration-200 ease-in-out`}
            >
              {loading ? "Submitting..." : "SignUp"}
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;