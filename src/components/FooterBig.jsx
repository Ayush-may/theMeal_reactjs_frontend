import React from "react";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const FooterBig = () => {
  return (
    <>
      <div className="w-full  min-h-[300px] flex flex-col items-center gap-4 bg-black text-white text-lg p-4">
        <p class="uppercase ">Made with MERN</p>
        <div class="flex gap-3 flex-wrap max-sm:pb-12 justify-center">
          {/* MongoDB */}
          <div class="bg-[#7F2D15] p-3 h-fit rounded-full border-2 border-white">
            <SiMongodb size={"6em"} />
          </div>
          {/* express.js */}
          <div class="bg-[#393939] p-3 h-fit rounded-full border-2 border-white">
            <SiExpress size={"6em"} />
          </div>
          {/* React */}
          <div class="bg-[#0B65A8] p-3 h-fit rounded-full border-2 border-white">
            <FaReact size={"6em"} />
          </div>
          {/* Node js */}
          <div class="bg-[#74E416] p-3 h-fit rounded-full border-2 border-white">
            <FaNodeJs size={"6em"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBig;