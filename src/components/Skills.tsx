import React from 'react';

function Skills() {
  return (
    <div className="min-h-screen bg-black text-stone-300 px-6 md:px-16 py-12 flex flex-col gap-10">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
        My<span className="text-yellow-500">Skills</span>
      </h1>

      {/* Skills Container */}
      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* Technical Skills */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold underline mb-6 text-center md:text-left">Technical Skills</h2>
          <div className="space-y-6">
            {[
              { name: "MongoDB", value: 90 },
              { name: "Node js", value: 85 },
              { name: "JavaScript", value: 75 },
              { name: "Java", value: 79 },
              { name: "React", value: 80 }
            ].map(skill => (
              <div key={skill.name}>
                <div className="flex items-center gap-2">
                  <span className="w-24">{skill.name}</span>
                  <div className="w-full bg-gray-700 h-2 rounded overflow-hidden relative">
                    <div
                      className="bg-teal-500 h-full"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                  <span className="ml-2 text-sm bg-black text-white px-2 rounded">{skill.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold underline mb-6 text-center md:text-left">Professional Skills</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { name: "Creativity", value: 90 },
              { name: "Communication", value: 75 },
              { name: "Problem Solving", value: 80 },
              { name: "Team work", value: 85 }
            ].map(skill => (
              <div key={skill.name} className="flex flex-col items-center">
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#000"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#14b8a6"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (251.2 * skill.value) / 100}
                      transform="rotate(-90 48 48)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-bold">
                    {skill.value}%
                  </div>
                </div>
                <span className="mt-2">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;
