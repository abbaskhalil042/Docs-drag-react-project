import React, { useRef } from "react";
import Cards from "./Cards";

const ForeGround = () => {

    //i have to drag the cards inside the foreGround
    const ref=useRef(null)
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-shrink-0 flex-wrap ">
      <Cards reference={ref} />
      <Cards reference={ref} />
      <Cards reference={ref} />
      <Cards reference={ref} />
      <Cards reference={ref} />
    
    </div>
  );
};

export default ForeGround;
