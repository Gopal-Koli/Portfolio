import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const Rotate = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // 150ms after scroll stops, we mark as "not scrolling"
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const boxStyle = {
    width: 400,
    height: 100,
    backgroundColor: "#21130d",
    borderRadius: 5,
  };

  // Condition: in view AND scrolling
  const shouldAnimate = isInView && isScrolling;

  return (
    <div
      ref={ref}
      className="h-[300px] w-[300px] bg-emerald-600 border-5 flex items-center justify-center mx-auto my-20"
    >
      <motion.div
        style={boxStyle}
        animate={shouldAnimate ? { rotate: 360 } : { rotate: 0 }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: shouldAnimate ? Infinity : 0,
        }}
        
      />
    </div>
  );
};

export default Rotate;
