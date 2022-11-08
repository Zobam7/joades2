import React from "react";


const Skills_details = ({ img, text }) => {
  return (
    <div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  bg-white">
        <div className="grid md:grid-cols-2 text-sm md:text-base justify-center items-center">
          <div className="m-auto w-full">
            <img src={img} alt="/" className="w-full h-14 object-contain"/>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>{text}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills_details;
