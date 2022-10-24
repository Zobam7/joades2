import React from "react";
import Image from "next/image";
import Link from "next/link";
import tekExperts from "../public/tek_expert_background.png"

const googleclone = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/60 z-10" />
        <Image
          src={tekExperts}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-8">
          <h2 className="py-2">Microsoft Azure Technical Team Lead</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 px-16 overflow-hidden  gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Experience
          </p>
          <h2 className="py-2">Overview</h2>
          <p>
          Team Lead in the Azure Networking Support team where in addition to Escalation engineer duties, I manage the team activities in order to achieve set goals and processes
          </p>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer mt-10 text-[#5651e5]">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default googleclone;
