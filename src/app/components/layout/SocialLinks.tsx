"use client";
import { social_links } from "@/app/constants/data";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <>
      <div className="pt-4 max-w-[40vw] md:max-w-[30vw] mx-auto flex items-center gap-6 lg:gap-12 justify-evenly lg:justify-center">
        {social_links.map((link) => (
          <Link key={link.title} href={link.url} target="_blank" className=" ">
            <div>
              <link.icon />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SocialLinks;
