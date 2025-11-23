"use client";

import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface LessonModalProps {
  isOpen: boolean;
  onClose: () => void;
  lesson: {
    id: number;
    name: string;
    status: "locked" | "in_progress" | "completed" | "available";
    description: string;
    quizCount: number;
    duration: string;
    questionCount: number;
  } | null;
}

export const LessonModal: React.FC<LessonModalProps> = ({
  isOpen,
  onClose,
  lesson,
}) => {
  if (!isOpen || !lesson) return null;

  const getStatusText = () => {
    switch (lesson.status) {
      case "locked":
        return "Locked";
      case "in_progress":
        return "In Progress";
      case "completed":
        return "Completed";
      default:
        return "Available";
    }
  };

  const getButtonText = () => {
    switch (lesson.status) {
      case "completed":
        return "Review Lesson";
      case "in_progress":
        return "Continue Lesson";
      case "locked":
        return "Unlock Lesson";
      default:
        return "Start Lesson";
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
        onClick={onClose}
      />

      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4 sm:p-6">
        <Card className="w-full max-w-md mx-auto pointer-events-auto animate-fade-up bg-white rounded-xl border border-[#e6e6e6] shadow-2xl">
          <CardContent className="p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold-lg text-blackmain-text-color text-lg sm:text-xl md:text-2xl tracking-tight leading-snug">
                  {lesson.name}
                </h3>
                <div
                  className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                    lesson.status === "locked"
                      ? "bg-black-100 text-black-600"
                      : lesson.status === "in_progress"
                      ? "bg-primary-colorprimary/10 text-primary-colorprimary"
                      : lesson.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-secondary-50 text-secondarysecondary"
                  }`}
                >
                  {getStatusText()}
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1 hover:bg-black-50 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-colorprimary"
                aria-label="Close modal"
              >
                <XIcon className="w-5 h-5 text-black-400" />
              </button>
            </div>

            <p className="font-pharaghraph-sm text-black-400 text-sm sm:text-base leading-relaxed mb-4">
              {lesson.description}
            </p>

            <img
              className="w-full h-px object-cover mb-4"
              alt="Divider"
              src="/devider.svg"
            />

            <div className="flex flex-col gap-3 mb-4">
              <div className="flex items-center gap-2">
                <img
                  className="w-5 h-5"
                  alt="Task icon"
                  src="/vuesax-outline-task-square.svg"
                />
                <span className="text-secondarysecondary text-sm sm:text-base font-medium">
                  {lesson.quizCount} Quizzes
                </span>
              </div>

              <div className="flex items-center gap-2">
                <img
                  className="w-5 h-5"
                  alt="Clock icon"
                  src="/vuesax-outline-clock.svg"
                />
                <span className="text-secondarysecondary text-sm sm:text-base font-medium">
                  {lesson.duration}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <img
                  className="w-5 h-5"
                  alt="Clipboard icon"
                  src="/vuesax-outline-clipboard-text.svg"
                />
                <span className="text-secondarysecondary text-sm sm:text-base font-medium">
                  {lesson.questionCount} Questions
                </span>
              </div>
            </div>

            <Button
              className="w-full h-12 bg-primary-colorprimary hover:bg-primary-color400 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={lesson.status === "locked"}
              title={
                lesson.status === "locked" ? "This lesson is locked" : undefined
              }
            >
              <span className="text-white font-bold text-sm sm:text-base tracking-tight">
                {getButtonText()}
              </span>
              {lesson.status !== "locked" && (
                <img
                  className="w-5 h-5"
                  alt="Arrow right"
                  src="/vuesax-outline-arrow-right.svg"
                />
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
