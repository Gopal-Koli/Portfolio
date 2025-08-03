import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState("#ff0080");

  const colors = ["#ff0080", "#00ffb3", "#0080ff", "#ffff00", "#ff5e00"];

  useEffect(() => {
    const moveHandler = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveHandler);

    const colorInterval = setInterval(() => {
      setCursorColor((prev) => {
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        return newColor !== prev ? newColor : colors[0];
      });
    }, 500);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      clearInterval(colorInterval);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor"
        animate={{
          x: mousePosition.x - 15,
          y: mousePosition.y - 15,
          backgroundColor: cursorColor,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 30,
          height: 30,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
      />
    </>
  );
};

export default AnimatedCursor;
