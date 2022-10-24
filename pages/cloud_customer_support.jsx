import React from "react";
import Image from "next/image";
import Link from "next/link";
import whogohost from "../public/whogohost.jpeg";

const instaclone = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
        <Image
          src={whogohost}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-8">
          <h2 className="py-2">Cloud Customer Support Executive</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 px-16 overflow-hidden gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Experience
          </p>
          <h2 className="py-2">Overview</h2>
          <p>• Handle customer complaints.</p>
          <p>• Finding RCA [Root cause Analysis] for sites that are down.</p>
          <p>• Assisting customers in Registering for Domains and Hosting.</p>
          <p>• Cloud hosting of mobile and web appications</p>
          <p>
            • Provide appropriate solutions and alternatives within the time
            limits.
          </p>
          <p>• Manage large amounts of incoming calls.</p>
          <p>
            • Maintain updated knowledge of all company products and services in
            order to provide adequate education to customers.
          </p>
          <p>
            • Provide information about relevant products like G-suite, e-mail
            hosting, Cloud and Linux hosting, domain transfer, registration etc.
          </p>
          <p>
            • Promptly respond to customer issues submitted via email or our
            website.
          </p>
          <p>
            • Using computerized systems to access the details of customers.
          </p>
          <p>• Follow communication procedures, guidelines and policies</p>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer mt-10 text-[#5651e5]">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default instaclone;
