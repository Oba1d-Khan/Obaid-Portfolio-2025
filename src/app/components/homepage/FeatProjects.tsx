"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { GrView } from "react-icons/gr";
import { projectListing } from "@/app/constants/data";
import ProjectCard from "../shared/ProjectCard";

const FeatProjects = () => {
  return (
    <section className="p-4">
      <div className="flex flex-col items-center gap-4 py-20 text-center font-semibold tracking-wide">
        <h5 className="text-xs text-brightGray uppercase font-firaCode ">
          UX and client-side
        </h5>
        <h1 className="text-[2.5rem] text-whitish font-bold leading-[3.2rem]">
          Featured Projects
        </h1>
        <p className="text-sm text-brightGray leading-5 tracking-wide font-firaCode">
          Focused on the experience, driven by <br /> the engineering.
        </p>
      </div>

      <div className="md:max-w-[60vw] mx-auto flex flex-col gap-10 md:flex-row  justify-items-between items-center">
        {projectListing.slice(0, 2).map((item) => (
          <ProjectCard
            key={item.title}
            title={item.title}
            src={item.src}
            link={item.link}
            githubLink={item.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatProjects;
