"use client";
import React, { useRef } from "react";
import { HoverEffect } from "../ui/card-hover-effect";

export const Cards = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-4/5 flex items-center justify-center">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export const projects = [
  {
    title: "Head pose Estimation",
    src: "/images/img1.png",
    description:
      "Analysis of students' head positions and facial expressions in real-time to gauge attentiveness.",
    link: "",
  },
  {
    title: "Gathering quantitative data on emotions",
    src: "/images/img3.png",
    description: "Dynamic graph mapping the range and intensity of emotions recognized by the app throughout a class session.",
    link: "",
  },
  {
    title: "Face Emotion Recognition",
    src: "/images/img4.png",
    description: "A histogram that provides a statistical breakdown of the frequency of each emotion detected during a class.",
    link: "",
  },
  {
    title: "AI Interpretation",
    src: "/images/img2.png",
    description:
      " The app gives GPT-4s analysis and feedback based on the data collected from the classroom, get extensive description of effectiveness of each teaching method, create personalized learning strategies",
    link: "",
  },
];
