"use client";
import React from "react";
import { TypewriterEffectSmooth } from "./TypeWriter";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,

} from "framer-motion";
import { saveAs } from 'file-saver';
import img1 from "../../public/1.png"
import img2 from "../../public/2.png"
import img3 from "../../public/3.png"
import img4 from "../../public/4.png"
import img5 from "../../public/5.png"
import img6 from "../../public/6.jpeg"
import img7 from "../../public/7.png"
import img8 from "../..//public/8.png"
import img9 from "../../public/9.png"
import img10 from "../../public/10.jpeg"
import img11 from "../../public/11.jpeg"
import img12 from "../../public/12.png"
import img13 from "../../public/13.png"
import img14 from "../../public/14.png"
import img15 from "../../public/15.png"
import Image from "next/image";
import Link from "next/link";
import { words } from "../data/word";

export const HeroParallax = () => {



    const products = [
        {

            thumbnail: img1,

        },
        {

            thumbnail: img2,

        },
        {

            thumbnail: img3,

        },
        {

            thumbnail: img4,

        },
        {

            thumbnail: img5,

        },
        {

            thumbnail: img6,

        },
        {

            thumbnail: img7,

        },
        {

            thumbnail: img8,

        },
        {

            thumbnail: img9,

        },
        {

            thumbnail: img10,

        },
        {

            thumbnail: img11,

        },
        {

            thumbnail: img12,

        },
        {

            thumbnail: img13,

        },
        {

            thumbnail: img14,

        },
        {

            thumbnail: img15,

        },
    ];


    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="h-[265vh]  py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {

    const handleContactClick = () => {
        window.location.href = 'mailto:sagardbs8121@email.com';
    };

    const handleDownloadClick = () => {

        const fileUrl = '../../public/cv.pdf';
        saveAs(fileUrl, 'cv.pdf');
    };
    return (
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
            <p className="text-white  text-xs sm:text-base  ">
                Welcome to My Portfolio
            </p>
            <TypewriterEffectSmooth words={words} />
            <div className="mb-6 sm:p-0 px-4">
                <h1 className="text-white text-[38px] font-extrabold text-center">
                    I make
                    <span className="relative text-[#a6ff96] my-0 mx-[15px] inline-block">
                        <span className="absolute top-0 left-0 w-full h-full bg-[#b1fa97] opacity-10 -rotate-1">
                        </span>
                        Products
                    </span>
                    that people
                    <span className="relative text-[#ed5ab3] my-0 mx-[15px] inline-block">
                        <span className="absolute top-0 left-0 w-full h-full bg-[#fe56bb] opacity-10 rotate-3"></span>
                        love.
                    </span>
                </h1>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <button
                    onClick={handleContactClick}
                    className="w-40 h-10 rounded-sm bg-black border font-bold border-white border-transparent text-white text-sm cursor-pointer z-50">
                    Contact Me
                </button>
                <button
                    onClick={handleDownloadClick}
                    className="w-40 h-10 rounded-sm bg-white text-black border font-bold border-black  text-sm z-50 cursor-pointer">
                    Download CV
                </button>
            </div>
        </div>
    );
};

export const ProductCard = (
    {
        product,
        translate,
    }
) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
                transition: { ease: "easeInOut" }
            }}

            className="group/product h-96 w-[30rem] relative flex-shrink-0"
        >
            <div

                className="block group-hover/product:shadow-2xl "
            >
                <Image
                    src={product?.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0"
                    alt=""
                />
            </div>
            <div className="absolute inset-0 h-full w-full opacity-0  bg-black pointer-events-none"></div>

        </motion.div>
    );
};
