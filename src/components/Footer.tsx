import Image from "next/image";
import {
  FIRM_NAME as firmName,
  SOCIALS as socials,
  SECTIONS as sections,
  LOGO_DARK,
  FIRM_NAME,
  LOGO_LIGHT
} from "@/constants/constants";

export default function Footer() {
  return (
    <footer className="z-20 pt-12 pb-4 space-y-10 flex flex-col justify-between md:bg-secondary-50 md:text-stone-50">
      <div className="flex flex-col gap-10 items-center justify-around md:flex-row-reverse">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1874.6980851140017!2d75.65471228708525!3d32.27063329373315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c7f5d473c84b3%3A0x5335739bee705d89!2sPathankot%2C%20Punjab%20145001!5e0!3m2!1sen!2sin!4v1712651016874!5m2!1sen!2sin"
          width="400"
          height="250"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-screen border-none px-4 md:w-[60vw]"
        ></iframe>

        <div className="flex flex-col w-full gap-4 md:w-1/2 p-4">

          <div className="flex flex-row gap-4 justify-around items-center md:border-b-2 md:border-slate-200/30 md:pb-2">

            <div className="hidden md:block">
              <Image src={LOGO_LIGHT} width={100} height={100} className="aspect-square object-contain w-100 h-100 m-auto" alt={FIRM_NAME + " logo"}/>
              <span className="m-3 italic">{FIRM_NAME}</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 font-medium text-gray-500 md:flex-col md:text-gray-200">
              {sections.map((section, index) => {
                return (
                  <a
                    className="hover:text-slate-400"
                    key={index}
                    href={"#" + section.id}
                  >
                    {section.name}
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="flex justify-center space-x-5 md:justify-around">
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
                    className="aspect-square md:bg-stone-50 md:rounded-full md:w-8 md:h-8 md:p-1"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <p className="text-center font-medium text-gray-700">
        &copy; 2024 {firmName}. All rights reserved.
      </p>
    </footer>
  );
}
