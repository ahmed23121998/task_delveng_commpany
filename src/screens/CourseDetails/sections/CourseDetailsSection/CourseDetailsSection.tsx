"use client";

import { StarIcon } from "lucide-react";
import React, { useState } from "react";
import { LessonModal } from "../../../../components/LessonModal";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

const knowledgeAreas = [
  { id: 1, name: "Air Distribution System", active: true },
  { id: 2, name: "Equipment Sizing", active: false },
  { id: 3, name: "Exhaust System", active: false },
  { id: 4, name: "Piping System", active: false },
  { id: 5, name: "System Type Selection", active: false },
  { id: 6, name: "Thermal Analysis", active: false },
  { id: 7, name: "Ventilation", active: false },
  { id: 8, name: "Zoning and Control Strategy", active: false },
];

const lessonsData = [
  {
    id: 0,
    name: "Foundation Lesson",
    status: "completed" as const,
    description:
      "Master the fundamentals of Mechanical, Electrical, and Plumbing systems in modern engineering projects. Build a strong foundation for your MEP career.",
    quizCount: 10,
    duration: "1 Hour",
    questionCount: 10,
  },
  {
    id: 1,
    name: "Lesson 1",
    status: "in_progress" as const,
    description:
      "Learn advanced air distribution techniques and system design principles. Understand how to optimize airflow for maximum efficiency.",
    quizCount: 8,
    duration: "45 Minutes",
    questionCount: 12,
  },
  {
    id: 2,
    name: "Lesson 2",
    status: "locked" as const,
    description:
      "Explore equipment sizing methodologies and load calculations. Master the art of selecting the right equipment for your projects.",
    quizCount: 10,
    duration: "1.5 Hours",
    questionCount: 15,
  },
  {
    id: 3,
    name: "Lesson 3",
    status: "locked" as const,
    description:
      "Deep dive into exhaust system design and ventilation strategies. Learn how to create safe and efficient exhaust systems.",
    quizCount: 7,
    duration: "50 Minutes",
    questionCount: 10,
  },
  {
    id: 4,
    name: "Lesson 4",
    status: "locked" as const,
    description:
      "Study piping system layouts and best practices. Understand the principles of effective piping design and installation.",
    quizCount: 9,
    duration: "1 Hour 15 Minutes",
    questionCount: 13,
  },
  {
    id: 5,
    name: "Lesson 5",
    status: "locked" as const,
    description:
      "Master thermal analysis techniques for building systems. Learn how to calculate heat loads and optimize thermal performance.",
    quizCount: 11,
    duration: "2 Hours",
    questionCount: 18,
  },
  {
    id: 6,
    name: "Lesson 6",
    status: "locked" as const,
    description:
      "Explore advanced ventilation requirements and code compliance. Ensure your designs meet all safety and regulatory standards.",
    quizCount: 8,
    duration: "1 Hour",
    questionCount: 12,
  },
  {
    id: 7,
    name: "Lesson 7",
    status: "locked" as const,
    description:
      "Learn about smart building automation and control strategies. Integrate modern technology into your MEP designs.",
    quizCount: 12,
    duration: "1.5 Hours",
    questionCount: 16,
  },
];

const vectorImages = [
  {
    src: "/vector-492.png",
    className:
      "absolute top-[155px] left-[195.19px] w-[251px] h-52 transition-opacity duration-500 lesson-path lesson-path-0",
  },
  {
    src: "/vector-493.png",
    className:
      "absolute top-[274px] left-[392.19px] w-[263px] h-[178px] transition-opacity duration-500 lesson-path lesson-path-1",
  },
  {
    src: "/vector-494.png",
    className:
      "absolute top-[7px] left-56 w-44 h-[164px] transition-opacity duration-500 lesson-path lesson-path-foundation",
  },
  {
    src: "/vector-495.png",
    className:
      "absolute top-[470px] left-[361.19px] w-[150px] h-[102px] transition-opacity duration-500 lesson-path lesson-path-2",
  },
  {
    src: "/vector-496.png",
    className:
      "absolute top-[613px] left-[330px] w-[204px] h-[162px] transition-opacity duration-500 lesson-path lesson-path-3",
  },
  {
    src: "/vector-497.svg",
    className:
      "absolute top-[755px] left-[175px] w-[280px] h-[164px] transition-opacity duration-500 lesson-path lesson-path-4",
  },
];

