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
            A subject matter expert in areas of the Windows desktop operating
            system as well as multiple cloud providers, TCP / IP, Routers, WAPs,
            Wireless, GITHUB, Azure, ITIL, AWS, Azure Admin, and load balancing.
            Cloud Engineer professional possessing exceptional attention to
            detail, customer service, customer success professional written, and
            interpersonal skills. A technical analyst and I have a proven
            ability in addressing and overcoming obstacles, with the use of
            problem-solving and critical thinking.
          </p>
          <p className="py-2  underline cursor-pointer uppercase  text-[#5651e5]">
            <Link href="/#projects">Check out my Experiences</Link>{" "}
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src="https://media-exp1.licdn.com/dms/image/C4D03AQFVV_0AjKp67w/profile-displayphoto-shrink_400_400/0/1653254371408?e=1671667200&v=beta&t=s9qu1lapp7gGbT1KDl5I72SZCUSS0M1ExFZjQDdq8ks" alt="aboutMe" />
        </div>
      </div>
    </div>
  );
};

export default About;
