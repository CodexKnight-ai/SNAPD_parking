import React from "react";

function Footer() {
  return (
    <div className="flex flex-col overflow-hidden w-full ">
      <div className="bg-[#C1C1BD] w-full flex justify-between px-10 py-2">
        <div className="w-fit">
          <div className="flex flex-col items-center w-1/3">
            <img
              className="h-20 w-auto rounded-full"
              src="/logo.png"
              alt="Logo"
            />
            <span className="font-adventure text-gray-700 text-3xl pl-4">
              Parking System
            </span>
          </div>
        </div>
        <p className="w-fit h-auto my-auto font-poppins text-gray-700 ">
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
                  className="underline text-gray-700 hover:text-blue-600"
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
              <li>nirav.s@ahduni.edu.in</li>
              <li>priyanshu.v@ahduni.edu.in</li>
              <li>subrat.j@ahduni.edu.in</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-auto p-3 bg-[#121212] font-poppins text-center text-[#dcd8d8]">
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
      </div> */}
    </div>
  );
}

export default Footer;
