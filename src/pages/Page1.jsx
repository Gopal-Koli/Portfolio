import React, { useRef, useState } from "react";
import gopal from "../assets/gopal1.png";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import Tilttext from "../Components/TiltText.jsx";

import Page1Bottom from "../Components/Page1Bottom";
import { RiCodeSSlashLine } from "react-icons/ri";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1 = () => {
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const tiltRef = useRef(null);

  const MouseMoving = (e) => {
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        50
    );
    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 10
    );

    tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 3,
        ease: "power4.out",
      });
    },
    [xVal, yVal]
  );

  return (
    <div
      id="page1"
      onMouseMove={(e) => {
        MouseMoving(e);
      }}
      className="lg:h-screen relative px-8 py-8 bg-white"
    >
      <div
        id="page1-in"
        className="relative h-full sm:p-11 w-full rounded-4xl bg-gradient-to-r from-black to-white shadow-2xl transition-transform duration-300 shadow-gray-500"
      >
        <RiCodeSSlashLine className="text-white text-[30px]" />
        <Tilttext abc={tiltRef} />
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
