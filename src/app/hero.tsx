"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <span className="text-4xl md:text-[6rem] font-extrabold mt-1 leading-none">
              nazar.ai
            </span>
            <h1 className="text-3xl text-black dark:text-white">
              student academic performance tracker <br />
            </h1>
          </>
        }
      >
        <Image
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          src="/classroom.avif"
        />
      </ContainerScroll>
    </div>
  );
}

export const users = [
  {
    name: "Manu Arora",
    designation: "Founder, Algochurn",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3Nyb29tfGVufDB8fDB8fHww",
    badge: "Mentor",
  },
];
