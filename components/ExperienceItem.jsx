import React from "react";
import Link from "next/link";

const ExperienceItem = ({
  title,
  subtitle,
  experienceUrl,
  img,
  date,
  location,
}) => {
  return (
    <div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white">
        <div className="flex flex-wrap gap-x-10 text-sm md:text-base gap-2 justify-evenly items-center">
          <div className="max-w-fit">
            <img src={img} alt="" className="w-36" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-base">{title}</h3>
            <p className="text-[12px] font-semibold">{subtitle}</p>
            <small className="">{date}</small>
            <small>{location}</small>
            <Link href={experienceUrl}>
              <a className="underline text-[#5651e5] underline-offset-4 mt-6">
                Click here to see details
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
