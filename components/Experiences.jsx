import React from "react";
import ExperienceItem from "./ExperienceItem";

const Experience = ({ experience }) => {
  return (
    <div id="experience">
      <div className="w-full min-h-screen pt-10">
        <div className="max-w-[1240px] mx-auto px-16 py-16">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Experience
          </p>
          <h2 className="py-4">Work Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {experience.map((x, index) => {
              const imgurl = x.logo.data.attributes.url;
              return (
                <ExperienceItem
                  key={index}
                  title={x.jobTitle}
                  img={imgurl}
                  experienceUrl={"/experience/" + x.id}
                  subtitle={x.role}
                  date={x.duration}
                  location={x.location}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
