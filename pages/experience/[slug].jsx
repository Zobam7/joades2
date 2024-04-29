import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";

export default function Page() {
  const router = useRouter();
  const experienceId = router.query.slug;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_BASEURL + "/api/home-page"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData.data.attributes.experience);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const experience = data?.filter(
    (experience) => experience.id == experienceId
  );

  const experienceObject = experience?.reduce((acc, cur) => {
    acc[cur.id] = {
      jobTitle: cur.jobTitle,
      role: cur.role,
      duration: cur.duration,
      location: cur.location,
      logo: cur.logo,
      workDesc: cur.workDesc,
    };
    return acc;
  }, {});

  if (!experienceObject || Object.keys(experienceObject).length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      {Object.keys(experienceObject).map((id) => (
        <div className="" key={id}>
          <div className="relative w-full mx-auto">
            <img
              className="h-64 w-full object-cover rounded-md"
              src={
                process.env.NEXT_PUBLIC_BASEURL +
                experienceObject[id].logo?.data?.attributes?.url
              }
              alt="Random image"
            />
            <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold">
                {experienceObject[id].jobTitle}
              </h2>
            </div>
          </div>

          <div className="max-w-[1240px] mx-auto p-2 px-16 overflow-hidden gap-8 pt-8">
            <div className="col-span-4">
              <p className="uppercase text-xl tracking-widest text-[#5651e5]">
                Experience
              </p>
              <h2 className="py-2">Overview</h2>
              <Markdown>{experienceObject[id].workDesc}</Markdown>
            </div>
            <Link href="/#experience">
              <p className="underline cursor-pointer text-[#5651e5] mt-10">
                Back
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
