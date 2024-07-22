"use client";
import React from "react";
import { BackgroundGradient } from "../ui/BackgroundGradient";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({ name, github, link, img, desc }) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] flex flex-col justify-between h-[500px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={img}
          alt="project image"
          height="400"
          width="400"
          className="object-cover h-[200px] w-[400px] rounded-lg"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {name}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-balance">
          {desc}
        </p>
        <div className="flex items-center justify-between mt-6">
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
      <button className="relative px-6 py-2 bg-black dark:bg-zinc-800 rounded-lg leading-none flex items-center">
        <span className="text-white text-xs font-bold transition duration-200 group-hover:text-pink-200">
          {text}
        </span>
      </button>
    </Link>
  );
}
