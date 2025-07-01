"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
// import { FlatArrow } from '@lordicon/react';

const Hero = () => {
  const words = [
    {
      text: "console.log",
    },
    {
      text: `("`,
    },
    {
      text: "Welcome ",
    },
    {
      text: "to",
    },
    {
      text: "my",
    },
    {
      text: "Portfolio!",
    },
    {
      text: `");`,
    },
  ];
  return (
    <section className="md:max-w-[85vw] h-screen py-20 px-4 mx-auto md:grid lg:grid-cols-[50vw_50vw] xl:grid-cols-[60vw_30vw] items-center md:justify-items-center xl:justify-items-start">
      <div className="">
        <div className="tracking-tighter leading-[3.6rem] text-[3rem] lg:leading-[5.6rem] lg:text-[4.2rem] font-semibold">
          <div className="font-firaCode text-lg text-coolCyan tracking-wide my-4">
            console.log("Welcome to my Portfolio!");
          </div>
          <h1 className="text-whitish">M.Obaid Ullah Khan</h1>
          <h1 className="text-brightGray">
            I design and build <br /> meaningful experiences.
          </h1>
        </div>

        <div className="mt-8">
          <p className="md:text-sm lg:text-md font-firaCode xl:max-w-[45vw] text-whitish">
            I am a tech polymath — a constantly evolving creator driven by,
            <br /> a passion for lifelong learning & desire to create valuable &
            immersive
            <br /> digital experiences that connect with users and leave a
            lasting impression.
          </p>
        </div>

        <div className="mt-8 flex items-center gap-1">
          <Link href="/contact">
            <button className="font-firaCode py-3 px-8 text-sm tracking-wide bg-coolCyan text-gray-900 font-semibold rounded-full ">
              Contact Me
            </button>
          </Link>
          {/* <Link href="/Obaid's-Resume.pdf" target="_blank" download="RESUME"> */}
          <Link href="https://github.com/Oba1d-Khan" target="_blank">
            <button className="ml-4 py-3 px-8 text-sm tracking-wide border border-slate-800 text-brightGray font-semibold rounded-full font-firaCode ">
              <div className="flex gap-2 items-center ">
                Github
                <GoArrowUpRight size={20} />
              </div>
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden lg:block ">
        <div className="bg-gray-50 relative group dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-dutchBlack dark:border-white/[0.2] border-black/[0.1] w-[25rem] h-auto rounded-2xl p-6 border transition-shadow duration-300 hover:shadow-lg flex flex-col">
          <div className="w-full">
            <Image
              src="/images/dp-bw.jpg"
              height={1000}
              width={1000}
              className="h-[25rem] w-full object-cover rounded-xl shadow-md"
              alt="obaid-pic"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
