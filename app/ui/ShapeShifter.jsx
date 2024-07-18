"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import img1 from "../../public/1.png";
import img2 from "../../public/2.png";
import img3 from "../../public/3.png";
import img4 from "../../public/4.png";
import img5 from "../../public/5.png";
import img6 from "../../public/6.jpeg";
import img7 from "../../public/7.png";
import img8 from "../..//public/8.png";
import img9 from "../../public/9.png";
import img10 from "../../public/10.jpeg";
import img11 from "../../public/11.jpeg";
import img12 from "../../public/12.png";
import img13 from "../../public/13.png";
import img14 from "../../public/14.png";
import img15 from "../../public/15.png";
import Image from "next/image";

const products = [
  {
    id: 1,
    thumbnail: img1,
  },
  {
    id: 2,
    thumbnail: img2,
  },
  {
    id: 3,
    thumbnail: img3,
  },
  {
    id: 4,
    thumbnail: img4,
  },
  {
    id: 5,
    thumbnail: img5,
  },
  {
    id: 6,
    thumbnail: img6,
  },
  {
    id: 7,
    thumbnail: img7,
  },
  {
    id: 8,
    thumbnail: img8,
  },
  {
    id: 9,
    thumbnail: img9,
  },
  {
    id: 10,
    thumbnail: img10,
  },
  {
    id: 11,
    thumbnail: img11,
  },
  {
    id: 12,
    thumbnail: img12,
  },
  {
    id: 13,
    thumbnail: img13,
  },
  {
    id: 14,
    thumbnail: img14,
  },
  {
    id: 15,
    thumbnail: img15,
  },
];

const CustomMarquee = ({ children, speed = 50, pauseOnHover = true }) => {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let animationId;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (!isPaused) {
        marquee.style.transform = `translateX(${-(progress / speed) % 100}%)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [speed, isPaused]);

  return (
    <div
      className="overflow-hidden whitespace-nowrap"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div ref={marqueeRef} className="inline-block">
        {children}
        {children} {/* Duplicate children for seamless loop */}
      </div>
    </div>
  );
};

const ShapeShifter = ({
  prefix = "Design",
  suffix = "Development",
  className,
  containerClassName,
  children,
}) => {
  const shapeStyles = [
    { shape: "rounded-none", scale: 1 },
    { shape: "rounded-full", scale: 0.6 },
    { shape: "rounded-3xl ", scale: 1.1 },
    { shape: "rounded-[50%_20%] rotate-12", scale: 0.8 },
    { shape: "rounded-[20%_50%] -rotate-12", scale: 1.05 },
    { shape: "rounded-lg", scale: 0.9 },
    { shape: "rounded-xl", scale: 1.2 },
    { shape: "rounded-[10%_40%] rotate-6", scale: 0.85 },
    { shape: "rounded-[40%_10%] -rotate-6", scale: 1.15 },
    { shape: "rounded-[30%_70%] rotate-3", scale: 0.75 },
    { shape: "rounded-[70%_30%] -rotate-3", scale: 1.25 },
    { shape: "rounded-[60%_10%_50%_20%] rotate-45", scale: 0.95 },
    { shape: "rounded-[10%_60%_20%_50%] -rotate-45", scale: 1.3 },
    { shape: "rounded-[80%_40%_30%_70%] rotate-15", scale: 0.7 },
    { shape: "rounded-[40%_80%_70%_30%] -rotate-15", scale: 1.4 },
  ];

  const shapeVariants = {
    animate: {
      x: [0, 60, -70, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 4,
          ease: "easeInOut",
        },
      },
    },
  };

  const textVariants = {
    animate: {
      y: [0, -5, 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        },
      },
    },
  };

  const [currentShapeIndex, setCurrentShapeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShapeIndex((prevIndex) => (prevIndex + 1) % shapeStyles.length);
    }, 2000); // Change shape every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const placeholderChildren = (
    <CustomMarquee pauseOnHover>
      {products.map((image, index) => (
        <Image
          key={`image_${index}`}
          src={image.thumbnail}
          alt={image.id}
          className="inline-block  object-cover mx-1 "
        />
      ))}
    </CustomMarquee>
  );

  const currentStyle = shapeStyles[currentShapeIndex];

  return (
    <motion.div
      variants={shapeVariants}
      animate="animate"
      className={cn(
        "text-md group flex  w-full min-w-fit flex-col items-center  justify-center gap-8 font-bold text-foreground transition-all sm:flex-row sm:text-xl",
        containerClassName
      )}
    >
      <motion.div
        variants={textVariants}
        animate="animate"
        className="text-4xl font-extrabold"
      >
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient">
          {prefix}
        </span>
      </motion.div>
      <div
        className={cn(
          "relative overflow-hidden  p-0 transition-all ease-in-out inset-0 bg-gradient-to-br from-blue-500 via-cyan-400 to-yellow-400 ",
          currentStyle.shape,
          className
        )}
        style={{
          width: "300px",
          height: "300px",
          transition: "all 0.5s ease-in-out",
          transform: `scale(${currentStyle.scale})`,
        }}
      >
        {children ?? placeholderChildren}
      </div>
      <motion.div
        variants={textVariants}
        animate="animate"
        className="text-4xl font-extrabold"
      >
        <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text animate-gradient">
          {suffix}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default ShapeShifter;
