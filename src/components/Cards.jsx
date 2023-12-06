import React from "react";
import { FaFileLines } from "react-icons/fa6";

import { MdOutlineArrowDownward } from "react-icons/md";

const Cards = () => {
  return (
    <div className=" relative w-[11rem] h-[14rem] rounded-[40px] bg-zinc-900/90 text-white px-8 py-4 overflow-hidden">
      {/* <div> */}
      {/* <span className="text-gray-500"> */}
      <FaFileLines />
      {/* </span> */}
      <p className="text-white font-semibold text-sm mt-5 leading-tight">
Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>

      {/* </div> */}

      <div className="footer absolute bottom-0 w-full left-0">
        <div className=" flex justify-between items-center px-8 py-2 ">
          <p className="text-white text-sm ">0.7 Mb</p>
          <span className="bg-zinc-600 h-5 rounded-full w-5 flex justify-center items-center">
            <MdOutlineArrowDownward size=".8em" color="#fff" />
          </span>
        </div>
        <div className="w-full bg-green-500 py-3 flex justify-center items-center ">
          <h3>download now</h3>
        </div>
      </div>
    </div>
  );
};

export default Cards;
