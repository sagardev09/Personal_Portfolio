"use client";
import React from "react";
import myimg from "../../public/self.jpg";
import { Spotlight } from "../ui/Spotlight";
import Image from "next/image";
import { MaskContainer } from "../ui/MaskEffect";

export function Bio() {
  return (
    <div className="bg-grid-white/[0.02] relative  flex  h-full w-full overflow-hidden bg-black/[0.96] py-8 antialiased md:items-center md:justify-center">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <Spotlight
        className="-top-40 right-0 md:-top-20 md:right-60"
        fill="gray"
      />
      <div className=" relative z-10  mx-auto flex w-full max-w-[800px] flex-col items-center justify-center  p-4 pt-4 sm:pt-20 md:pt-0">
        <Image
          src={myimg}
          alt=""
          className="h-[600px] w-[400px] rounded-sm object-contain sm:h-[800px] sm:w-[600px]"
        />
        <h1 className="mt-4 w-full text-left  text-[24px] font-medium text-neutral-300">
          Short Bio
        </h1>
        <div className="flex h-[400px] w-full items-center justify-center overflow-hidden  sm:h-full">
          <MaskContainer
            revealText={
              <p className="text-balance  text-[18px] font-bold text-neutral-300">
                {"I'm"} a product maker (UI/UX designer and front-end developer)
                currently based in Haryana, India. {"I'm"} passionate about
                building products that help people and make a difference in the
                world. {"I'm"} also a big fan of open source software - which is
                whyalmost everything I build is open source!I also love
                educating others about technology and programming, which is why{" "}
                {"I'm"} acontent creatorand write blogs in my free time.
              </p>
            }
            className="h-full cursor-pointer text-balance text-left"
          >
            {"I'm"} a product maker{" "}
            <span className="text-red-500">
              (UI/UX designer and front-end developer)
            </span>{" "}
            currently based in Haryana, India. {"I'm"} passionate about{" "}
            <span className="text-blue-500">building products</span> that help
            people and make a difference in the world. {"I'm"} also a big fan of
            <span className="text-green-500"> open source software</span>- which
            is whyalmost everything I build is open source!I also love educating
            others about{" "}
            <span className="text-purple-500"> technology and programming</span>{" "}
            , which is why {"I'm"} acontent creator and write blogs in my free
            time.
          </MaskContainer>
        </div>
      </div>
    </div>
  );
}
