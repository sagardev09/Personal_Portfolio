import React from "react";
import { Lights } from "../ui/BackgroundLights";
import { cn } from "../../utils/cn";
import Meteors from "../ui/MeteorBackground";
import ShapeShifter from "../ui/ShapeShifter";

const HeroParallax = () => {
  return (
    <div className="h-[100vh] py-40 flex flex-col bg-grid-white/[0.03] relative  ">
      <div className="absolute top-0 left-0 w-full h-full z-[0] md:block hidden">
        <Meteors number={30} />
      </div>
      <div className="z-[1] animate-moveUp">
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

  return (
    <div className="flex flex-col items-center justify-center lg:h-[50rem] md:h-[45rem] sm:h-[40rem] h-[35rem] gap-7 ">
      <p className="text-white  text-xs sm:text-base mb-8 ">
        Welcome to My Portfolio
      </p>
      <div className="mb-6 sm:p-0 px-4 group relative flex items-center">
        <h1 className="text-white lg:text-[60px] sm:text-[40px] text-[20px] font-extrabold text-center">
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
        <h1 className="text-white lg:text-[38px] sm:text-[28px] text-[20px] font-extrabold text-center">
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
      <div className="flex flex-row sm:gap-4  gap-2 space-x-4">
        <button
          onClick={handleContactClick}
          className="sm:w-40 sm:h-10 w-32 h-8 sm:text-sm text-xs rounded-sm bg-black border font-bold border-white border-transparent text-white  cursor-pointer z-50"
        >
          Contact Me
        </button>
        <button
          onClick={() => handleDownloadClick(file_url)}
          className="sm:w-40 sm:h-10 w-32 h-8 sm:text-sm text-xs  rounded-sm bg-white text-black border font-bold border-black  z-50 cursor-pointer"
        >
          Download CV
        </button>
      </div>
      <div className="mt-10">
        <ShapeShifter />
      </div>
    </div>
  );
};
