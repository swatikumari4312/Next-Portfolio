import React from 'react';
import Image from 'next/image';
import profilePic from './../../public/window.svg';  // Replace with your image path

export default function About() {
  return (
    <div className="min-h-screen bg-black text-stone-300 px-6 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={profilePic}
          alt="Swati Kumari"
          className="rounded-lg shadow-lg object-cover"
          width={400}
          height={500}
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-white mb-2">
          About<span className="text-yellow-500">Me</span>
        </h1>
        <h3 className="text-xl font-semibold text-white mb-6">
          Full stack developer
        </h3>
        <p className="leading-relaxed text-sm md:text-base text-gray-200">
          Hi, I'm Swati Kumari, a <span className="text-yellow-500 font-semibold">Full Stack Web Developer</span> passionate about transforming ideas into immersive digital experiences. I specialize in building <span className="text-yellow-500">responsive websites</span> and <span className="text-yellow-500">dynamic web applications</span> that blend stunning design with seamless functionality.
          <br /><br />
          With expertise in <span className="text-yellow-500">HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB</span>, I craft pixel-perfect interfaces and efficient backend solutions that ensure smooth interactions and optimized performance. My strong foundation in <span className="text-yellow-500">UI/UX design principles</span> allows me to create intuitive, accessible user interfaces that prioritize both user experience and technical excellence.
          <br /><br />
          In addition to developing <span className="text-yellow-500">two fully functional websites</span>, I’ve contributed to <span className="text-yellow-500">open-source projects</span> through <span className="text-yellow-500">GSSoC</span> and taken on <span className="text-yellow-500">freelance projects</span>, delivering innovative solutions that exceed client expectations.
          <br /><br />
          I’m constantly exploring cutting-edge technologies to build <span className="text-yellow-500">user-centric applications</span> that make a meaningful impact. Let’s connect to discuss how I can bring your next digital project to life!
        </p>
      </div>
    </div>
  );
}
