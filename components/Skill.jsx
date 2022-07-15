import React from "react";
import Image from "next/image"


const Skill = ({ img, text }) => {
  return (
    <div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid md:grid-cols-2 text-sm md:text-base gap-2 justify-center items-center">
          <div className="m-auto">
            <Image src={img} width={45} height={45} alt="/" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>{text}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
