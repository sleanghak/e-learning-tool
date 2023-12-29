import React from "react";

interface Props {
  href: string;
  src: string;
  alt?: string;
  title: string;
  level: string;
  star: string;
  learner: string;
  lesson: string;
}
export function CourseCard({
  href,
  src,
  alt,
  title,
  level,
  star,
  learner,
  lesson,
}: Props) {
  return (
    <div className="flex justify-center">
      <a href={href}>
        <div className="rounded-lg bg-white shadow-md">
          <img className="rounded-lg" src={src} alt={alt} />
          <div className="p-5">
            <p className="text-gray-500">{level}</p>
            <h5 className="mb-2 font-sans text-xl text-gray-900">{title}</h5>
            <div className="... flex justify-between">
              <div className="... flex justify-start">
                <div>
                  <p className="inline-block text-yellow-500 ">{star}</p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-2 inline-block h-5 w-5 align-top text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="... flex justify-start ">
                <div>
                  <p className=" inline-block align-text-top text-gray-500">
                    {learner} Learners
                  </p>
                </div>
              </div>
              <div>
                <p className=" inline-block align-text-top text-gray-500">
                  ({lesson} Lessons)
                </p>
              </div>
            </div>
            <div className="... flex justify-between py-2">
              <svg
                className="h-5 w-5  text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
              <p className="uppercase text-green-500">register</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
