import React from "react";
import { Nunito } from "next/font/google";
import { Link } from "react-scroll";

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
        <Link
          className="cursor-pointer hover:text-slate-300 "
          activeClass="activeClass"
          to="intro"
          spy={true}
          smooth={true}
        >
          Home
        </Link>
        <Link
          className="cursor-pointer hover:text-slate-300 "
          activeClass="activeClass"
          to="skills"
          spy={true}
          smooth={true}
        >
          Skills
        </Link>
        <Link
          className="cursor-pointer hover:text-slate-300 "
          activeClass="activeClass"
          to="projects"
          spy={true}
          smooth={true}
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
