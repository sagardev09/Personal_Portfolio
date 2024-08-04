"use client";
import React from "react";
import { Lights } from "../ui/BackgroundLights";
import { cn } from "../../utils/cn";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroParallax = () => {
  return (
    <div className=" md:pt-40 md:pb-[120px] pt-28 pb-[80px] flex flex-col bg-grid-white/[0.03] relative   ">
      <div className="  ">
        <Header />
      </div>
      <div
        className={
          "absolute bottom-0 left-0 w-full h-full z-[0] animate-appear"
        }
      >
        <Lights />
      </div>
    </div>
  );
};
export default HeroParallax;

const Card = ({ image, title, description, tiltDirection }) => {
  return (
    <div
      className={`lg:w-40 lg:h-40 md:w-28 md:h-28 rounded-full bg-white  shadow-lg overflow-hidden relative  ${tiltDirection}`}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      {/* <div className="p-4">
        <h3 className="lg:text-xl md:text-base font-bold mb-2">{title}</h3>
        <p className="text-gray-600 lg:text-sm md:text-xs">{description}</p>
      </div> */}
    </div>
  );
};

export const Header = () => {
  const destinations = [
    {
      emoji: "💻",
      position:
        "-left-20 top-3 group-hover:-rotate-[10deg] group-hover:-translate-y-12 md:left-[10px] md:-top-[10px] sm:left-[80px]",
    },
    {
      emoji: "🚀",
      position:
        "-left-[72px] top-0 group-hover:-rotate-[20deg] group-hover:-translate-x-10 md:left-[90px] md:top-[100px] sm:left-[50px] ",
    },
    {
      emoji: "🔧",
      position:
        "right-[10px] top-0 group-hover:rotate-[10deg] group-hover:-translate-y-10 md:right-[10px] md:-top-[10px] sm:right-[80px]",
    },
    {
      emoji: "📱",
      position:
        "right-[105px] top-0 group-hover:rotate-[20deg] group-hover:translate-x-16 md:right-[90px] md:top-[100px] sm:right-[50px]",
    },
  ];

  const treasures = [
    {
      emoji: "🖥️",
      position:
        "-left-20 top-3 group-hover:-rotate-[10deg] group-hover:-translate-y-12 md:left-[10px] md:-top-[5px] sm:left-[80px]",
    },
    {
      emoji: "⚙️",
      position:
        "-left-[72px] top-0 group-hover:-rotate-[20deg] group-hover:-translate-x-10 md:left-[90px] md:top-[100px] sm:left-[50px]",
    },
    {
      emoji: "🌐",
      position:
        "right-[10px] top-0 group-hover:rotate-[10deg] group-hover:-translate-y-10 md:right-[10px] md:-top-[10px] sm:right-[80px]",
    },
    {
      emoji: "📊",
      position:
        "right-[105px] top-0 group-hover:rotate-[20deg] group-hover:translate-x-16 md:right-[90px] md:top-[100px] sm:right-[50px]",
    },
  ];
  const handleContactClick = () => {
    window.location.href = "mailto:sagardbs8121@email.com";
  };

  const file_url = "https://sagardevofficial.vercel.app/cv.pdf";

  const handleDownloadClick = (url) => {
    const filename = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    window.open(url, "_blank");
    aTag.remove();
  };

  const headingRef = useRef(null);
  const titleRef = useRef(null);
  const titleRef2 = useRef(null);
  const buttonsContainerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(headingRef.current, {
      y: "100%",
      opacity: 0,
      duration: 1,
      delay: 0.7,
      ease: "power1.inOut",
    });

    tl.from(
      titleRef.current,
      {
        y: "100%",
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.7"
    ); // Start this animation 0.5 seconds before the previous one ends

    tl.from(
      titleRef2.current,
      {
        y: "100%",
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=1"
    );

    // Button animation
    gsap.from(
      buttonsContainerRef.current.children,
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5, // Delay the start of button animations
      },
      "-=1.2"
    );

    //cards animation
    tl.from(
      cardsContainerRef.current.children,
      {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      },
      "-=1"
    );

    tl.to(
      cardsContainerRef.current.children[0],
      {
        rotationZ: -7,
        duration: 0.5,
      },
      "-=1.3"
    );

    tl.to(
      cardsContainerRef.current.children[2],
      {
        rotationZ: -12,
        duration: 0.5,
      },
      "-=1.3"
    );
    tl.to(
      cardsContainerRef.current.children[1],
      {
        rotationZ: -9,
        duration: 0.5,
      },
      "-=1.3"
    );

    tl.to(
      cardsContainerRef.current.children[4],
      {
        rotationZ: 12,
        duration: 0.5,
      },
      "-=1.3"
    );
    tl.to(
      cardsContainerRef.current.children[5],
      {
        rotationZ: 9,
        duration: 0.5,
      },
      "-=1.3"
    );
    tl.to(
      cardsContainerRef.current.children[5],
      {
        rotationZ: 7,
        duration: 0.5,
      },
      "-=1.3"
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center lg:h-[50rem] md:h-[45rem] sm:h-[40rem] h-[35rem] gap-7 ">
      <div className="overflow-hidden">
        <p ref={headingRef} className="text-white text-xs sm:text-base mb-8">
          Welcome to My Portfolio
        </p>
      </div>
      <div className="mb-6 sm:p-0 px-4 group relative flex items-center">
        <h1
          ref={titleRef}
          className="text-white lg:text-[60px] sm:text-[40px] text-[20px] font-extrabold text-center"
        >
          Hey I
          <span className="relative text-[#E4003A] my-0 mx-[15px] inline-block">
            <span className="absolute top-0 left-0 w-full h-full bg-[#E4003A] opacity-10 -rotate-1"></span>
            Am Sagar.
          </span>
          A
          <span className="relative text-[#AF47D2] my-0 mx-[15px] inline-block">
            <span className="absolute top-0 left-0 w-full h-full bg-[#AF47D2] opacity-10 rotate-3"></span>
            Full Stack Developer.
          </span>
        </h1>
        <div className="duration-400 absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
          {destinations.map((dest, index) => (
            <span
              key={index}
              className={cn(
                "absolute transform text-lg transition-transform duration-500 group-hover:scale-110 sm:text-3xl md:text-6xl",
                dest.position
              )}
            >
              {dest.emoji}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-6 sm:p-0 px-4 group relative flex items-center">
        <h1
          ref={titleRef2}
          className="text-white lg:text-[38px] sm:text-[28px] text-[20px] font-extrabold text-center"
        >
          I make
          <span className="relative text-[#a6ff96] my-0 mx-[15px] inline-block">
            <span className="absolute top-0 left-0 w-full h-full bg-[#b1fa97] opacity-10 -rotate-1"></span>
            Products
          </span>
          that people
          <span className="relative text-[#ed5ab3] my-0 mx-[15px] inline-block">
            <span className="absolute top-0 left-0 w-full h-full bg-[#fe56bb] opacity-10 rotate-3"></span>
            love.
          </span>
        </h1>
        <div className="duration-400 absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
          {treasures.map((gem, index) => (
            <span
              key={index}
              className={cn(
                "absolute transform text-lg transition-transform duration-500 group-hover:scale-110 sm:text-3xl md:text-6xl",
                gem.position
              )}
            >
              {gem.emoji}
            </span>
          ))}
        </div>
      </div>
      <div
        ref={buttonsContainerRef}
        className="flex flex-row sm:gap-4 gap-2 space-x-4"
      >
        <button
          onClick={handleContactClick}
          className="sm:w-40 sm:h-10 w-32 h-8 sm:text-sm text-xs rounded-sm bg-black border font-bold border-white border-transparent text-white cursor-pointer z-50"
        >
          Contact Me
        </button>
        <button
          onClick={() => handleDownloadClick(file_url)}
          className="sm:w-40 sm:h-10 w-32 h-8 sm:text-sm text-xs rounded-sm bg-white text-black border font-bold border-black z-50 cursor-pointer"
        >
          Download CV
        </button>
      </div>

      <div
        ref={cardsContainerRef}
        className="md:flex justify-center items-center gap-4 mt-10 hidden z-50"
      >
        <Card
          image="/1.png"
          title="Project 1"
          description="Description for Project 1"
          tiltDirection="-rotate-0 lg:top-[200px] md:top-[160px]"
        />
        <Card
          image="/6.jpeg"
          title="Project 1"
          description="Description for Project 1"
          tiltDirection="-rotate-0 lg:top-[80px] md:top-[60px]"
        />
        <Card
          image="/3.png"
          title="Project 3"
          description="Description for Project 3"
          tiltDirection="-rotate-0 lg:top-[20px] md:top-[10px]"
        />
        <Card
          image="2.png"
          title="Project 2"
          description="Description for Project 2"
          tiltDirection="mx-8 lg:top-[0px] md:-top-[20px]"
        />
        <Card
          image="/4.png"
          title="Project 4"
          description="Description for Project 4"
          tiltDirection="rotate-0 lg:top-[20px] md:top-[10px]"
        />

        <Card
          image="/5.png"
          title="Project 5"
          description="Description for Project 4"
          tiltDirection="rotate-0 lg:top-[80px] md:top-[60px]"
        />
        <Card
          image="/7.png"
          title="Project 5"
          description="Description for Project 4"
          tiltDirection="rotate-0 lg:top-[200px] md:top-[160px]"
        />
      </div>
    </div>
  );
};
