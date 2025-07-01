import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { GrView } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  src: string;
  link: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  src,
  link,
  githubLink,
}) => {
  return (
    <div className="bg-dutchBlack relative group  hover:shadow-emerald-500/[0.1] border-white/[0.2] w-[20rem] sm:w-[30rem] lg:w-auto h-auto rounded-2xl p-6 border transition-shadow duration-300 hover:shadow-lg flex flex-col">
      <div className="text-coolCyan font-semibold font-firaCode pb-2 text-xl">
        {title}
      </div>
      <div className="w-full mt-4">
        <Image
          src={src}
          height={1000}
          width={1000}
          className="h-60 w-full object-cover rounded-xl shadow-md"
          alt={title}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/images/placeholder-blur.png"
        />
      </div>
      <div className="flex justify-between items-center mt-8">
        <Link
          href={link}
          target="__blank"
          className="text-dutchBlack font-firaCode flex gap-2 items-center px-4 py-2 mt-4 bg-coolCyan/90 rounded-xl hover:bg-coolCyan transition-colors duration-200"
        >
          View
          <GrView />
        </Link>
        <Link
          href={githubLink}
          className="text-whitish font-firaCode flex gap-2 items-center px-4 py-2 mt-4 bg-carbon rounded-xl hover:bg-carbon/80 transition-colors duration-200"
        >
          <FiGithub size={20} />
          Code
          <GoArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
