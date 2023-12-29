import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

interface HeaderLessonProps {
  star: number;
  title: string;
  titlelesson: string;
  description: string;
  pointlesson: string;
}

export function HeaderLesson({
  star,
  title,
  titlelesson,
  description,
  pointlesson,
}: HeaderLessonProps) {
  return (
    <div>
      <div className="h-[365px] w-[100%] bg-[#00546C] max-sm:p-[25px] sm:p-[25px] md:p-[25px] lg:p-[65px]">
        <div> 
          <h1 className="font-bold text-white max-sm:text-lg sm:text-xl md:text-2xl lg:text-3xl ">
            {title}
          </h1>
        </div>
        <div className="mt-[10px]">
          <p className="text-lg text-white">{titlelesson}</p>
        </div>
        <div className="mt-[10px] flex items-center">
          <p className="text-[#FFC107] max-sm:text-base sm:text-base md:text-base lg:text-lg">
            {pointlesson}
          </p>
          <div className="ml-5 flex">
            {Array(star)
              .fill(0)
              .map((index) => {
                return (
                  <div className="ml-[7px]">
                    <AiFillStar key={index} size={20} color="#FFC107" />
                  </div>
                );
              })}
          </div>
          <p className="flex items-center text-white max-sm:text-base sm:text-base md:text-base lg:text-lg">
            <BsDot color="white" size={25} />
            100 Learners Enrolled <BsDot color="white" size={25} /> Beginner
            Level
          </p>
        </div>
        <div className="mt-[10px]">
          <p className="text-white max-sm:w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
