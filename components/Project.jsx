import React from "react";
import Image from "next/image";
import spotifyclone from "../public/spotifyclone.png";
import netfliximage from "../public/netfliximage.png";
import weatherapp from "../public/weatherapp.png";
import huluclone from "../public/huluclone.png";
import googleclone from "../public/googleclone.png";
import eduweb from "../public/eduweb.png";
import elitediner from "../public/elitediner.png";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-16 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Project
        </p>
        <h2 className="py-4">What I have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem  title="Spotify Clone" backgroundImg={spotifyclone} projectUrl="/spotifyclone" framework="Next.js"/>
          <ProjectItem  title="Netflix Clone" backgroundImg={netfliximage} projectUrl="/netflixclone" framework="React.js"/>
          <ProjectItem  title="Google Clone" backgroundImg={googleclone} projectUrl="/googleclone" framework="Next.js"/>
          <ProjectItem  title="Hulu Clone" backgroundImg={huluclone} projectUrl="/huluclone" framework="Next.js"/>
          <ProjectItem  title="Weather App" backgroundImg={weatherapp} projectUrl="/weatherapp" framework="Next.js"/>
          <ProjectItem  title="School Web" backgroundImg={eduweb} projectUrl="/educationalwebsite" framework="JavaScript"/>
          <ProjectItem  title="Elite Diner" backgroundImg={elitediner} projectUrl="/elitediner" framework="React"/>
        </div>
      </div>
    </div>
  );
};

export default Project;
