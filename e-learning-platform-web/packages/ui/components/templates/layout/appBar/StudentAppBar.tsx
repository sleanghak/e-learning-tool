import React from "react";
import {AccountMenu} from './../../../molecules/menu/AccountMenu';
import { LessonMenu } from "../../../molecules/menu/LessonMenu";
import { BsSearch, BsBell } from "react-icons/bs";
import { ReanCode101Logo } from "./../../../atoms/ReanCode101Logo";
import { logo } from "./../../../../utils/constant/logo";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

export function StudentappBar() {
  const [navMobile, setNavMobile] = React.useState(false);
  const [color, setColor] = React.useState<
    "mycourses" | "myresources" | "comunity"
  >("mycourses");
  return (
    <div>
      <div
        className="flex h-[10vh] items-center justify-between bg-white p-2 shadow-sm"
        style={{
          borderTop: "5px solid #118AEF",
        }}
      >
        <div className="ml-[30px] flex">
          <div className="flex items-center space-x-3 text-gray-900 ">
            <a href="/home">
              {logo.map((item, index) => {
                return (
                  <ReanCode101Logo key={index} src={item.src} alt={item.alt} />
                );
              })}
            </a>
            <div className="hidden max-sm:block sm:block">
              <h5 className="font-sans text-xl max-sm:text-lg">ReanCode101</h5>
              <p className="text-sm max-sm:text-xs">
                Beginners for the Youngsters
              </p>
            </div>
          </div>
        </div>
        <div className="max-sm:hidden sm:hidden md:hidden lg:flex ">
          <button
            onClick={() => setColor("mycourses")}
            className={`${color == "mycourses" ? "text-[#118AEF]" : ""}`}
          >
            MY COURSES
          </button>
          <button
            onClick={() => setColor("myresources")}
            className={`ml-[25px] ${
              color == "myresources" ? "text-[#118AEF]" : ""
            }`}
          >
            MY RESOURCES
          </button>
          <button
            onClick={() => setColor("comunity")}
            className={`ml-[25px] ${
              color == "comunity" ? "text-[#118AEF]" : ""
            }`}
          >
            COMUNITY
          </button>
        </div>
        <div className="mr-[40px] flex">
          <div className="max-sm:hidden sm:hidden md:hidden lg:flex">
            <input
              type="text"
              className="h-[40px] w-[350px] rounded-xl border border-gray-400 px-4 focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none "
              placeholder="Search"
            />
            <BsSearch
              size={20}
              className="relative left-[-30px] top-[8px] cursor-pointer"
            />
          </div>
          <div className="ml-[20px] flex">
          <AccountMenu
              src="https://yt3.ggpht.com/OLuhaGN_2txsq-blg1AqTdsCzHw_Rv21CeGTQP2_IUEwQ-S_2ki8iguQPpY7Y9HCMSB4W6n5-ihRmJU=s640-c-fcrop64=1,00000000ffffffff-nd-v1"
              alt="avatar"
              name="SEIREY Leanghak"
              email="hak.edu.kh@gmail.com"
            />
            <div
              onClick={() => setNavMobile(!navMobile)}
              className="ml-4 flex items-center lg:hidden"
            >
              {navMobile ? (
                <RiCloseFill className="text-primary-200 cursor-pointer text-3xl" />
              ) : (
                <RiMenu4Fill className="text-primary-200 cursor-pointer text-3xl" />
              )}
            </div>
            <div>
              {navMobile ? (
                <div
                  className={`${
                    navMobile ? "min-h-[300px]" : "min-h-0"
                  } fixed top-[10%] left-0 right-0 flex h-0 w-full flex-col items-center justify-center gap-4 overflow-hidden bg-[#DEDEDE] transition-all lg:hidden`}
                >
                  <div className="flex flex-col gap-4">
                    <div>
                      <button
                        onClick={() => setColor("mycourses")}
                        className={`${
                          color == "mycourses" ? "text-[#118AEF]" : ""
                        }`}
                      >
                        MY COURSES
                      </button>
                      <button
                        onClick={() => setColor("myresources")}
                        className={`ml-[25px] ${
                          color == "myresources" ? "text-[#118AEF]" : ""
                        }`}
                      >
                        MY RESOURCES
                      </button>
                      <button
                        onClick={() => setColor("comunity")}
                        className={`ml-[25px] ${
                          color == "comunity" ? "text-[#118AEF]" : ""
                        }`}
                      >
                        COMUNITY
                      </button>
                    </div>
                    <div className="flex">
                      <input
                        type="text"
                        className="h-[40px] w-[350px] rounded-xl border border-gray-400 px-4 focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none "
                        placeholder="Search"
                      />
                      <BsSearch
                        size={20}
                        className="relative left-[-30px] top-[8px] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
