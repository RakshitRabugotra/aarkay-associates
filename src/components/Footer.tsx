import Image from "next/image";
import {
  FIRM_NAME as firmName,
  SOCIALS as socials,
  SECTIONS as sections,
} from "@/constants/constants";

export default function Footer() {
  return (
    <footer className="m-2 py-12 flex flex-col space-y-10 justify-center items-center">

      <nav className="flex flex-wrap justify-center gap-6 font-medium text-gray-500">
        {sections.map((section, index) => {
          return (
            <a
              className="hover:text-accent-700"
              key={index}
              href={"#" + section.id}
            >
              {section.name}
            </a>
          );
        })}
      </nav>

      <div className="flex justify-center space-x-5">
        {socials.map((handle, index) => {
          return (
            <a
              href={handle.href}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Image
                src={handle.svgSrc}
                alt={handle.name}
                width={30}
                height={30}
                className="aspect-square"
              />
            </a>
          );
        })}
      </div>
      <p className="text-center font-medium text-gray-700">
        &copy; 2024 {firmName}. All rights reserved.
      </p>
    </footer>
  );
}
