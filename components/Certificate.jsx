import React from "react";
import Image from "next/image"


const Certificate = ({ title, subtitle, img, date }) => {
  return (
    <div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white">
        <div className="flex gap-x-10 text-sm md:text-base gap-2 justify-center items-center">
          <div className="max-w-fit">
            {/* <Image src={img} width={45} height={45} alt="/" /> */}
            <img src={img} alt="" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-base">{title}</h3>
            <p className="text-[12px] font-semibold">{subtitle}</p>
            <small className="">{date}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;