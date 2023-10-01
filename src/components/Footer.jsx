import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-cyan-600 py-4 rounded-t-lg drop-shadow-lg shadow-black">
      <div className="container mx-auto flex items-center justify-between flex-col md:flex-row gap-3">
        <div className="flex gap-4">
          <a
            href="https://github.com/aashus3110"
            target="_blank"
            className="text-slate-300 hover:text-slate-500"
          >
            <AiOutlineGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/aashu3110/"
            target="_blank"
            className="text-slate-300 hover:text-slate-500"
          >
            <AiFillLinkedin className="text-xl" />
          </a>
          <a
            href="https://www.instagram.com/_im_aashu_3110_/"
            target="_blank"
            className="text-slate-300 hover:text-slate-500"
          >
            <AiFillInstagram className="text-xl" />
          </a>
        </div>
        <p className="text-slate-300 text-sm">
          © 2023 Aashutosh Singh. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
