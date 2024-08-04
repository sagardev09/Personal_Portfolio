"use client";
import React from "react";
import { BackgroundGradient } from "../ui/BackgroundGradient";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({ name, github, link, img, desc }) {
  // Function to trim the description to 100 characters
  const trimDescription = (text) => {
    if (text.length > 80) {
      return text.substring(0, 80) + "...";
    }
    return text;
  };

  return (
    <div>
      <BackgroundGradient className="rounded-[22px] flex flex-col justify-between lg:h-[500px] lg:max-w-sm sm:h-[440px] sm:max-w-xs p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={img}
          alt="project image"
          height="400"
          width="400"
          className="object-cover h-[200px] w-[400px] rounded-lg"
        />
        <p className="text-base lg:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {name}
        </p>
        <p className="lg:text-base text-xs text-neutral-600 dark:text-neutral-400 ">
          {trimDescription(desc)}
        </p>
        <div className="flex items-center justify-between mt-6 gap-3">
          <ShinyButton href={github} text="Github link" />
          <ShinyButton href={link} text="Live Preview" />
        </div>
      </BackgroundGradient>
    </div>
  );
}

function ShinyButton({ href, text }) {
  return (
    <Link href={href} className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button className="relative lg:px-6 lg:py-2 px-4 py-2 bg-black dark:bg-zinc-800 rounded-lg leading-none flex items-center">
        <span className="text-white lg:text-sm text-[10px] font-bold transition duration-200 group-hover:text-pink-200">
          {text}
        </span>
      </button>
    </Link>
  );
}
