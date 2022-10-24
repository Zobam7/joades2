import React from "react";
import Image from "next/image";
import Link from "next/link";
import microsoftAzureImage from "../public/microsoft_azure.png"

const elitediner = () => {
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
          <h2 className="py-2">Azure DevOps, Intern4afrika</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 px-16 overflow-hidden gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Experience
          </p>
          <h2 className="py-2">Overview</h2>
          <p>
            In Microsoft intern for Africa initiatives for 7 months. The program
            includes instructor-led training. The practical section involves
            working in a partner organization, adding value, and aligning to
            their business objectives.
          </p>
          <p>• Versioning, Git, Github, Azure DevOps</p>
          <p>
            • Engaging customers in digital transformation and discussions to
            migrate client/server applications and platforms to cloud
            environments
          </p>
          <p>
            • Perform high-level requirements gathering and solution design for
            clients
          </p>
          <p>• Prepare Technical Proposals.</p>
          <p>
            • Contribute to the development of Client Training programs by
            identifying learning issues and recommending instructional
            materials.
          </p>
          <p>• Began my Azure DevOps training.</p>
          <p>
            • Azure Cloud Administrator which cut across IAAS and PASS
            deployment
          </p>
          <p>
            • Wrote certifications which cut across Microsoft modern workspace
            and Azure.
          </p>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer text-[#5651e5] mt-10">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default elitediner;
