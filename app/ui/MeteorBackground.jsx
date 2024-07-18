"use client";

import React from "react";
import { motion } from "framer-motion";

const Meteor = ({ size = 4 }) => {
  const hue = Math.random() * 30 + 200;

  const meteorVariants = {
    initial: {
      left: `${-Math.random() * 100}%`,
      top: `${-Math.random() * 100}%`,
      opacity: 0,
    },
    animate: {
      left: `${60 + Math.random() * 50}%`, // 60% to 110%
      top: `${105 + Math.random() * 95}%`, // 105% to 200%
      opacity: [0, 1, 1, 0],
    },
  };

  return (
    <motion.div
      className="absolute rotate-[220deg]"
      style={{
        width: size * 25,
        height: size,
        background: `linear-gradient(to right,
          hsla(${hue}, 80%, 80%, 1) 0%,
          hsla(${hue}, 70%, 70%, 0.8) 20%,
          hsla(${hue}, 60%, 60%, 0.6) 40%,
          hsla(${hue}, 50%, 50%, 0.4) 60%,
          transparent 100%)`,
        borderRadius: "50%",
        filter: "blur(1px)",
        zIndex: 1,
      }}
      initial="initial"
      animate="animate"
      variants={meteorVariants}
      transition={{
        duration: Math.random() * 3 + 6,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: Math.random() * 5,
      }}
    >
      {/* Shiny tip */}
      <div
        style={{
          position: "absolute",
          left: "-2px",
          top: "-2px",
          width: size * 2,
          height: size * 2,
          borderRadius: "50%",
          background: "white",
          boxShadow: `0 0 ${size * 2}px ${size}px rgba(255, 255, 255, 0.8)`,
        }}
      />
    </motion.div>
  );
};

const Meteors = ({ count = 20 }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(count)].map((_, index) => (
        <Meteor key={index} size={Math.random() * 2 + 1} />
      ))}
    </div>
  );
};

export default Meteors;
