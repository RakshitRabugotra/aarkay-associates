"use client";

import { FIRM_NAME, LOGO_DARK, SECTIONS as sections } from "@constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import { animated, useInView, useSpring, useTrail } from "react-spring";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  // Animate in and out
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [menuRef, menuInView] = useInView();
  const [spring, api] = useSpring(() => ({
    transform: "translateX(-100%)"
  }));

  useEffect(() => {
    api.start({
      transform: showMenu ? "translateX(0%)" : "translateX(-100%)"
    });
  }, [showMenu, api]);

  // Animate Menu items
  const [trail, trailApi] = useTrail(
    Object.values(sections).length + 1, // +1 for Contact Button
    () => ({
      from: {
        transform: "translateY(-10%)",
        opacity: 0
      },
      to: {
        transform: "translateY(0%)",
        opacity: 1
      },
      reset: true
    })
  );

  useEffect(() => {
    if (menuInView && trailApi)
      trailApi.start({ to: { opacity: 1 }, reset: true });
  }, [menuInView, trailApi]);

  return (
    <>
      <nav className="fixed z-30 inline-flex w-full items-center justify-between p-4 text-sm backdrop-blur-md">
        {/* The logo and name */}
        <div>
          <a href="/">
            <Image
              width={30}
              height={30}
              src={LOGO_DARK}
              alt={`${FIRM_NAME} logo`}
            />
          </a>
        </div>

        {/* Sections of the page */}
        <ul className="absolute left-1/2 top-1/2 hidden w-1/2 -translate-x-1/2 -translate-y-1/2 justify-around rounded-xl bg-slate-50/10 px-8 py-2 md:inline-flex">
          {Object.entries(sections).map(([section, { id }], index) => {
            return (
              <li key={index}>
                <a
                  href={"/#" + id}
                  className="text-base underline-offset-2 transition-all capitalize hover:text-stone-400 hover:underline"
                >
                  {section}
                </a>
              </li>
            );
          })}
        </ul>

        {/* The book demo */}
        <div className="inline-flex items-center gap-4">
          <a
            className={twMerge(
              "rounded-lg border-2 border-solid border-stone-300 bg-stone-300 p-2 text-base font-semibold text-stone-900",
              "md:rounded-full md:px-4 md:text-xs"
            )}
          >
            Book a Demo
          </a>

          {/* Contact Us if the screen is large enough, else hamburger */}
          <a
            href={"tel:+919569764949"}
            className="hidden rounded-full bg-stone-900 p-2 px-4 text-xs text-stone-50 md:block"
          >
            Contact Us
          </a>

          <button
            onClick={() => setShowMenu((prev) => true)}
            className="rounded-lg border-2 border-solid border-stone-900 bg-stone-900 p-2 px-4 text-base font-semibold text-stone-100 md:hidden"
          >
            Menu
          </button>
        </div>
      </nav>

      <animated.div
        className="fixed left-0 top-0 z-40 h-screen w-full bg-stone-50/90 p-2 backdrop-blur-sm "
        style={spring}
      >
        {/* Close Button */}
        <button
          onClick={() => setShowMenu((prev) => false)}
          className="absolute right-0 top-0 m-4 rounded-lg border-2 border-solid border-stone-900 bg-stone-900 p-2 px-4 text-base font-semibold text-stone-100 md:hidden"
        >
          Close
        </button>

        <animated.div
          className="flex h-full flex-col items-center justify-center gap-8"
          ref={menuRef}
        >
          {trail.map((props, index) =>
            index !== trail.length - 1 ? (
              <animated.a
                href={"#" + Object.values(sections)[index].id}
                onClick={() => setShowMenu((prev) => false)}
                key={index}
                style={props}
                className="rounded-xl p-2 text-3xl font-semibold uppercase text-stone-900"
              >
                {Object.keys(sections)[index]}
              </animated.a>
            ) : (
              <animated.a
                key={index}
                style={props}
                onClick={() => setShowMenu((prev) => false)}
                className="m-4 rounded-lg border-2 border-solid border-stone-900 bg-stone-900 p-2 px-4 text-xl font-semibold text-stone-100"
              >
                Contact Us
              </animated.a>
            )
          )}
        </animated.div>
      </animated.div>
    </>
  );
}
