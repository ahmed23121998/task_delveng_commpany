import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { CourseDetailsSection } from "./sections/CourseDetailsSection/CourseDetailsSection";
import { LessonSection } from "./sections/LessonSection";
import { NavigationSection } from "./sections/NavigationSection";

const Items = [
  { label: "Home", isActive: false },
  { label: "Courses", isActive: false },
  { label: "MEP Engineering", isActive: true },
];

export const CourseDetails = (): JSX.Element => {
  return (
    <div className="bg-white w-full flex flex-col">
      <NavigationSection />

      <div className="w-full px-10 pt-6 mt-20 flex items-center gap-1 cursor-pointer">
        {Items.map((item, index) => (
          <React.Fragment key={index}>
            {item.isActive ? (
              <span className="text-blackmain-text-color font-medium">
                {item.label}
              </span>
            ) : (
              <span className="text-black-400 font-medium cursor-pointer hover:underline">
                {item.label}
              </span>
            )}

            {index < Items.length - 1 && (
              <ChevronRightIcon className="w-5 h-5 text-black-400" />
            )}
          </React.Fragment>
        ))}
      </div>

      <CourseDetailsSection />
      <LessonSection />
    </div>
  );
};
