"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { nav_links } from "@/app/constants/data";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <nav className="relative max-w-[90vw] lg:max-w-[60vw] flex justify-around items-center gap-4 h-20 mx-auto rounded-full bg-coolCyan/10">
        <div>
          <h1 className="text-2xl text-whitish font-semibold font-firaCode">
            Obaid Khan.
          </h1>
        </div>

        {/* Large devices Menu */}
        <div className="hidden md:block ">
          <ul className="flex items-center justify-between gap-6 font-firaCode">
            {nav_links.map((link) => (
              <li
                className={`md:text-sm uppercase font-semibold cursor-pointer text-whitish ${
                  pathname === link.url
                    ? "pb-1 px-4 border-b-2 border-coolCyan  text-brightGray"
                    : ""
                }`}
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden ${
            toggle
              ? "z-50 fixed top-10 max-h-[50vh] flex flex-col items-center rounded-xl py-20 px-40 mt-20 bg-black/40  backdrop-blur-md backdrop-brightness-150 text-whitish"
              : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center justify-between gap-6">
            {nav_links.map((link) => (
              <li
                className="uppercase font-semibold cursor-pointer"
                key={link.title}
              >
                <Link
                  href={link.url}
                  onClick={toggleMenu}
                  className={`$${
                    pathname === link.url &&
                    "pb-1 px-4 border-b-2 border-coolCyan text-whitish "
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Toggle menu icons */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <Image
              src={
                !toggle ? "/icons/hamburger-icon.svg" : "/icons/close-icon.svg"
              }
              width={30}
              height={20}
              alt="ham menu"
            />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
