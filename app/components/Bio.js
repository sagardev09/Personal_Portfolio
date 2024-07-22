/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import myimg from "../../public/self.jpg";

export function Bio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative  w-full bg-black/[0.96] overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-white/[0.06] z-0" />

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Image */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            <Image
              src={myimg}
              alt="Profile"
              width={400}
              height={600}
              className="rounded-lg object-cover shadow-2xl"
            />
            <div className="absolute -inset-0.5 bg-white/[0.05] rounded-lg blur opacity-30" />
            <div className="absolute -inset-1 bg-blue-500/[0.05] rounded-lg blur opacity-30 animate-pulse" />
          </div>
        </div>

        {/* Bio content */}
        <div
          className={`max-w-2xl transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h1 className="text-3xl font-bold text-white mb-6">Short Bio</h1>
          <p className="text-lg text-neutral-300 leading-relaxed">
            {"I'm"} a{" "}
            <span className="text-red-500 font-semibold">
              product maker (UI/UX designer and front-end developer)
            </span>{" "}
            currently based in Haryana, India. I'm passionate about{" "}
            <span className="text-blue-500 font-semibold">
              building products
            </span>{" "}
            that help people and make a difference in the world.
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed mt-4">
            I'm also a big fan of{" "}
            <span className="text-green-500 font-semibold">
              open source software
            </span>{" "}
            - which is why almost everything I build is open source! I love
            educating others about{" "}
            <span className="text-purple-500 font-semibold">
              technology and programming
            </span>
            , which is why I'm a content creator and write blogs in my free
            time.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-[5%] left-[5%] w-36 h-36 bg-white rounded-full blur-3xl animate-blob" />
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/[0.225] rounded-full blur-3xl animate-blob animation-delay-2000" />
    </div>
  );
}
