import React from 'react';
import { HoverEffect } from "./ui/card-hover-effect";
import { projects } from "../data/data";
import { cn } from "@/lib/utils";

function Services() {
  return (
    <div className="bg-black relative min-h-[50rem] flex items-center justify-center">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-white text-center items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-10 px-4">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          My<span className="text-yellow-500">Services</span>
        </h1>

        <div className="max-w-5xl w-full px-4">
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  );
}

export default Services;
