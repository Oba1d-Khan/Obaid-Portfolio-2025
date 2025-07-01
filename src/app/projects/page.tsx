import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { GrView } from "react-icons/gr";
import ProjectCard from "../components/shared/ProjectCard";
import { projectListing } from "@/app/constants/data";

const page = () => {
  return (
    <>
      <section className="my-20 ">
        <div className="flex flex-col items-center gap-4 py-20 text-center font-semibold tracking-wide">
          <h5 className="text-xs text-brightGray uppercase font-firaCode">
            UX & CLIENT SIDE
          </h5>
          <h1 className="text-[2.5rem] text-whitish font-bold leading-[3.2rem]">
            My Projects
          </h1>
          <p className="text-sm text-brightGray leading-5 tracking-wide max-w-[60vw] font-firaCode">
            Focused on the experience, driven by the engineering.
          </p>
        </div>

        <div className="max-w-[85vw] mx-auto grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-stretch">
          {projectListing.map((item) => (
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
    </>
  );
};

export default page;
