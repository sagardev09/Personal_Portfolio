"use client"
import React from "react";
import myimg from "@/public/self.jpg"
import { Spotlight } from "../ui/Spotlight";
import Image from "next/image";
import { MaskContainer } from "../ui/MaskEffect";

export function Bio() {
    return (
        <div className="h-full w-full  py-8  flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <Spotlight
                className="-top-40 right-0 md:right-60 md:-top-20"
                fill="gray"
            />
            <div className=" p-4 max-w-[800px]  mx-auto flex flex-col items-center justify-center relative z-10  w-full pt-20 md:pt-0">
                <Image src={myimg} alt="" className="h-[800px] w-[600px] rounded-sm object-contain" />
                <h1 className="mt-4 text-[24px] font-medium  text-neutral-300 text-left w-full">
                    Short Bio</h1>
                <div className="h-full w-full flex items-center justify-center  overflow-hidden">
                    <MaskContainer
                        revealText={
                            <p className="text-neutral-300  text-[18px] font-bold text-balance">
                                {"I'm"} a product maker (UI/UX designer and front-end developer) currently based in Haryana, India. {"I'm"} passionate about building products that help people and make a difference in the world. {"I'm"} also a big fan of open source software - which is whyalmost everything I build is open source!I also love educating others about technology and programming, which is why {"I'm"} acontent creatorand write blogs in my free time.
                            </p>
                        }
                        className="h-full cursor-pointer text-balance text-left"
                    >
                        {"I'm"} a product maker <span className="text-red-500">(UI/UX designer and front-end developer)</span>  currently based in Haryana, India. {"I'm"} passionate about <span className="text-blue-500">
                            building products
                        </span>  that help people and make a difference in the world. {"I'm"} also a big fan of
                        <span className="text-green-500"> open source software</span>
                        - which is whyalmost everything I build is open source!I also love educating others about <span className="text-purple-500"> technology and programming</span> , which is why {"I'm"} acontent creator and write blogs in my free time.
                    </MaskContainer>
                </div>
            </div>
        </div>
    );
}
