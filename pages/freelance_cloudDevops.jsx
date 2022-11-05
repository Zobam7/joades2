import React from "react";
import Image from "next/image";
import Link from "next/link";
import Fiverr from "../public/fiverrbg.png"
const huluclone = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/30 z-10" />
        <Image
          src={Fiverr}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-8">
          <h2 className="py-2">Cloud/DevOps Engineer</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 px-16 overflow-hidden gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Experience
          </p>
          <h2 className="py-2">Overview</h2>
          <p>
            - Designed and implemented Continuous Integration and Continuous Deployment frameworks from code to deploy using AWS, Azure DevOps Pipelines, Jenkins along with Python and Shell scripts to automate routine jobs. JIRA and BitBucket Integration.
          </p>
          <p>
            - Implemented operational processes to streamline integration intake, development, and post-production support; actively participated in 24x7 incident support and triage. Developed and executed Requests for Proposals from start to finish, developed change requests, Proof of Concept, and provided approval and sign-off on invoices.
          </p>
          <p>
            - Write Infrastructure as Code (IaC) using ARM, Terraform; Kubernetes, and containerization technologies like Docker.
          </p>
          <p>
            - Scheduled meetings with key stakeholders to capture, analyze, and derive DevOps requirements.
          </p>
          <p>
            - Liaise with development teams to assist with various automation and configuration tasks.
          </p>
          <p>
            - Azure cloud system creation including end-to-end infrastructure, VMs, storage, Azure firewall rules, and routes.
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
