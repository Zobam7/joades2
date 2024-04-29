import React from "react";
import Skills_details from "./SkillsItem";

const Skills = ({ skills }) => {
  return (
    <div id="skills">
      <div className="w-full min-h-screen pt-10">
        <div className="max-w-[1240px] py-16 px-16 mx-auto flex flex-col justify-center h-full">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Skills
          </p>
          <h2 className="py-4">What I Can Do</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills?.map((x, index) => {
              const imgurl =
                process.env.NEXT_PUBLIC_BASEURL +
                x?.logo?.data?.attributes?.url;
              return <Skills_details img={imgurl} text={x.skill} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
