import React from "react";
import IntroLeft from "./IntroLeft";
import IntroRight from "./IntroRight";

const Intro = () => {
  return (
    <div className="md:h-[32rem] h-[38rem] min-[400px]:h-[45rem] min-[500px]:h-[47rem] min-[775px]:h-[28rem] flex md:flex-row flex-col ">
      <div className="md:w-1/2 min-[400px]:h-[60%]  w-full px-4 h-full ">
        <IntroLeft />
      </div>
      <div className="md:w-1/2 w-full px-4 h-full">
        <IntroRight />
      </div>
    </div>
  );
};

export default Intro;
