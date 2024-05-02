import React from "react";
import Markdown from "markdown-to-jsx";

const Volunteering = ({ title, subtitle, field, img, date, desc }) => {
  return (
    <div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white h-max">
        <div className="flex flex-wrap text-sm md:text-base gap-2 justify-evenly items-center">
          <div className="max-w-fit">
            <img
              src={img}
              alt=""
              className="w-[100px] h-[100px] object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-base">{title}</h3>
            <p className="text-[12px] font-semibold">{subtitle}</p>
            <small className="">{date}</small>
            <small>{field}</small>
            <div className="pt-2">
              <Markdown>{desc}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
