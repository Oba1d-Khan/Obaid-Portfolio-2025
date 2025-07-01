"use client";
import React from "react";
import Image from "next/image";
import {
  SkillsLanguages,
  SkillsLibraries,
  SkillsOthers,
} from "@/app/constants/data";

const Skills = () => {
  return (
    <section className="p-14" data-aos="fade-up">
      <div className="flex flex-col items-center gap-4 py-20 text-center font-semibold tracking-wide">
        <h5 className="text-xs text-brightGray uppercase font-firaCode">
          A Look at my
        </h5>
        <h1 className="text-[2.5rem] text-whitish font-bold leading-[3.2rem]">
          My Skills
        </h1>
        <p className="text-sm text-brightGray leading-5 tracking-wide font-firaCode">
          As a creative technologist, <br /> I craft intuitive digital
          experiences <br /> using a diverse set of tools and languages.
        </p>
      </div>

      {/* Languages & Tools */}
      <div>
        <h5 className="text-xs text-brightGray uppercase font-semibold font-firaCode">
          Languages & Tools
        </h5>
        <div className="flex flex-wrap items-center gap-4 md:gap-8 p-6 font-firaCode">
          {SkillsLanguages.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center w-20 h-20 relative group"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={40}
                height={40}
                className="w-10 h-10"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/images/placeholder-blur.png"
              />
              <span className="text-xs text-brightGray opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -bottom-0 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-center">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Libraries & Frameworks */}
      <div className="mt-4">
        <h5 className="text-xs text-brightGray uppercase font-semibold">
          Libraries & Frameworks
        </h5>
        <div className="flex flex-wrap  items-center gap-8 p-6">
          {SkillsLibraries.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center w-20 h-20 relative group"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={40}
                height={40}
                className="w-10 h-10"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/images/placeholder-blur.png"
              />
              <span className="text-xs text-brightGray opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -bottom-0 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-center">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Other Tools */}
      <div className="mt-4">
        <h5 className="text-xs text-brightGray uppercase font-semibold">
          Other Tools
        </h5>
        <div className="flex flex-wrap  items-center gap-8 p-6">
          {SkillsOthers.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center w-20 h-20 relative group"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={40}
                height={40}
                className="w-10 h-10"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/images/placeholder-blur.png"
              />
              <span className="text-xs text-brightGray opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -bottom-0 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-center">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
