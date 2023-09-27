import Image from "next/image";
import React from "react";
import Daco from "@/components/assets/Daco.png";

const IntroRight = () => {
  return (
    <div className="mt-5 lg:mt-1 min-[820px]:mt-20 ">
      <Image
        src={Daco}
        width={500}
        height={500}
        className="brightness-[1.4] contrast-200 grayscale-[0%]"
        alt="Picture of the author"
        loading="eager"
      />
    </div>
  );
};

export default IntroRight;
