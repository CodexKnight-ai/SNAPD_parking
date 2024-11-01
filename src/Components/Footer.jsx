import React from "react";

function Footer() {
  return (
    <div className="flex flex-col overflow-hidden w-full">
      <div className="bg-[#E2E2D2] w-full flex justify-between px-10 py-2">
        <div className="w-fit">
          <div className="flex items-center">
            <img
              className="h-20 w-auto rounded-full"
              src="/logo.png"
              alt="Logo"
            />
            <span className="font-adventure text-gray-700 text-3xl ml-4">
              Parking System
            </span>
          </div>
        </div>
        <p className="w-fit h-auto my-auto font-poppins text-gray-700">
          ENR 206 Sensors, Instruments and Experimentation, 2024
        </p>
        <div className="w-fit flex gap-8">
          <div className="w-auto">
            <h3 className="font-poppins text-lg">Resources</h3>
            <ul className="font-poppins text-sm text-gray-700">
              <li>Project report</li>
              <li>Gallery</li>
              <li>
                Code:
                <a
                  href="https://github.com/CodexKnight-ai/SNAPD_parking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-gray-700 hover:text-blue-400"
                >
                  {" "}Github
                </a>
              </li>
            </ul>
          </div>
          <div className="w-auto">
            <h3 className="font-poppins text-lg">Contact us</h3>
            <ul className="font-poppins text-sm text-gray-700">
              <li>aaryan.k@ahduni.edu.in</li>
              <li>dhruval.b@ahduni.edu.in</li>
              <li>subrat.j@ahduni.edu.in</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-auto p-3 bg-[#121212] font-poppins text-center text-white">
        Designed and Developed by{" "}
        <a
          href="https://www.linkedin.com/in/subrat-jain-70078b267"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-white hover:text-blue-400"
        >
          Subrat Jain
        </a>
        .
      </div>
    </div>
  );
}

export default Footer;
