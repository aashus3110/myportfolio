import React from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: "700",
  subsets: ["latin"],
});

const Sidebar = () => {
  return (
    <div
      className={`flex gap-3 md:gap-8 pl-8 md:mx-12 h-20 items-center font-serif font-extrabold md:text-sm text-xs ${nunito.className} `}
    >
      <div className="flex gap-4 text-sm ">
        <span className="cursor-pointer hover:text-slate-300 ">Home</span>
        <span className="cursor-pointer hover:text-slate-300 ">Skills</span>
        <span className="cursor-pointer hover:text-slate-300 ">Projects</span>
      </div>
    </div>
  );
};

export default Sidebar;
