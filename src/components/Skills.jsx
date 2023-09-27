import React from "react";
import Image from "next/image";
import WebDeveloper from "@/components/assets/WebDeveloper.png";
import UIUX from "@/components/assets/UIUX.png";
import ReactD from "@/components/assets/ReactD.png";
import Webdev from "@/components/assets/webdev.png";
import Progres from "./Progres";

const Skills = () => {
  return (
    <div className="skills lg:h-[30rem] h-[90rem] py-5">
      <div className="flex flex-col text-2xl font-bold text-stone-700 px-10 gap-5">
        <span className="text-xl">A Set of Particular Skills I know :-</span>
        <span className="">My Skills</span>
      </div>
      <div className="px-8 py-4">
        <div className="absolute border-2 border-sky-500 drop-shadow-md shadow-gray-600 h-[80rem] lg:h-0 lg:w-[90%] lg:my-4 rounded-full"></div>
        <div className="lg:flex-row flex flex-col  justify-evenly text-2xl font-bold">
          <div className="border-2 border-sky-500 drop-shadow-md shadow-gray-600 w-full lg:w-0 lg:mx-4 lg:rounded-b-full my-4 rounded-r-full"></div>
          <div className="flex flex-col items-center gap-3 px-10 py-4 lg:py-8">
            <span className="">Web Developer </span>
            <Image
              src={WebDeveloper}
              width={230}
              height={230}
              className=""
              alt="Picture of the author"
            />
            <Progres value={85} text={"85%"} />
          </div>
          <div className="border-2 border-sky-500 drop-shadow-md shadow-gray-600 w-full lg:w-0 lg:mx-4 lg:rounded-b-full my-4 rounded-r-full"></div>
          <div className="flex flex-col items-center gap-3 px-10 py-4 lg:py-8">
            <span>UI UX Designer </span>
            <Image
              src={UIUX}
              width={250}
              height={250}
              className=""
              alt="Picture of the author"
            />
            <Progres value={87} text={"87%"} />
          </div>

          <div className="border-2 border-sky-500 drop-shadow-md shadow-gray-600 w-full lg:w-0 lg:mx-4 lg:rounded-b-full my-4 rounded-r-full"></div>

          <div className="flex flex-col items-center gap-3 px-10 py-4 lg:py-8">
            <span>React Developer </span>
            <Image
              src={ReactD}
              width={250}
              height={250}
              className=""
              alt="Picture of the author"
            />
            <Progres value={95} text={"95%"} />
          </div>
          <div className="border-2 border-sky-500 drop-shadow-md shadow-gray-600 w-full lg:w-0 lg:mx-4 lg:rounded-b-full my-4 rounded-r-full"></div>

          <div className="flex flex-col items-center gap-3 px-10 py-4 lg:py-8">
            <span>Web Development </span>
            <Image
              src={Webdev}
              width={250}
              height={250}
              className=""
              alt="Picture of the author"
            />
            <Progres value={90} text={"90%"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
