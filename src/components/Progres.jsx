"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Progres = ({ value, text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${value}%`,
        transition: { duration: 3 },
      });
    } else {
      controls.stop();
    }
  }, [controls, inView, value]);

  return (
    <>
      <div
        className="h-8 w-full flex items-center gap-20 justify-center drop-shadow-lg shadow-cyan-600"
        ref={ref}
      >
        <div className="h-2.5 w-[90%] flex flex-row justify-start items-stretch rounded-full bg-slate-400 overflow-hidden ">
          <motion.div
            className="w-0 flex bg-gradient-to-b rounded-full from-sky-700 from-0%  via-sky-300 via-32% to-sky-700 to-100%"
            animate={controls}
          />
        </div>
      </div>
      <span className="text-xl">{text}</span>
    </>
  );
};

export default Progres;
