"use client";

import React from "react";
import { PiApplePodcastsLogoFill } from "react-icons/pi";
import { TbCricket } from "react-icons/tb";

const About = () => {
  return (
    <section className=" py-14">
      <div className="flex flex-col items-center gap-4 py-20 text-center font-semibold tracking-wide">
        <h5 className="text-xs text-transparentGray uppercase font-firaCode">
          Synopsis
        </h5>
        <h1 className="text-[2.8rem] text-whitish font-bold leading-[3.2rem]">
          About Me
        </h1>
        <p className="md:max-w-[60vw] text-sm text-transparentGray leading-6 tracking-wide font-firaCode">
          With a diverse skill set that includes UX design, UI design, full
          stack development, operational architecture, systems design,
          photography, and branding, I am a well-rounded digital professional.
        </p>
      </div>

      <div className="max-w-[90vw] md:max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-carbon rounded-3xl p-6 flex flex-col gap-4">
          <div className="flex  gap-4 items-center">
            <PiApplePodcastsLogoFill className="bg-gradient-to-r from-[#a7d575] to-[#52abc4]  text-2xl rounded-lg w-10 h-10 p-1" />

            <h2 className="text-whitish font-semibold ">
              Podcasts: Exploring the World Through Sound
            </h2>
          </div>

          <p className="text-sm text-transparentGray leading-[1.3rem] tracking-wide font-firaCode">
            I love diving into podcasts across a range of topics, from
            technology and science to true crime and comedy. They&apos;re a
            great way to stay informed, entertained, and inspired during
            downtime.
          </p>
        </div>

        <div className="bg-carbon rounded-3xl p-6 flex flex-col gap-4">
          <div className="flex  gap-4 items-center">
            <TbCricket className="bg-gradient-to-r from-[#a7d575] to-[#52abc4]  text-2xl rounded-lg w-10 h-10 p-1" />
            <h2 className="text-whitish font-semibold ">
              Cricket: Where Strategy Meets Passion
            </h2>
          </div>

          <p className="text-sm text-transparentGray leading-[1.3rem] tracking-wide font-firaCode">
            I&apos;m passionate about cricket, both playing and watching.
            There&apos;s something exhilarating about the game&apos;s strategic
            depth and the camaraderie it fosters among players.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
