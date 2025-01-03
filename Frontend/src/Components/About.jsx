import React from "react";
import Name from "./Name";

function About() {
  return (
    <div className="bg-primary w-full h-fit mt-20 p-10">
      <div className="w-full h-fit px-10 py-4">
        <h1 className="font-adventure text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
          What the heck is SNAPD?
        </h1>
        <h3 className="font-poppins text-white text-lg sm:text-xl md:text-2xl flex gap-5 items-center">
          It’s just the first letters of our names, because we were unable to
          find anything else!
          <span>
            <img className="h-16 w-auto min-w-10 sm:h-20 md:h-24 rounded-md" src="/smileCat.png" />
          </span>
        </h3>
      </div>
      <div className="flex flex-col gap-8 sm:gap-6 md:gap-8 lg:gap-10">
        <Name 
          src="/Subrat.png"
          name="Subrat Jain"
          enrollment="AU2340157"
          course="BTech Computer Science"
          email="subrat.j@ahduni.edu.in"
        />
        <Name 
          src="/Nirav.jpg"
          name="Nirav Shah"
          enrollment="AU2340118"
          course="BTech Computer Science"
          email="nirav.s@ahduni.edu.in"
        />
        <Name 
          src="/Aaryan.png"
          name="Aaryan Kothari"
          enrollment="AU2340260"
          course="BTech Computer Science"
          email="aaryan.k@ahduni.edu.in"
        />
        <Name 
          src="/Priyanshu.png"
          name="Priyanshu Varshney"
          enrollment="AU2340158"
          course="BTech Chemical"
          email="priyanshu.v@ahduni.edu.in"
        />
        <Name 
          src="/Dhruval.png"
          name="Dhruval Barad"
          enrollment="AU2340236"
          course="BTech Computer Science"
          email="dhruval.b@ahduni.edu.in"
        />
      </div>
    </div>
  );
}

export default About;
