import React from "react";
import Image from "next/image";
import Link from "next/link";
import tekExperts from "../public/tek_experts.png";

const huluclone = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/50 z-10" />
        <Image
          src={tekExperts}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-8">
          <h2 className="py-2">Azure Cloud Support Engineer (Level 3)</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 px-16 overflow-hidden gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Experience
          </p>
          <h2 className="py-2">Overview</h2>
          <p>
            - work as a point of contact for escalations within the Azure
            Networking team.
          </p>
          <p>
            - training and onboarding of new hires into the Azure Networking
            team.
          </p>
        </div>
        <Link href="/#experience">
          <p className="underline cursor-pointer text-[#5651e5] mt-10">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default huluclone;
