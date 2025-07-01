"use client";
import React from "react";
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
          As a creative technologist, I craft intuitive digital experiences
          using a diverse set of tools and languages.
        </p>
      </div>

      {/* Languages & Tools */}
      <div>
        <h5 className="text-xs text-brightGray uppercase font-semibold font-firaCode">
          Languages & Tools
        </h5>
        <div className="grid grid-cols-5 gap-6 md:grid-cols-8 md:gap-5 lg:flex lg:gap-8 items-center p-6 font-firaCode">
          {SkillsLanguages.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={item.src} alt={item.title} className="w-10 h-10 mb-2" />
              <span className="text-xs text-brightGray">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Libraries & Frameworks */}
      <div className="mt-4">
        <h5 className="text-xs text-brightGray uppercase font-semibold">
          Libraries & Frameworks
        </h5>
        <div className="grid grid-cols-5 md:flex gap-6 lg:gap-8 items-center p-6 ">
          {SkillsLibraries.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={item.src} alt={item.title} className="w-10 h-10 mb-2" />
              <span className="text-xs text-brightGray">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Other Tools */}
      <div className="mt-4">
        <h5 className="text-xs text-brightGray uppercase font-semibold">
          Other Tools
        </h5>
        <div className="grid grid-cols-5 md:flex gap-6 lg:gap-8 items-center p-6 ">
          {SkillsOthers.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={item.src} alt={item.title} className="w-10 h-10 mb-2" />
              <span className="text-xs text-brightGray">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
