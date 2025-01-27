"use client";

import React from "react";
import Image from "next/image";
import { IconButton } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/outline";


export function VideoIntro() {
  return (
    <div className="p-8">
      <div className="w-full container px-5 overflow-hidden rounded-xl relative mx-auto mt-20 max-w-6xl ">
        <div className="bg-black/25 z-10 absolute w-full h-full inset-0 rounded-xl" />
        <Image
          width={768}
          height={400}
          src="/image/untitled3.png"
          className="w-full object-cover scale-110 rounded-xl h-full"
          alt=""
        />
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10">
        <a href="https://youtube.com" target="_blank">
        <IconButton color="white" className="rounded-full" size="lg"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <PlayIcon className="h-6 w-6" />
          </IconButton>
        </a>
          
        </div>
      </div>
    </div>
  );
}

export default VideoIntro;