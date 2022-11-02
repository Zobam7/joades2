import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 px-16 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className=" uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 max-w-xl">
            Johnson is a Versatile Engineer with 7+ years of experience managing
            complex Cloud, Hybrid, and on-premises Infrastructures. Hands-on
            Experience in Azure, Vmware. I'm very enthusiastic about the Cloud,
            DevOps, and Cybersecurity. A highly energetic and certified IT
            Professional with experience in Enterprise Solutions Architecture,
            Data Operations, Process Development, Corporate Training, Software
            Testing and Infrastructure Management. A well-organized,
            results-oriented individual with a strong passion for analyzing and
            organizing information to solve problems; developing, and executing
            strategies for business growth & improvement, identifying new
            opportunities and positioning technology solutions to meet digital
            transformation needs. An experienced Support Engineer and a proven
            team leader.
          </p>
          <p className="py-2  underline cursor-pointer uppercase  text-[#5651e5]">
            <Link href="/#projects">Check out my Experiences</Link>{" "}
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl "
            src="/about2.jpg"
            alt="aboutMe"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
