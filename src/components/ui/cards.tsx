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
      "A technology company that builds economic infrastructure for the internet.",
    link: "",
  },
  {
    title: "Gathering quantitative data on emotions",
    src: "/images/img3.png",
    description: "",
    link: "",
  },
  {
    title: "Face Emotion Recognition",
    src: "/images/img4.png",
    description: "Facial emotions are recognized",
    link: "",
  },
  {
    title: "AI Interpretation",
    src: "/images/img2.png",
    description:
      "Analyze data using GPT4, get extensive description of effectiveness of each teaching method, create personalized learning strategies",
    link: "",
  },
];
