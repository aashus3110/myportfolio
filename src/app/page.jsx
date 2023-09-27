import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Intro />
      <div className="border-2 rounded-full md:mx-8 mx-4 my-4 border-black drop-shadow-md "></div>
      <Skills />
      <div className="border-2 rounded-full md:mx-8 mx-4 my-4 border-black drop-shadow-md "></div>
      <Project />
      <div className="border-2 rounded-full md:mx-8 mx-4 my-4 border-black drop-shadow-md "></div>
    </>
  );
}
