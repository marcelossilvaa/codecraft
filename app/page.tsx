"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Code from "@/public/code.png";
import Book from "@/public/book.png";
import Bau from "@/public/bau.png";

interface Lesson {
  level: number;
  image: StaticImageData;
}

interface Unit {
  unidade: number;
  licoes: Lesson[];
}

const dataUnits: Unit[] = [
  {
    unidade: 1,
    licoes: [
      { level: 1, image: Code },
      { level: 2, image: Book },
      { level: 3, image: Bau },
      { level: 4, image: Code },
      { level: 5, image: Code },
    ],
  },
  {
    unidade: 2,
    licoes: [
      { level: 6, image: Code },
      { level: 7, image: Code },
      { level: 8, image: Code },
      { level: 9, image: Code },
      { level: 10, image: Code },
    ],
  },
  {
    unidade: 3,
    licoes: [
      { level: 11, image: Code },
      { level: 12, image: Code },
      { level: 13, image: Code },
      { level: 14, image: Code },
      { level: 15, image: Code },
    ],
  },
];

interface LessonNodeProps {
  lesson: Lesson;
  onClick: (lesson: Lesson) => void;
}

const LessonNode = ({ lesson, onClick }: LessonNodeProps) => (
  <div
    onClick={() => onClick(lesson)}
    className="lesson-node flex flex-col items-center mx-2 cursor-pointer"
  >
    <Image
      src={lesson.image}
      alt={`Lição ${lesson.level}`}
      width={80}
      height={80}
      className="rounded-full"
    />
  </div>
);

export default function Home() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const handleLessonClick = (lesson: Lesson) => {
    setSelectedLesson(lesson);
  };

  const handleBackToLessons = () => {
    setSelectedLesson(null);
  };

  return (
    <div className="mt-10 w-full flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">CodeCraft</h1>

      {selectedLesson ? (
        <div className="lesson-content w-full max-w-md p-4">
          <h2 className="text-xl font-semibold mb-4">
            Conteúdo da Lição {selectedLesson.level}
          </h2>
          <p>
            Este é o conteúdo da Lição {selectedLesson.level}. Aqui você pode
            adicionar exercícios, explicações, exemplos de código ou qualquer
            outro conteúdo relevante para esta lição.
          </p>
          <button
            onClick={handleBackToLessons}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Voltar às Lições
          </button>
        </div>
      ) : (
        <div className="units-container flex flex-col items-center">
          {dataUnits.map((unit, unitIndex) => (
            <div key={unitIndex} className="unit w-full mb-8">
              <h2 className="text-xl text-center font-semibold mb-4">
                Unidade {unit.unidade}
              </h2>
              <div className="lessons-container">
                {unit.licoes.map((lesson, index) => {
                  let alignmentClass = "justify-center";
                  let paddingClass = "";

                  const isEvenUnit = unit.unidade % 2 === 0;

                  if (!isEvenUnit) {
                    if (index === 1) {
                      alignmentClass = "";
                      paddingClass = "pl-24";
                    } else if (index === 2) {
                      alignmentClass = "justify-end";
                      paddingClass = "pl-32";
                    } else if (index === 3) {
                      alignmentClass = "";
                      paddingClass = "pl-24";
                    }
                  } else {
                    if (index === 1) {
                      alignmentClass = "flex-row-reverse";
                      paddingClass = "pr-24";
                    } else if (index === 2) {
                      alignmentClass = "justify-start";
                      paddingClass = "pr-32";
                    } else if (index === 3) {
                      alignmentClass = "flex-row-reverse";
                      paddingClass = "pr-24";
                    }
                  }

                  return (
                    <div
                      key={index}
                      className={`lesson-row flex items-center my-4 ${alignmentClass} ${paddingClass}`}
                    >
                      <LessonNode
                        lesson={lesson}
                        onClick={handleLessonClick}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
