import React from "react";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Joades from "../public/about2.jpg";

const About = ({ aboutDesc, aboutImg }) => {
  const imgurl = aboutImg.data.attributes.url || Joades;

  const myLoader = ({ src }) => {
    return aboutImg.data.attributes.url || Joades;
  };
  return (
    <div id="about">
      <div className="w-full min-h-screen pt-10 px-16 flex items-center">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 py-16">
          <div className="col-span-2">
            <p className=" uppercase text-xl tracking-widest text-[#5651e5]">
              About
            </p>
            <h2 className="py-4">Who I Am</h2>
            <div className="py-2 text-gray-600 max-w-xl tracking-wider break-words">
              <Markdown>{aboutDesc}</Markdown>
            </div>
            <p className="py-2  underline cursor-pointer uppercase  text-[#5651e5]">
              <Link href="/#experience">Check out my Experiences</Link>{" "}
            </p>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              loader={myLoader}
              className="rounded-xl object-cover"
              src={imgurl}
              alt="aboutMe"
              width={360}
              height={540}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
