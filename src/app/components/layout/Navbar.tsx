"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { nav_links } from "@/app/constants/data";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const ticking = useRef(false);

  // Enhanced scroll handler with smoother animations
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY < 40) {
            setShow(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setShow(false); // scrolling down
          } else if (currentScrollY < lastScrollY) {
            setShow(true); // scrolling up
          }

          setLastScrollY(currentScrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setToggle(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (toggle && !target.closest("[data-mobile-menu]")) {
        setToggle(false);
      }
    };

    if (toggle) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [toggle]);

  const toggleMenu = () => setToggle((prev) => !prev);

  const closeMenu = () => setToggle(false);

  return (
    <>
      <nav
        className={`mt-4 max-w-[90vw] lg:max-w-[60vw] flex justify-between items-center gap-4 h-16 mx-auto px-6 rounded-full bg-white/10 backdrop-blur-3xl border border-white/20 shadow-md sticky top-4 z-50
        transition-all duration-500 ease-out will-change-transform
        ${
          show
            ? "translate-y-0 opacity-100 scale-100"
            : "-translate-y-full opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div>
          <h1 className="text-xl lg:text-2xl text-whitish font-semibold font-firaCode">
            Obaid Khan.
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center justify-between gap-6 font-firaCode">
            {nav_links.map((link) => (
              <li
                className={`text-sm uppercase font-semibold cursor-pointer transition-all duration-300 hover:text-coolCyan ${
                  pathname === link.url
                    ? "pb-1 px-4 border-b-2 border-coolCyan text-coolCyan"
                    : "text-whitish hover:scale-105"
                }`}
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50" data-mobile-menu>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full transition-all duration-300 hover:bg-white/10 active:scale-95"
            aria-label={toggle ? "Close menu" : "Open menu"}
          >
            {toggle ? (
              <IoMdClose size={24} className="text-whitish" />
            ) : (
              <HiOutlineMenuAlt3 size={24} className="text-whitish" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ease-out ${
          toggle
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        {/* Blurred Background Overlay */}
        <div
          className={`absolute inset-0 backdrop-blur-md bg-black/40 transition-all duration-500 ${
            toggle ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        {/* Slide-in Menu */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white/10 backdrop-blur-3xl backdrop-brightness-125 text-whitish flex flex-col items-center justify-center transition-all duration-500 ease-out  shadow-2xl ${
            toggle ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
          data-mobile-menu
        >
          {/* Menu Items */}
          <ul className="flex flex-col items-center justify-center gap-8 w-full px-8">
            {nav_links.map((link, index) => (
              <li
                className={`uppercase font-semibold cursor-pointer text-xl tracking-wide transition-all duration-300 hover:text-coolCyan hover:scale-110 ${
                  toggle ? "animate-slideUp" : ""
                }`}
                key={link.title}
                style={{
                  animationDelay: toggle ? `${index * 100}ms` : "0ms",
                  animationFillMode: "both",
                }}
              >
                <Link
                  href={link.url}
                  onClick={closeMenu}
                  className={`block py-2 px-4 rounded-lg transition-all duration-300 ${
                    pathname === link.url
                      ? "text-coolCyan  bg-white/5"
                      : "text-whitish hover:bg-white/10"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
