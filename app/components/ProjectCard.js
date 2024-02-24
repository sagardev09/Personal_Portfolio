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
                    alt="jordans"
                    height="400"
                    width="400"
                    className="object-cover h-[200px] w-[400px] "
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {name}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {desc}
                </p>
                <div className="flex items-center justify-between">
                    <Link href={github} className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                        <span>Github link</span>
                    </Link>
                    <Link href={link} className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                        <span>Live Preview</span>
                    </Link>
                </div>
            </BackgroundGradient>
        </div>
    );
}
