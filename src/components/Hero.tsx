import React from 'react';
import { Button } from "./ui/moving-border";
import profileImg from './../../public/next.svg'; // Replace with your actual image path
import { FaGithub, FaLinkedin, FaTwitter, FaGamepad } from 'react-icons/fa';
import { BackgroundBeams } from "../components/ui/background-beams";

function Hero() {

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-stone-300 antialiased px-6 md:px-16 py-10 flex items-center justify-center">
      
      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl z-10">
        
        {/* Left: Text Section */}
        <div className="md:w-1/2 space-y-6 text-left">
          <h2 className="text-2xl font-semibold text-white">Hello, It's Me</h2>
          <h1 className="text-5xl font-extrabold text-gray-200">SWATI KUMARI</h1>
          <h2 className="text-2xl font-medium">
            And I'm a <span className="text-yellow-500">Full Stack Developer</span>
          </h2>
          <p className="text-base text-gray-400 leading-relaxed">
            I'm a full stack web developer with experience in website creation,
            freelancing, and open-source contributions and many more...
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-2">
            <a href="#" className="text-xl border border-gray-600 p-2 rounded-full hover:bg-gray-700"><FaGithub /></a>
            <a href="#" className="text-xl border border-gray-600 p-2 rounded-full hover:bg-gray-700"><FaLinkedin /></a>
            <a href="#" className="text-xl border border-gray-600 p-2 rounded-full hover:bg-gray-700"><FaTwitter /></a>
            <a href="#" className="text-xl border border-gray-600 p-2 rounded-full hover:bg-gray-700"><FaGamepad /></a>
          </div>
             


          {/* Download Resume Button */}
          <div>
            {/* <button className="mt-6 px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
              Download Resume
            </button> */}
            <Button
        borderRadius="1.75rem"
        className=" bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Download Resume
      </Button>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <div className="p-1 rounded-xl bg-[#1c1c1c] shadow-xl">
            <img
              src={profileImg}
              alt="Swati Kumari"
              className="rounded-xl w-80 h-80 object-cover"
            />
          </div>
        </div>
      </div>
      {/* Background Grid and Radial Gradient */}
      <BackgroundBeams />
    </div>
  );
}

export default Hero;