const lessonPositions = [
  { top: "15px", left: "370px" },
  { top: "135px", left: "235px" },
  { top: "272px", left: "390px" },
  { top: "440px", left: "440px" },
  { top: "560px", left: "350px" },
  { top: "689px", left: "412px" },
  { top: "725px", left: "225px" },
  { top: "830px", left: "360px" },
];

const lessonImages = [
  "/group.png",
  "/group-1.png",
  "/frame-2085663902.svg",
  "/frame-2085663903.svg",
  "/frame-2085663904.svg",
  "/group-3.png",
  "/group-4.png",
  "/group-5.png",
];

export const CourseDetailsSection = (): JSX.Element => {
  const [selectedLesson, setSelectedLesson] = useState<
    (typeof lessonsData)[0] | null
  >(null);
  const [hoveredLessonId, setHoveredLessonId] = useState<number | null>(null);

  const handleLessonClick = (lessonId: number) => {
    const lesson = lessonsData.find((l) => l.id === lessonId);
    if (lesson && lesson.status !== "locked") {
      setSelectedLesson(lesson);
    }
  };

  const handleCloseModal = () => {
    setSelectedLesson(null);
  };

  return (
    <section className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-10 w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-[248px] w-full">
        <Card className="w-full lg:flex-1 p-3 sm:p-4 bg-white rounded-xl border border-[#e6e6e6] hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
          <CardContent className="p-0">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="flex items-center justify-center gap-[10.8px] p-[6.68px] bg-black-50 rounded-[13.36px] border-[1.08px] border-solid border-[#eff3ff] w-full sm:w-auto">
                <img
                  className="w-[100px] sm:w-[110px] md:w-[129.64px] h-[100px] sm:h-[110px] md:h-[129.64px] rounded-[6.68px] object-cover"
                  alt="Chatgpt image oct"
                  src="/chatgpt-image-oct-10--2025--08-09-09-pm-1.png"
                />
              </div>

              <div className="flex flex-col items-start justify-center gap-2 px-2 py-0 w-full sm:w-auto">
                <Badge className="h-6 gap-1 px-2 py-1 bg-secondary-50 rounded-[999px] hover:bg-secondary-50">
                  <img
                    className="w-2.5 h-2.5"
                    alt="Vuesax outline"
                    src="/vuesax-outline-3dcube.svg"
                  />
                  <span className="[font-family:'Montserrat',Helvetica] font-medium text-secondarysecondary text-[10px] tracking-[0] leading-[12.5px]">
                    HVAC
                  </span>
                </Badge>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between sm:justify-end gap-2 sm:gap-4 w-full">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold-lg font-[number:var(--semibold-lg-font-weight)] text-blackmain-text-color text-[length:var(--semibold-lg-font-size)] tracking-[var(--semibold-lg-letter-spacing)] leading-[var(--semibold-lg-line-height)] [font-style:var(--semibold-lg-font-style)]">
                    MEP Engineering
                  </h2>

                  <div className="flex items-center gap-1">
                    <StarIcon className="w-4 h-4 fill-current text-yellow-400" />
                    <span className="font-body-sm font-[number:var(--body-sm-font-weight)] text-black-700 text-[length:var(--body-sm-font-size)] tracking-[var(--body-sm-letter-spacing)] leading-[var(--body-sm-line-height)] [font-style:var(--body-sm-font-style)]">
                      5.0
                    </span>
                  </div>
                </div>

                <p className="w-full max-w-full sm:max-w-[373px] text-sm sm:text-base font-pharaghraph-sm font-[number:var(--pharaghraph-sm-font-weight)] text-black-400 text-[length:var(--pharaghraph-sm-font-size)] tracking-[var(--pharaghraph-sm-letter-spacing)] leading-[var(--pharaghraph-sm-line-height)] [font-style:var(--pharaghraph-sm-font-style)]">
                  Master the fundamentals of Mechanical, Electrical, and
                  Plumbing systems in modern engineering projec....
                </p>

                <img
                  className="self-stretch w-full h-px object-cover"
                  alt="Devider"
                  src="/devider.svg"
                />

                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      alt="Vuesax outline note"
                      src="/vuesax-outline-note-2.svg"
                    />
                    <span className="flex items-center justify-center text-xs sm:text-sm font-body-base font-[number:var(--body-base-font-weight)] text-secondarysecondary text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
                      7 lessons
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <img
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      alt="Vuesax outline task"
                      src="/vuesax-outline-task-square.svg"
                    />
                    <span className="flex items-center justify-center text-xs sm:text-sm font-body-base font-[number:var(--body-base-font-weight)] text-secondarysecondary text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
                      10 Practice
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto">
          <Button className="w-full sm:w-[180px] md:w-[206px] h-10 bg-primary-colorprimary hover:bg-primary-color400 rounded-lg">
            <span className="text-white [font-family:'Montserrat',Helvetica] font-bold text-xs sm:text-sm text-center tracking-[0] leading-[21px]">
              Level Assessment
            </span>
            <img
              className="w-4 h-4 sm:w-5 sm:h-5 ml-1"
              alt="Vuesax outline arrow"
              src="/vuesax-outline-arrow-right.svg"
            />
          </Button>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm sm:text-base font-pharaghraph-base font-[number:var(--pharaghraph-base-font-weight)] text-black-700 text-[length:var(--pharaghraph-base-font-size)] tracking-[var(--pharaghraph-base-letter-spacing)] leading-[var(--pharaghraph-base-line-height)]">
              Level:
            </span>
            <select
              className="
      px-3 sm:px-4 py-2
      rounded-lg
      border border-[#f2f2f2]
      bg-white
      text-sm sm:text-base
      font-pharaghraph-base
      text-primary-colorprimary
      text-[length:var(--pharaghraph-base-font-size)]
      leading-[var(--pharaghraph-base-line-height)]
      cursor-pointer
      min-w-[120px]
    "
              defaultValue="Intermediate"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>
      </div>

      <Card className="flex flex-col items-start justify-center gap-6 sm:gap-8 lg:gap-[60px] p-3 sm:p-4 md:p-6 w-full bg-white rounded-xl border border-solid border-[#e6e6e6] overflow-x-hidden">
        <CardContent className="p-0 w-full">
          <div className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-8 w-full overflow-x-hidden">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading-bold-4xl font-[number:var(--heading-bold-4xl-font-weight)] text-secondarysecondary text-[length:var(--heading-bold-4xl-font-size)] tracking-[var(--heading-bold-4xl-letter-spacing)] leading-[var(--heading-bold-4xl-line-height)] [font-style:var(--heading-bold-4xl-font-style)]">
              Knowledge Areas
            </h2>

            <ScrollArea className="w-full">
              <div className="flex items-center gap-1 pb-4">
                {knowledgeAreas.map((area, index) => (
                  <React.Fragment key={area.id}>
                    <Button
                      variant={area.active ? "default" : "secondary"}
                      className={`h-8 sm:h-9 md:h-8 
              px-3 sm:px-3 md:px-2 lg:px-1 
              py-1.5 rounded-lg whitespace-nowrap
              text-xs sm:text-sm
              ${
                area.active
                  ? "bg-primary-colorprimary hover:bg-primary-color400 text-white"
                  : "bg-black-100 hover:bg-black-100 text-black-400"
              }`}
                    >
                      <span className="font-body-medium-600 font-[number:var(--body-medium-600-font-weight)] text-[length:var(--body-medium-600-font-size)] tracking-[var(--body-medium-600-letter-spacing)] leading-[var(--body-medium-600-line-height)] [font-style:var(--body-medium-600-font-style)]">
                        {area.name}
                      </span>
                    </Button>

                    {index < knowledgeAreas.length - 1 && (
                      <>
                        <img
                          className="w-[40px] sm:w-[50px] md:w-[69px] h-px object-cover hidden sm:block"
                          alt="Line"
                          src="/line-2.svg"
                        />
                        <div
                          className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded ${
                            area.active
                              ? "bg-primary-colorprimary"
                              : "bg-black-100"
                          } hidden sm:block`}
                        />
                      </>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6 w-full mt-4 sm:mt-6 lg:mt-8">
            <Card className="w-full lg:w-auto lg:max-w-[400px] lg:flex-shrink-0 p-3 sm:p-4 bg-white rounded-xl border border-solid border-[#e6e6e6] cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] lg:hover:scale-105 hover:border-primary-colorprimary/50">
              <CardContent className="p-0">
                <div className="flex flex-col items-start justify-center gap-3 sm:gap-4">
                  <div className="flex flex-col items-start justify-center gap-2 px-2 py-0">
                    <h3 className="text-lg sm:text-xl font-semibold-lg text-blackmain-text-color">
                      {selectedLesson
                        ? selectedLesson.name
                        : "Foundation Lesson"}
                    </h3>

                    <p className="w-full max-w-full lg:max-w-[373px] text-sm sm:text-base text-black-400">
                      {selectedLesson
                        ? selectedLesson.description
                        : "Master the fundamentals of Mechanical, Electrical, and Plumbing systems in modern engineering projec...."}
                    </p>

                    <img
                      className="self-stretch w-full h-px object-cover"
                      alt="Devider"
                      src="/devider.svg"
                    />

                    <div className="flex flex-col sm:flex-row sm:flex-wrap items-start gap-2 sm:gap-3 lg:gap-2">
                      <div className="flex items-center gap-2">
                        <img
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          alt="Vuesax outline task"
                          src="/vuesax-outline-task-square.svg"
                        />
                        <span className="flex items-center justify-center text-xs sm:text-sm text-secondarysecondary">
                          {selectedLesson ? selectedLesson.quizCount : 10}{" "}
                          Quizzes
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <img
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          alt="Vuesax outline clock"
                          src="/vuesax-outline-clock.svg"
                        />
                        <span className="flex items-center justify-center text-xs sm:text-sm text-secondarysecondary">
                          {selectedLesson ? selectedLesson.duration : "1 Hour"}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <img
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          alt="Vuesax outline clipboard"
                          src="/vuesax-outline-clipboard-text.svg"
                        />
                        <span className="flex items-center justify-center text-xs sm:text-sm text-secondarysecondary">
                          {selectedLesson ? selectedLesson.questionCount : 10}{" "}
                          Questions
                        </span>
                      </div>
                    </div>
                  </div>

                  <img
                    className="h-[60px] sm:h-[72px] w-full object-contain"
                    alt="Component"
                    src="/component-2.svg"
                  />

                  <Button
                    variant="ghost"
                    className="flex items-center justify-center gap-1 pt-2 pb-0 px-2 w-full border-t border-solid border-[#f2f2f2] hover:bg-transparent"
                  >
                    <span className="text-primary-colorprimary font-bold text-xs sm:text-sm text-center tracking-[0] leading-[21px]">
                      {selectedLesson ? "Start Lesson" : "Start Lesson"}
                    </span>
                    <img
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      alt="Vuesax outline arrow"
                      src="/vuesax-outline-arrow-right.svg"
                    />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="w-full flex-1 max-h-[45vh] sm:max-h-[50vh] md:max-h-[55vh] lg:max-h-[60vh] xl:max-h-[550px] overflow-hidden relative">
              <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] overflow-hidden">
                <div
                  className="absolute top-0 left-0 origin-top-left scale-[0.30] sm:scale-[0.45] md:scale-[0.50] lg:scale-[0.55] xl:scale-[0.60]"
                  style={{ width: "1280px", height: "1000px" }}
                >
                  {vectorImages.map((vector, index) => (
                    <img
                      key={index}
                      className={`
      ${vector.className} 
      transition-opacity duration-500
      ${
        hoveredLessonId !== null && hoveredLessonId >= index
          ? "opacity-100 drop-shadow-[0_0_4px_rgba(255,127,36,0.5)]"
          : "opacity-30"
      }
      ${
        selectedLesson && selectedLesson.id >= index
          ? "opacity-100 drop-shadow-[0_0_4px_rgba(255,127,36,0.5)]"
          : ""
      }
    `}
                      alt="Vector"
                      src={vector.src}
                    />
                  ))}

                  {lessonsData.map((lesson, index) => (
                    <div
                      key={lesson.id}
                      className={`absolute lesson-node flex flex-row items-center gap-2 transition-transform duration-300
      ${
        lesson.status === "locked"
          ? "cursor-not-allowed"
          : "cursor-pointer hover:scale-105 hover:drop-shadow-[0_4px_8px_rgba(255,127,36,0.3)]"
      }
      ${selectedLesson?.id === lesson.id ? "animate-pulse-glow" : ""}`}
                      style={{
                        top: lessonPositions[index].top,
                        left: lessonPositions[index].left,
                      }}
                      onClick={() => handleLessonClick(index)}
                      onMouseEnter={() => setHoveredLessonId(index)}
                      onMouseLeave={() => setHoveredLessonId(null)}
                      title={
                        lesson.status === "locked"
                          ? "This lesson is locked"
                          : lesson.name
                      }
                    >
                      <img
                        className="w-[110px] h-[77px]"
                        alt={lesson.name}
                        src={lessonImages[index]}
                      />
                      <div
                        className={`mt-2 h-9 flex items-center justify-center text-center font-[Montserrat] font-medium text-[24px] leading-[150%] ${
                          lesson.status === "locked"
                            ? "text-[#0D0D0D]"
                            : "text-primary-colorprimary"
                        }`}
                      >
                        {lesson.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <LessonModal
        isOpen={!!selectedLesson}
        onClose={handleCloseModal}
        lesson={selectedLesson}
      />
    </section>
  );
};
