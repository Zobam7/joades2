import React from "react";
import Voluteering from "./volunteering";

const Volunteer = () => {
  const voluteer_details = [
    {
      title: "Instructor",
      subtitle: "TechQuest",
      date: "Sep 2018 - Jan 2019 · 5 mos",
      field: "Science and Technology",
      desc: " In partnership with Google, Africa Code Week and the Cape Town Science Center. I volunteered under TechQuest to teach kids in Junior and Senior",
      img: "/techquest.jpeg",
    },
    {
      title: "Volunteer, Instructor",
      subtitle: "Eagles' H.O.P.E Foundation",
      date: "Jul 2019 - Present · 3 yrs 5 mos",
      field: "Education",
      desc: "A global non-governmental organization from the stable of Covenant University Alumni Association. 'Helping Other People Excel",
      img: "/hope.jpeg",
    },
    {
      title: "Instructor, System administrator/computer infrastructure",
      subtitle: "The Creative Kids Zone",
      date: "Jun 2019 - Present · 3 yrs 6 mos",
      field: "Science and Technology",
      desc: 'Did you know that 6 out of 10 most successful tech leaders started coding before the age of 15?!',
      img: "/creative_zone.jpeg",
    },
  ];
  return (
    <div id="experience" className="w-full">
      <div className="max-w-[1240px] mx-auto px-16 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Volunteer
        </p>
        <h2 className="py-4">My Volunteering Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {voluteer_details.map((x, index) => {
            return (
              <Voluteering
                key={index}
                title={x.title}
                img={x.img}
                subtitle={x.subtitle}
                date={x.date}
                field={x.field}
                desc={x.desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Volunteer;