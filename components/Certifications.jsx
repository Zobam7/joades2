import React from "react";
import Certificate from "./Certificate";

const Certifications = ({ certifications }) => {
  const certificate_details = [
    {
      img: "/icsi.jpeg",
      title: "Certified Network Security Specialist",
      subtitle: "ICSI (International CyberSecurity Institute), UK",
      date: "Issued Apr 2020",
    },
    {
      img: "/microsoft.jpeg",
      title: "Microsoft Certified Azure Fundamentals",
      subtitle: "Microsoft",
      date: "Issued Nov 2019",
    },
    {
      img: "/mctp.jpeg",
      title: "Microsoft Certified Technology Specialist",
      subtitle: "Microsoft",
      date: "Issued May 2013",
    },
    {
      img: "/fort.jpeg",
      title: "Fortinet MSE 1 Network Security Associate",
      subtitle: "Fortinet",
      date: "Issued Apr 2020",
    },
    {
      img: "/fort.jpeg",
      title: "Fortinet MSE 2 Network Security Associate",
      subtitle: "Fortinet",
      date: "Issued Apr 2020",
    },
    {
      img: "/microsoft.jpeg",
      title: "Microsoft Certified Azure Adminstrator Associate",
      subtitle: "Microsoft",
      date: "Issued Sep 2019",
    },
    {
      img: "/microsoft.jpeg",
      title: "Microsoft Certified Trainer (MCT)",
      subtitle: "Microsoft",
      date: "Issued May 2020",
    },
    {
      img: "/babcock.jpeg",
      title: "B.Sc Computer Science (Information Systems)",
      subtitle: "Babcock University",
      date: "Issued 2016",
    },
  ];
  return (
    <div id="certifications">
      <div className="w-full min-h-screen pt-10">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full p-16">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Certifications
          </p>
          <h2 className="py-4">My Credentials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications?.map((x, index) => {
              const imgurl =
                process.env.NEXT_PUBLIC_BASEURL +
                x?.logo?.data?.attributes?.url;
              return (
                <Certificate
                  img={imgurl}
                  title={x.title}
                  subtitle={x.company}
                  date={x.dateIssued}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
