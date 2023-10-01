"use client";
import React, { useState } from "react";
import P1 from "@/components/assets/P1.png";
import P2 from "@/components/assets/P2.png";
import P3 from "@/components/assets/P3.png";
import P4 from "@/components/assets/P4.png";
import P5 from "@/components/assets/P5.png";
import P6 from "@/components/assets/P6.png";
import P7 from "@/components/assets/P7.png";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  const [showCount, setShowCount] = useState(2); // State to track how many items to show

  // Define your project data here as an array of objects
  const projects = [
    {
      title: "e-commerce website",
      technologies: "python, javascript, sqlite3, html5, css3",
      githubLink: "https://github.com/aashus3110/Shop",
      imageSrc: P1,
    },
    {
      title: "article summarizers",
      technologies: "React js , rapid Api , tailwind css",
      githubLink: "https://articlesummarizers-3110.netlify.app/",
      imageSrc: P2,
    },
    {
      title: "property management system",
      technologies: "python, javascript, sqlite3, html5, css3",
      githubLink: "https://github.com/aashus3110/PropertyManagement",
      imageSrc: P3,
    },
    {
      title: "dashboard design",
      technologies: "next js, react js, mongoDB, tailwind css",
      githubLink: "https://github.com/aashus3110/dashboard",
      imageSrc: P4,
    },
    {
      title: "ToDo List",
      technologies: "react js, Bootstrap",
      githubLink: "https://aashus3110.github.io/My-To-Do.github.io/#/",
      imageSrc: P5,
    },
    {
      title: "blog post website",
      technologies: "react js, mongoDB, tailwind css",
      githubLink: "https://github.com/aashus3110/Blog",
      imageSrc: P6,
    },
    {
      title: "my portfolio",
      technologies: "next js, react js, tailwind css",
      githubLink: "https://myportfolio-singh.vercel.app/",
      imageSrc: P7,
    },
  ];

  const toggleShowAll = () => {
    setShowAll(false);

    setTimeout(() => {
      setShowAll(true);
    }, 1000);
  };

  const toggleShowMore = () => {
    setShowCount((prevCount) => prevCount + 2); // Show 2 more items on every click
  };

  const displayedProjects = projects.slice(0, showCount);
  return (
    <section className="projects text-gray-600 body-font">
      <div className="flex flex-col text-2xl font-bold text-stone-700 px-10 pr-12 gap-5">
        <span className="text-xl"> A Set of Particular Projects I do :-</span>
        <span className=""> My Projects</span>
      </div>
      <div className="px-5 pt-12 pb-8 mx-auto">
        <div className="flex flex-wrap -m-4">
          {displayedProjects.map((project, index) => (
            <div key={index} className="p-4 md:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-stone-500/30 border-opacity-60 rounded-lg overflow-hidden bg-cyan-50">
                <Image
                  src={project.imageSrc}
                  width={0}
                  height={0}
                  className="mx-auto hover:scale-90 hover:drop-shadow-md transition-transform duration-500 brightness-100 contrast-100 rounded-lg"
                  alt="Project Image"
                  loading="eager"
                />
                <div className="p-6 capitalize text-stone-700">
                  <div className="Title flex flex-col">
                    <span className="text-lg font-semibold">
                      Project Title :-{" "}
                    </span>
                    <span className="text-sm font-semibold text-center">
                      {project.title}
                    </span>
                  </div>
                  <hr className="border border-cyan-100 rounded-full my-4 mx-2" />
                  <div className="technologies flex flex-col ">
                    <span className="text-lg font-semibold">
                      Technologies used in project :-{" "}
                    </span>
                    <span className="text-sm font-semibold text-center">
                      {project.technologies}
                    </span>
                  </div>
                  <hr className="border border-cyan-100 rounded-full my-4 mx-2" />
                  <div className="technologies">
                    <span className="text-lg font-semibold">
                      Project link :-{" "}
                    </span>
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      className="cursor-pointer font-semibold hover:animate-pulse duration-700 transition text-blue-600"
                    >
                      Link
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          {showCount < projects.length && (
            <button
              onClick={toggleShowMore}
              className="bg-sky-600 hover:bg-sky-500 text-cyan-100 text-sm font-semibold py-1 px-6 rounded-full cursor-pointer"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
