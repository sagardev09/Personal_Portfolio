import React from "react";
import { GitGraph, GitHub, Search, Twitch } from "lucide-react";
import { cn } from "../../utils/cn";

const testOrbitingItems = [
  <Search key="github1" size={24} />,
  <GitGraph key="gitgraph1" size={24} />,
  <Search key="github2" size={24} />,
  <GitGraph key="gitgraph2" size={24} />,
  <Search key="github3" size={24} />,
  <GitGraph key="gitgraph3" size={24} />,
];

const calculateItemStyle = ({ index, radius, totalItems }) => {
  const angle = (index / totalItems) * 360;
  const radians = (angle * Math.PI) / 180;
  const x = radius * Math.cos(radians);
  const y = radius * Math.sin(radians);
  return {
    left: `${50 + x}%`,
    top: `${50 + y}%`,
    transform: "translate(-50%, -50%)",
  };
};

const OrbitingItems = ({
  radius = 50,
  items = testOrbitingItems,
  pauseOnHover = false,
  className = "",
}) => {
  return (
    <div className={cn("group relative h-64 w-64", className)}>
      <div
        className={cn(
          "relative flex h-full w-full animate-[rotate-full_45s_linear_infinite] items-center justify-center ease-linear repeat-infinite"
        )}
      >
        <div className="absolute h-full w-full rounded-full border-2 border-gray-500" />
        {items.map((item, index) => (
          <div
            key={index}
            className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-gray-200"
            style={calculateItemStyle({
              index,
              radius,
              totalItems: items.length,
            })}
          >
            <div>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrbitingItems;
