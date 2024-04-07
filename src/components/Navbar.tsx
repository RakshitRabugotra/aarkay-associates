"use client"

import { FIRM_NAME, LOGO_DARK, SECTIONS as sections } from "@constants";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Navbar() {

  const [show, setShow] = useState<boolean>(false);

  return (
    <>
    <nav className="fixed z-50 backdrop-blur-md inline-flex w-full items-center justify-between p-4 text-sm">
      {/* The logo and name */}
      <div>
        <a href="#">
          <Image
            width={30}
            height={30}
            src={LOGO_DARK}
            alt={`${FIRM_NAME} logo`}
          />
        </a>
      </div>

      {/* Sections of the page */}
      <ul className="hidden md:inline-flex absolute left-1/2 top-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 justify-around px-8 py-4">
        {sections.map((section, index) => {
          return (
            <li key={index} id={section.id}>
              <a href={"#" + section.id}>{section.name}</a>
            </li>
          );
        })}
      </ul>

      {/* The book demo */}
      <div className="inline-flex items-center gap-4">
        <a className="text-s">Book a Demo</a>

        {/* Contact Us if the screen is large enough, else hamburger */}
        <a
          href={"tel:+919569764949"}
          className="hidden md:block text-xs rounded-full bg-stone-900 p-2 px-4 text-stone-50"
        >
          Contact Us
        </a>

        <a onClick={() => setShow(prev => !prev)} className="md:hidden z-10 rounded bg-stone-900 p-2 px-4 text-stone-50">
          {show ? "Close" : "Menu"}
        </a>
      </div>
    </nav>
    <div className="hidden relative w-3/4 h-screen backdrop-blur-sm bg-stone-300 bg-opacity-30 flex flex-col justify-center items-center gap-8">
      {sections.map((section, index) => {
        return <a href={"#" + section.id} key={index} className="text-xl text-stone-900">{section.name}</a>
      })}
    </div>
    </>
  );
}
