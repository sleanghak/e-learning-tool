import React from "react";
import { appConfig } from "../../../app.config";
import { AiFillStar } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";

console.log(appConfig.appName);

interface CardProps {
  imgprofile: string;
  altprofile?: string;
  studentname: string;
  subject: string;
  decription: string;
}

export function CardReview({
  imgprofile,
  altprofile,
  studentname,
  subject,
  decription,
}: CardProps) {
  return (
    <div className="flex justify-center">
      <div
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          borderBottom: "8px solid #118AEF",
          marginLeft: "5px",
          marginRight: "5px",
        }}
        className="mt-10 h-[279px] w-[633px] rounded-md"
      >
        <div className="flex justify-start ">
          <div className="ml-20 mt-5">
            <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full border-4 border-blue-200">
              <img
                className="h-[86px] w-[85px] rounded-full bg-blue-400"
                src={imgprofile}
                alt={altprofile}
              />
            </div>
            <div className="relative -top-[28%] -right-[70%] ">
              <div className="h-[30px] w-[30px] rounded-full bg-white">
                <ImLinkedin
                  size={32}
                  className="rounded-full"
                  color="#118AEF"
                />
              </div>
            </div>
          </div>

          <div className="ml-10 mt-5 block">
            <div>
              <h1
                className="text-xl text-gray-400 "
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {studentname}
              </h1>
            </div>
            <div>
              <h1
                className="mt-5 text-xs font-normal text-gray-400"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {subject}
              </h1>
            </div>
            <div>
              <h1 className="mt-5 flex ">
                {Array(5)
                  .fill(0)
                  .map((index) => {
                    return (
                      <div>
                        <AiFillStar key={index} size={20} color="#FFC107" />
                      </div>
                    );
                  })}
              </h1>
            </div>
          </div>
        </div>
        <div className="ml-20 ">
          <p className="w-[90%]">
            {decription}
          </p>
        </div>
      </div>
    </div>
  );
}
