"use client";

import Link from "next/link";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import TypewriterComponent from "typewriter-effect";

const IntroLeft = () => {
  return (
    <>
      <div className="md:text-3xl text-2xl font-extrabold text-stone-700 md:px-20 md:py-36 py-10 flex flex-col gap-3 text-center min-[775px]:px-10">
        <div className="flex gap-1 flex-col md:flex-row justify-center min-[770px]:flex-col">
          <span className="">Hi, I'm</span>
          <span className="md:text-4xl text-3xl text-cyan-950 drop-shadow-md">
            Aashutosh Singh
          </span>
        </div>
        <div className="">and I am passionate</div>
        <div className="capitalize text-cyan-950">
          <TypewriterComponent
            options={{
              strings: [
                "web developer",
                "ui ux design",
                "React web Developer",
                "Python Developer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 5,
            }}
          />
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="https://github.com/aashus3110"
            target="_blank"
            className="w-fit"
          >
            <button className="px-4 py-1 mx-1 text-sm border-sky-700 border-2 rounded-md hover:text-violet-950 hover:border-cyan-950 hover:shadow-xl shadow-violet-300 flex items-center gap-2">
              <AiOutlineGithub />
              Git Hub
            </button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/aashu3110/"
            target="_blank"
            className="w-fit"
          >
            <button className="px-4 py-1 mx-1 text-sm border-sky-700 border-2 rounded-md hover:text-violet-950 hover:border-cyan-950 hover:shadow-xl shadow-violet-300 flex items-center gap-2">
              <AiFillLinkedin />
              linked in
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default IntroLeft;
