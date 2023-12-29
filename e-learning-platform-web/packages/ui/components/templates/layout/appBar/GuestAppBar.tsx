import { LessonMenu } from "../../../molecules/menu/LessonMenu";
import { BsSearch } from "react-icons/bs";
import { ReanCode101Logo } from "./../../../atoms/ReanCode101Logo";
import { logo } from "./.././../../../utils/constant/logo";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import React from "react";
import { useRouter } from "next/router";

export const GuestAppBar = () => {
  const router = useRouter();
  const [navMobile, setNavMobile] = React.useState(false);
  return (
    <div>
      <div
        className="flex h-[10vh] w-[100%] items-center justify-between bg-white p-2 shadow-md"
        style={{
          borderTop: "5px solid #118AEF",
        }}
      >
        <div className="ml-[20px] flex">
          <div className="flex items-center space-x-3 text-gray-900 ">
            <button onClick={() => router.push("/")} type="button">
              {logo.map((item, index) => {
                return (
                  <ReanCode101Logo key={index} src={item.src} alt={item.alt} />
                );
              })}
            </button>
            <div className="hidden max-sm:block sm:block">
              <h5 className="font-sans text-xl max-sm:text-lg">ReanCode101</h5>
              <p className="text-sm max-sm:text-sm">
                Beginners for the Youngsters
              </p>
            </div>
          </div>
        </div>
        <div className="max-sm:hidden sm:hidden md:hidden lg:flex">
          <LessonMenu />
          <div className="ml-[50px] flex">
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
        <div className="mr-[40px] ">
          <button
            className="max-sm:hidden sm:hidden md:hidden lg:flex"
            onClick={() => router.push("/auth/Login")}
            type="button"
          >
            SIGN IN
          </button>
          <div
            onClick={() => setNavMobile(!navMobile)}
            className=" flex items-center lg:hidden"
          >
            {navMobile ? (
              <RiCloseFill className="text-primary-200 cursor-pointer text-3xl" />
            ) : (
              <RiMenu4Fill className="text-primary-200 cursor-pointer text-3xl" />
            )}
          </div>
          {navMobile ? (
            <div
              className={`${
                navMobile ? "min-h-[300px]" : "min-h-0"
              } fixed top-[10%] left-0 right-0 flex h-0 w-full flex-col items-center justify-center gap-4 overflow-hidden bg-[#DEDEDE] transition-all lg:hidden`}
            >
              <div className="flex flex-col gap-4">
                <div className="m-0">
                  <LessonMenu />
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
                <div>
                  <button
                    className="h-[40px] w-[100px] rounded-md text-black transition-all hover:bg-[#118AEF] hover:text-white lg:hidden"
                    onClick={() => router.push("/auth/Login")}
                    type="button"
                  >
                    SIGN IN
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
