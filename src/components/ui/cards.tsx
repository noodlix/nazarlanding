"use client";
import React, { useRef } from "react";
import { HoverEffect } from "../ui/card-hover-effect";


export const Cards = () => {
    return (
      <div className="h-[30rem] md:h-[50rem] w-full flex items-center justify-center relative">
        <div className="h-[20rem] md:h-[30rem] relative w-4/5 flex items-center justify-center">
        
      <HoverEffect items={projects} />


        </div>
      </div>
    );
  };


export const projects = [
  {
    title: "img1",
    src:"/images/img1.png",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "img2",
    src:"/images/img2.png",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "img3",
    src:"/images/img3.png",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "img4",
    src:"/images/img4.png",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  }
];
