"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
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
          className={`md:hidden fixed inset-0 z-50 flex items-center justify-end ${
            toggle ? "" : "pointer-events-none"
          } `}
        >
          {/* Slide-in drawer */}
          <div
            className={`h-full w-[95vw] max-w-[400px] bg-black/40 backdrop-blur-xl backdrop-brightness-125 text-whitish flex flex-col items-center justify-center relative  transition-transform duration-300 ease-in-out ${
              toggle ? "animate-slideInRight" : "translate-x-full"
            }`}
            style={{
              boxShadow: toggle ? "0 0 40px 0 rgba(0,0,0,0.3)" : undefined,
            }}
          >
            {/* Close icon for mobile nav */}
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-3xl text-whitish hover:text-coolCyan focus:outline-none"
              aria-label="Close menu"
            >
              <IoMdClose size={36} />
            </button>
            <ul className="flex flex-col items-center justify-center gap-8 w-full">
              {nav_links.map((link) => (
                <li
                  className="uppercase font-semibold cursor-pointer text-2xl tracking-wide"
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
        </div>

        {/* Toggle menu icons */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {!toggle ? (
              <HiOutlineMenuAlt3 size={30} />
            ) : (
              <IoMdClose size={30} />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
