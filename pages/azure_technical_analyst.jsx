import React from "react";
import Image from "next/image";
import Link from "next/link";
import microsoftAzureImage from "../public/microsoft_azure.png"

const educationalwebsite = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/50 z-10" />
        <Image
          src={microsoftAzureImage}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-8">
          <h2 className="py-2">Azure Technical Analyst</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 px-16 overflow-hidden gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Experience
          </p>
          <h2 className="py-2">Overview</h2>
          <p>
            • Managed creative projects from concept to completion while
            collaborating with vendors.
          </p>
          <p>
            • Communicated changes in technology to key stakeholders in good
            time and provided recommendations for timely actions.
          </p>
          <p>
            • Identified changing technology issues and risks anddeveloping risk
            mitigation solutions
          </p>
          <p>
            • Mitigated risk and managed liability by proactively applying
            latest cybersecurity advisories and best practices to internal
            operations and product development.
          </p>
          <p>
            • Diagnosed Linux and windows processing problems and applied
            solutions to increase company efficiency
          </p>
          <p>
            • Restructured procedures
            by coordinating with project manager to create and execute projects.
          </p>
        </div>
        <Link href="/#experience">
          <p className="underline cursor-pointer text-[#5651e5] mt-10">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default educationalwebsite;
