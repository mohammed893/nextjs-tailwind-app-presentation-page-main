"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Expert Therapists",
    children:
      "Connect with certified therapists who specialize in posture correction and personalized wellness plans.",
  },
  {
    icon: HeartIcon,
    title: "Interactive Posture Monitoring",
    children:
      "Use our wearable FlexiDevice and app to track your posture, get real-time feedback, and see progress over time.",
  },
  {
    icon: LockClosedIcon,
    title: "Personalized Therapy Plans",
    children:
      "Receive tailored therapy routines based on your posture data to improve your comfort and mobility.",
  },
  {
    icon: LightBulbIcon,
    title: "Progress Tracking & Insights",
    children:
      "Track your posture improvements and receive actionable insights, helping you stay motivated and pain-free.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        Your Posture Correction & Therapy App
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        Comprehensive Posture Solutions
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Assess your posture, track your progress,
           and access therapy resources on the go. Whether at home or on the move, FlexiScan fits seamlessly into your lifestyle.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
