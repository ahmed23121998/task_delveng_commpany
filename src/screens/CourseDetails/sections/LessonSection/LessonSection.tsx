"use client";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { Separator } from "../../../../components/ui/separator";

const navigationLinks = [
  { label: "Home", href: "#" },
  { label: "Courses", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Community", href: "#" },
];

const socialIcons = [
  { Icon: FacebookIcon, label: "Facebook" },
  { Icon: InstagramIcon, label: "Instagram" },
  { Icon: TwitterIcon, label: "Twitter" },
  { Icon: LinkedinIcon, label: "LinkedIn" },
];

export const LessonSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full items-center justify-center gap-8 px-4 sm:px-8 md:px-16 lg:px-20 py-16 bg-black-50">
      <div className="flex flex-col items-center gap-8 w-full max-w-screen-xl">
        <div className="flex flex-col items-center gap-4 px-4 text-center">
          <img
            className="w-[180px] sm:w-[200px] md:w-[230px] h-auto"
            alt="Logo"
            src="/logo--2--5.png"
          />
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-full sm:max-w-lg md:max-w-xl text-black-600">
            At Delveng, we make learning engineering fun and effective. Our
            approach combines interactive lessons, real-world projects, and
            gamified elements to keep you engaged and motivated.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 font-medium text-blackmain-text-color text-sm sm:text-base">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-primary-colorprimary transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-3">
          <p className="font-semibold text-black-400 text-sm sm:text-base text-center">
            Follow Us:
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {socialIcons.map(({ Icon, label }, index) => (
              <a
                key={index}
                href="#"
                className="w-6 h-6 flex items-center justify-center text-blackmain-text-color hover:text-primary-colorprimary transition-colors cursor-pointer"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          <Separator className="w-full max-w-screen-xl bg-black-300" />
          <p className="text-center text-xs sm:text-sm text-black-400">
            &copy; 2025 Delveng. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
