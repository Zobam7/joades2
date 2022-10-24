import React from "react";
import Certificate from "./Certificate";

const Certifications = () => {
  const certificate_details = [
    {
      img: "/icsi.jpeg",
      title: "Certified Network Security Specialist",
      subtitle: "ICSI (International CyberSecurity Institute), UK",
      date: "Issued Apr 2020 - No Exipration Date",
    },
    {
      img: "/microsoft.jpeg",
      title: "Microsoft Certified Azure Fundamentals",
      subtitle: "Microsoft",
      date: "Issued Nov 2019 - No Exipration Date",
    },
    {
      img: "/mctp.jpeg",
      title: "Microsoft Certified Technology Specialist",
      subtitle: "Microsoft",
      date: "Issued May 2013 - No Exipration Date",
    },
    {
      img: "/fort.jpeg",
      title: "Fortinet MSE 1 Network Security Associate",
      subtitle: "Fortinet",
      date: "Issued Apr 2020 - Expired Apr 2022",
    },
    {
      img: "/fort.jpeg",
      title: "Fortinet MSE 2 Network Security Associate",
      subtitle: "Fortinet",
      date: "Issued Apr 2020 - Expired Apr 2022",
    },
    {
      img: "/microsoft.jpeg",
      title: "Microsoft Certified Azure Adminstrator Associate",
      subtitle: "Microsoft",
      date: "Issued Sep 2019 - Expired Sep 2021",
    },
    {
      img: "/microsoft.jpeg",
      title: "Microsoft Certified Trainer (MCT)",
      subtitle: "Microsoft",
      date: "Issued May 2020 - Expired May 2021",
    },
  ];
  return (
    <div id="certifications" className="w-full p-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Certifications
        </p>
        <h2 className="py-4">My Credentials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {certificate_details.map((x, index) => {
            return (
              <Certificate
                img={x.img}
                title={x.title}
                subtitle={x.subtitle}
                date={x.date}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
