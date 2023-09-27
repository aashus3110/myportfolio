"use client";
import Link from "next/link";
import React, { useRef } from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const toogalSid = () => {
    if (ref.current.classList.contains("hidden")) {
      ref.current.classList.remove("hidden");
      ref.current.classList.add("block");
    } else if (!ref.current.classList.contains("hidden")) {
      ref.current.classList.remove("block");
      ref.current.classList.add("hidden");
    }
  };
  const ref = useRef();
  return (
    <>
      <div className="md:py-3 py-6 px-2 bg-cyan-600 flex items-center justify-start md:justify-evenly min-[320px]:px-0 min-[320px]:gap-1 gap-4 rounded-b-lg shadow-md shadow-stone-500 text-cyan-50">
        <div className="flex flex-col">
          <div className="cursor-pointer mx-2 md:mx-8 hover:text-slate-300 text-3xl font-bold">
            Aashutosh
          </div>
          <div className="relative w-full h-1">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-tr from-cyan-400 to-sky-400 rounded-lg shadow-md shadow-gray-900"
              style={{
                animation: "progressAnimation 6s ease-in-out infinite",
              }}
              id="progress-bar"
            ></div>
          </div>
        </div>
        <div className="flex gap-4 md:hidden ">
          <Link
            className="border-[1px] rounded-full p-2 border-slate-300"
            href="https://github.com/aashus3110"
            target="_blank"
          >
            <AiOutlineGithub className="text-xl hover:text-slate-500" />
          </Link>
          <Link
            className="border-[1px] rounded-full p-2 border-slate-300"
            href="https://www.linkedin.com/in/aashu3110/"
            target="_blank"
          >
            <AiFillLinkedin className="text-xl hover:text-slate-500" />
          </Link>
          <Link
            className="border-[1px] rounded-full p-2 border-slate-300"
            href="https://www.instagram.com/_im_aashu_3110_/"
            target="_blank"
          >
            <AiFillInstagram className="text-xl hover:text-slate-500" />
          </Link>
        </div>
        <div className="md:block hidden">
          <div className="flex items-center gap-20">
            <div className="flex gap-8 text-sm font-semibold  ">
              <span className="cursor-pointer hover:text-slate-300 ">Home</span>
              <span className="cursor-pointer hover:text-slate-300 ">
                Skills
              </span>
              <span className="cursor-pointer hover:text-slate-300 ">
                Projects
              </span>
            </div>
            <div className="">
              <div className="flex gap-4 ">
                <Link
                  className="border-[1px] rounded-full p-2 border-slate-300"
                  href="https://github.com/aashus3110"
                  target="_blank"
                >
                  <AiOutlineGithub className="text-xl hover:text-slate-500" />
                </Link>
                <Link
                  className="border-[1px] rounded-full p-2 border-slate-300"
                  href="https://www.linkedin.com/in/aashu3110/"
                  target="_blank"
                >
                  <AiFillLinkedin className="text-xl hover:text-slate-500" />
                </Link>
                <Link
                  className="border-[1px] rounded-full p-2 border-slate-300"
                  href="https://www.instagram.com/_im_aashu_3110_/"
                  target="_blank"
                >
                  <AiFillInstagram className="text-xl hover:text-slate-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <BiMenu
          onClick={toogalSid}
          className="absolute top-6 right-4 md:hidden text-white text-2xl"
        />
        <div
          ref={ref}
          className="absolute md:hidden hidden top-0 right-0 h-[5rem] w-screen bg-cyan-600 shadow-2xl rounded-b-lg"
        >
          <Sidebar />
          <span onClick={toogalSid}>
            <AiOutlineCloseCircle className="absolute text-2xl  top-6 right-6" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
