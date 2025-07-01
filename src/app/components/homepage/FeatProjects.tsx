"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { GrView } from "react-icons/gr";
import { projectListing } from "@/app/constants/data";

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

      <div className="md:max-w-[60vw] mx-auto grid gap-10 lg:grid-cols-2 justify-items-between items-center">
        {projectListing.slice(2, 4).map((item) => (
          <div
            key={item.title}
            className="bg-gray-50 relative group dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-dutchBlack dark:border-white/[0.2] border-black/[0.1] w-[20rem] sm:w-[30rem] lg:w-auto h-auto rounded-2xl p-6 border transition-shadow duration-300 hover:shadow-lg flex flex-col"
          >
            <div className="text-coolCyan font-semibold font-firaCode pb-2 text-xl">
              {item.title}
            </div>
            <div className="w-full mt-4">
              <Image
                src={item.src}
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl shadow-md"
                alt={item.title}
              />
            </div>
            <div className="flex justify-between items-center mt-8">
              <Link
                href={item.link}
                target="__blank"
                className="text-dutchBlack font-firaCode flex gap-2 items-center px-4 py-2 mt-4 bg-coolCyan/90 rounded-xl hover:bg-coolCyan transition-colors duration-200"
              >
                View
                <GrView />
              </Link>
              <Link
                href={item.githubLink}
                className="text-whitish font-firaCode flex gap-2 items-center px-4 py-2 mt-4 bg-carbon rounded-xl hover:bg-carbon/80 transition-colors duration-200"
              >
                <Image
                  src="/icons/github-icon.svg"
                  width={20}
                  height={20}
                  alt="github logo"
                />
                Code
                <GoArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatProjects;
