"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function Hero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <span className="text-4xl md:text-[6rem] font-extrabold mt-1 leading-none">
              nazar.ai
            </span>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              student academic performance tracker <br />
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "Manu Arora",
    designation: "Founder, Algochurn",
    image:
      "https://us.images.westend61.de/0001742294pw/pretty-teenage-student-paying-attention-to-lecture-in-classroom-woman-studying-at-the-college-classroom-JLPSF15367.jpg",
    badge: "Mentor",
  },
];
