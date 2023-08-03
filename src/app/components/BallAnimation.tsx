// Animation Ball
import React, { useEffect } from "react";
import "../../../public/css/styles.css";
import { stagger, easeIn, motion, useTime, useTransform, useAnimation} from "framer-motion";

export default function BallAnimation() {
    const controls = useAnimation();

  useEffect(() => {
    const animation = async () => {
        while (true) {
      await controls.start({
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        translateX: [0, 0, -210, 210, 0],
        transition: { duration: 1.5, ease: "easeInOut" }, // Base animation duration
      });

      // Delay the second animation
      await controls.start({
        translateX: [0, 0, -210, 210, 0],
        transition: { duration: 2, ease: "easeInOut" },
      });

      // Delay the third animation
      await controls.start({
        translateX: [0, 0, -210, 210, 0],
        transition: { duration: 2.5, ease: "easeInOut" },
      });
    }
    };
    animation();
  }, [controls]);
  return (
    <>
      {/* <div className="w-24 h-24 bg-indigo-500"></div> */}
      <motion.div
        className="the-box"
        // initial={{ opacity: 0, scale: 1 }}
        animate={controls}

      />
    </>
  );
}

