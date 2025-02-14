"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

export function FixedPlugin() {
  return (
    <a href="" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Material Tailwind"
          src='/image/carecode.webp'
        />{" "}
        CareCode
      </Button>
    </a>
  );
}
