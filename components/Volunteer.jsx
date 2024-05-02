import React from "react";
import Voluteering from "./VolunteerItem";

const Volunteer = ({ volunteerExperience }) => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-16 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Volunteer
        </p>
        <h2 className="py-4">My Volunteering Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {volunteerExperience.map((x, index) => {
            const imgurl = x.logo.data.attributes.url;
            return (
              <Voluteering
                key={index}
                title={x.title}
                img={imgurl}
                subtitle={x.company}
                date={x.duration}
                field={x.field}
                desc={x.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
