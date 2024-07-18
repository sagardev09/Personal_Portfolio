import { cn } from "../../utils/cn";

export const Lights = ({ className }) => (
  <div className={cn("w-full h-full overflow-hidden", className)}>
    <div
      className={"w-full h-full relative bottom-[-250px] "}
      style={{
        background:
          "conic-gradient(from 180deg at 50% 50%,var(--blue-500) 0deg,var(--cyan-400) 180deg,var(--yellow-400) 1turn)",
        filter: "blur(100px)",
        opacity: "20%",
      }}
    />
  </div>
);
