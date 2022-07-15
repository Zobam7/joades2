import React from "react";
import Link from "next/link"

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 px-16 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className=" uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
          Always had a knack for technology and working with computers from a very young age, I always wanted to know how the internet was made and how everything on it works, this fueled my love for programming.
          As a React.js/Next.js Frontend Developer I use lots of technologies to create beautiful, fast and responsive website.
          </p>
          <p className="py-2 text-gray-600">
          My Love for programming keeps growing as I am currently learning Backend Development to become a Full Stack Developer and to make more impact in the programming world. 
          </p>
          <p className="py-2  underline cursor-pointer uppercase  text-[#5651e5]"><Link href="/#projects">
          Check out some of my latest projects
          </Link> </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <img className="rounded-xl" src="/about2.jpg" alt="aboutMe" />
        </div>
      </div>
    </div>
  );
};

export default About;
