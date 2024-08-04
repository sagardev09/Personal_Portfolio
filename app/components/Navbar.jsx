"use client";
import React from "react";
import { FloatingNav } from "../ui/FloatingNavbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-5 w-5 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  const navref = useRef(null);

  useGSAP(() => {
    gsap.to(navref.current, {
      y: 0,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div ref={navref} className="relative translate-y-[-100px]  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};
