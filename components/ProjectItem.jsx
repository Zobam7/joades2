import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ title, backgroundImg, projectUrl, framework}) => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-2 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <Image
          src={backgroundImg}
          alt="/"
          className="rounded-xl group-hover:opacity-10"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <h3 className="lg:text-2xl  text-base text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="lg:pb-4 pb-2 pt-1 md:pt-2 text-white text-center">{framework}</p>
          <Link href={projectUrl}>
            <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold lg:text-lg text-xs cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
