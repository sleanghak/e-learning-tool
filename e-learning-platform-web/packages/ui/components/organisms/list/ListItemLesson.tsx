import React from "react";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { IoIosLock } from "react-icons/io";
import { listlesson } from "../../../utils/constant/data";

interface ListItemProps {
  title: string;
}

export function Listitem({ title }: ListItemProps) {
  const { datalesson } = listlesson;
  const [open, setOpen] = React.useState(false);
  const [test, setTest] = React.useState(false);
  const [currentindex, setcurrentIndex] = React.useState(0);
  return (
    <div
      className="sm:w-[100%] md:w-[100%] lg:w-[100%]"
      style={{ backgroundColor: "rgba(17, 138, 239, 0.03)", borderRadius: 5 }}
    >
      <div
        style={{ transition: "0.5s all ease" }}
        className="flex h-[50px] w-[100%] cursor-pointer items-center"
        onClick={() => setOpen(!open)}
      >
        <div>{open ? <CgMathMinus size={20} /> : <CgMathPlus size={20} />}</div>
        <div className="ml-[10px] text-lg font-normal">{title}</div>
      </div>
      {open ? (
        <div className="">
          {datalesson.map((iteam, index) => {
            return (
              <div
                className="flex h-[50px] w-[100%] cursor-pointer items-center justify-between"
                onClick={() => {
                  setcurrentIndex(iteam.id);
                  setTest(!test);
                }}
              >
                <div className="flex ml-[15px] items-center">
                  {currentindex == iteam.id && test ? (
                    <CgMathMinus size={20} />
                  ) : (
                    <CgMathPlus size={20} />
                  )}
                  <div className="ml-[10px]">{iteam.title}</div>
                </div>

                <div className="mr-[20px]">
                  {iteam.active ? (
                    <div>
                      <p className="text-[#118AEF]">10:34</p>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <p className="text-gray-500">11:40</p>
                      <p className="ml-[20px]">
                        <IoIosLock size={20} className="text-gray-500" />
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
