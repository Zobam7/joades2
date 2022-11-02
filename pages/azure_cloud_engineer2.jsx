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
          <h2 className="py-2">Azure Cloud Support Engineer (Level 2)</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 px-16 overflow-hidden gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Experience
          </p>
          <h2 className="py-2">Overview</h2>
          <p>• Cloud Networking Technical Support to Customers worldwide.</p>
          <p>
            • Constantly repro&lsquo;ing customers environment to resolve
            technical issues that are not limited to Application Gateway, VPN,
            EXPRESSROUTE, Load Balancers and Virtual Networks to get a better
            insight to issues being face by Azure customer while driving towards
            a resolution and business impact.
          </p>
          <p>
            • Providing resolutions for highly complex and critical customer
            issues by coupling technical excellence with customer service on
            Azure networking issues.
          </p>
          <p>
            • Sound skill of network analysis using Wireshark, Microsoft network
            monitoring.
          </p>
          <p>• Debugging of VPN Tunnels (site-to-site/point-to-site).</p>
          <p>
            • Troubleshooting Load Balancers (Private/Public), Layer7 and DNS
            based LB.
          </p>
          <p>
            • Configuration & Troubleshooting of Phase 1 and Phase 2 VPN Tunnels
            with Cisco ASA, SonicWall, Barracuda, Palo Alto devices etc.
          </p>
          <p>• Configuration & Troubleshooting of NSG, ACL, WAF, UDR.</p>
        </div>
        <Link href="/#experience">
          <p className="underline cursor-pointer text-[#5651e5] mt-10">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default huluclone;
