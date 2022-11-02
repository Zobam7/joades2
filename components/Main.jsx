import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&apos;S WORK TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Johnson</span>
          </h1>
          <h1 className="py-2 text-gray-700">A DevOps Engineer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] mx-auto">
            {" "}
            Johnson is a versatile Engineer with <strong>7+ years </strong>of experience managing complex Cloud, Hybrid and on-premises Infrastructures.
          </p>
          <div className="flex flex-wrap items-center justify-center mx-auto py-4 gap-5">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/johnson-a-bb1abb149"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://github.com/doktafelz"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="mailto:doktafelz@hotmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://twitter.com/thejoades"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter />
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
