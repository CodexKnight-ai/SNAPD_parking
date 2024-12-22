import React from "react";

function Footer() {
  return (
    <div className="flex flex-col overflow-hidden w-full">
      {/* Top Section */}
      <div className="bg-[#C1C1BD] w-full flex flex-col sm:flex-row justify-between px-6 sm:px-10 py-4 sm:py-2 gap-4">
        {/* Logo Section */}
        <div className="flex flex-col items-center sm:items-start sm:w-1/3">
          <img
            className="h-16 w-auto sm:h-20 rounded-full"
            src="/logo.png"
            alt="Logo"
          />
          <span className="font-adventure text-gray-700 text-xl sm:text-3xl mt-2">
            Parking System
          </span>
        </div>

        {/* Course Info */}
        <p className="font-poppins text-gray-700 text-center sm:text-left text-sm sm:text-base my-auto">
          ENR 206 Sensors, Instruments, and Experimentation, 2024
        </p>

        {/* Resources and Contact Us */}
        <div className="flex flex-col sm:flex-row sm:gap-8 w-full sm:w-fit">
          <div className="w-full sm:w-auto">
            <h3 className="font-poppins text-base sm:text-lg">Resources</h3>
            <ul className="font-poppins text-sm text-gray-700">
              <li>Project report</li>
              <li>Gallery</li>
              <li>
                Code:
                <a
                  href="https://github.com/CodexKnight-ai/SNAPD_parking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-gray-700 hover:text-blue-600 ml-1"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-auto mt-4 sm:mt-0">
            <h3 className="font-poppins text-base sm:text-lg">Contact Us</h3>
            <ul className="font-poppins text-sm text-gray-700">
              <li>aaryan.k@ahduni.edu.in</li>
              <li>dhruval.b@ahduni.edu.in</li>
              <li>nirav.s@ahduni.edu.in</li>
              <li>priyanshu.v@ahduni.edu.in</li>
              <li>subrat.j@ahduni.edu.in</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full h-auto p-3 bg-[#121212] font-poppins text-center text-[#dcd8d8] text-sm sm:text-base">
        Designed and Developed by{" "}
        <a
          href="https://www.linkedin.com/in/subrat-jain-70078b267"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          Subrat Jain
        </a>
        .
      </div>
    </div>
  );
}

export default Footer;
