import React from "react";
import ExperienceItem from "./Experience";

const Experience = () => {
  const experience_details = [
    {
      title: "Azure Technical Analyst",
      subtitle: "NTS Africa Services Limited · Full-time",
      date: "Dec 2019 - Jul 2020 · 8 mos",
      location: "Lagos, Nigeria",
      experienceUrl: "/azure_technical_analyst",
      img: "/ata.jpeg",
    },
    {
      title: "Azure DevOps, Intern4afrika",
      subtitle: "Microsoft · Internship",
      date: "Oct 2019 - Dec 2019 · 3 mos",
      location: "Lagos, Nigeria",
      experienceUrl: "/azure_devops",
      img: "/microsoft.jpeg",
    },
    {
      title: "Tek Experts",
      subtitle: "Microsoft Azure Technical Team Lead",
      subtitle: "Microsoft Azure Technical Team Lead",
      date: "Apr 2019 - Sep 2019 · 6 mos",
      location: "Lagos, Nigeria",
      experienceUrl: "/microsoft_azure_team_lead",
      img: "/tek_experts.png",
    },
    {
      title: "Tek Experts",
      subtitle: "Azure Cloud Support Engineer (Level 3)",
      date: "Jan 2019 - Mar 2020 · 3 mos",
      location: "Lagos, Nigeria",
      experienceUrl: "/azure_cloud_engineer",
      img: "/tek_experts.png",
    },
    {
      title: "Tek Experts",
      subtitle: "Azure Cloud Support Engineer (Level 2)",
      date: "Sep 2018 - Mar 2019 · 7 mos",
      location: "Lagos, Nigeria",
      experienceUrl: "/azure_cloud_engineer2",
      img: "/tek_experts.png",
    },
    {
      title: "Cloud Customer Support Executive",
      subtitle: "WhoGoHost · Part-time",
      date: "Jan 2018 - Mar 2018 · 3 mos",
      location: "Lagos, Nigeria",
      experienceUrl: "/cloud_customer_support",
      img: "/cloud_customer.jpeg",
    },
    {
      title: "System Administrator",
      subtitle: "Cross River University of Technology (CRUTECH)",
      date: "Apr 2017 - Dec 2017 · 9 mos",
      location: "Okuku, Cross River state, Nigeria",
      experienceUrl: "/system_admin",
      img: "/system_admin.jpeg",
    },
  ];
  return (
    <div id="experience" className="w-full">
      <div className="max-w-[1240px] mx-auto px-16 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Experience
        </p>
        <h2 className="py-4">My Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {experience_details.map((x, index) => {
            return (
              <ExperienceItem
                key={index}
                title={x.title}
                img={x.img}
                experienceUrl={x.experienceUrl}
                subtitle={x.subtitle}
                date={x.date}
                location={x.location}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
