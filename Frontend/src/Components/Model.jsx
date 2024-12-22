import Spline from "@splinetool/react-spline";
export default function Model() {
  return (
    <div className="mt-20 w-screen h-screen flex flex-col md:flex-row justify-center items-center bg-slate-900 mt-20">
      <div className="mt-20 relative backdrop-blur-md bg-gray-700/70 w-4/5 md:w-1/3 h-fit p-5 font-poppins rounded-3xl text-center md:text-left">
        <span className="block text-[#0983C8] text-2xl md:text-4xl">
          Take a look at
        </span>
        <p className="text-[#e6eff1] text-xl md:text-3xl mt-2">
          SNAPD Automatic Parking System
        </p>
      </div>
      <div className="w-full h-full md:w-2/3">
        <Spline
          className="w-full h-full custom-cursor"
          scene="https://prod.spline.design/znzYHKkuQViQpRXZ/scene.splinecode"
        />
      </div>
    </div>
  );
}
