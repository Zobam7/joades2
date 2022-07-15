import React from "react";
import Image from "next/image";
import Link from "next/link";
import hulucloneimage from "../public/huluclone.png";
import { RiRadioButtonFill } from "react-icons/ri";

const huluclone = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/80 z-10" />
        <Image
          src={hulucloneimage}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-8">
          <h2 className="py-2">Hulu Clone</h2>
          <h3>Next.Js / Tailwind CSS / OpenWeatherMap API</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 px-16 overflow-hidden grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Project
          </p>
          <h2 className="py-2">Overview</h2>
          <p>This is movie website that shows movies based on your request.</p>

          <button className="px-4 py-2 mt-4 mr-8 rounded-md hover:scale-105 font-bold  ease-in duration-100 transition">
            <a
              href="https://hulu-clone-zobam7.vercel.app/"
              target={"_blank"}
              rel={"noreferrer"}
            >
              DEMO
            </a>
          </button>
          <button className="px-4 py-2 mt-4 rounded-md hover:scale-105 font-bold  ease-in duration-100 transition">
            <a
              href="https://github.com/Zobam7/Hulu_clone"
              target={"_blank"}
              rel={"noreferrer"}
            >
              CODE
            </a>
          </button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold  pb-2 uppercase  tracking-widest text-[#5651e5]">
              Technologies
            </p>
            <div className="grid grid-cols-1">
              <p className="text-gray-600 flex items-center py-2">
                <RiRadioButtonFill className="pr-1" /> Next.Js
              </p>
              <p className="text-gray-600 flex items-center py-2">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
              <p className="text-gray-600 flex items-center py-2">
                <RiRadioButtonFill className="pr-1" /> Tmdb Api API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default huluclone;