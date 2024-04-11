import Image from "next/image";
import {
  FIRM_NAME as firmName,
  SOCIALS as socials,
  SECTIONS as sections
} from "@/constants/constants";

export default function Footer() {
  return (
    <footer className="z-20 flex flex-col justify-between space-y-10 pb-4 pt-12">
      <nav className="flex flex-wrap justify-center gap-6 font-medium text-gray-500">
        {Object.entries(sections).map(([section, { id }], index) => {
          return (
            <a
              className="hover:text-slate-400 capitalize"
              key={index}
              href={"#" + id}
            >
              {section}
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
                className="aspect-square md:h-8 md:w-8 md:rounded-full md:bg-stone-50 md:p-1"
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
