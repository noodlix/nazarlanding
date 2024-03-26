"use client";
import React from "react";

export const Video = () => {
  return (
    <div className="mb-24">
      <h1 className="text-center text-3xl font-extrabold mb-6">demo</h1>
      <iframe
        width="540px"
        height="360px"
        src="https://www.youtube.com/embed/gZWNBIaZ0Jc?si=Bbf4Nob9YMcJJjfr"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
