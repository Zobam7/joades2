import React from "react";
import Link from "next/link";

const About = ({ aboutDesc, aboutImg }) => {
  const imgurl =
    process.env.NEXT_PUBLIC_BASEURL + aboutImg?.data?.attributes.url;

  return (
    <div id="about">
      <div className="w-full min-h-screen pt-10 px-16 flex items-center">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 py-16">
          <div className="col-span-2">
            <p className=" uppercase text-xl tracking-widest text-[#5651e5]">
              About
            </p>
            <h2 className="py-4">Who I Am</h2>
            <p className="py-2 text-gray-600 max-w-xl tracking-wider break-words">
              {aboutDesc}
            </p>
            <p className="py-2  underline cursor-pointer uppercase  text-[#5651e5]">
              <Link href="/#experience">Check out my Experiences</Link>{" "}
            </p>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <img className="rounded-xl " src={imgurl} alt="aboutMe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
