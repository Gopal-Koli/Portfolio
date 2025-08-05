import React from "react";

const Tilttext = (props) => {
  return (
    <div
      className="tiltDiv cursor-grab lg:mt-40 ml-15 t"
      ref={props.abc}
    >
      <h1 className="text-[4vw] uppercase font-[anzo3] leading-[4.2vw]">
        I am <span className="text-[black] shadow-white">CLEAN CODE</span>™
      </h1>
      <h1 className="text-[6vw] font-[anzo3] leading-[7vw]">SOFTWARE ENGINEER</h1>
      <h1 className="text-[4vw] uppercase font-[anzo3] leading-[4vw]">
        To hire
      </h1>
    </div>
  );
};

export default Tilttext;
