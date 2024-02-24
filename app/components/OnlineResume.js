import React from "react";
import { MacbookScroll } from "../ui/Macbook";
import img from "../../public/1.png"

const MacbookScrollDemo = () => {
    return (
        <div className="overflow-hidden dark:bg-[#000] bg-white w-full">
            <MacbookScroll
                title={
                    <span>
                        This Macbook is built with Tailwindcss. <br /> No kidding.
                    </span>
                }

                src={img}
                showGradient={false}
            />
        </div>
    );
};

export default MacbookScrollDemo;
