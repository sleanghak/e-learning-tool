import React, { useState } from "react";
import { GiBackwardTime } from "react-icons/gi";
import { MdMoreVert } from "react-icons/md";

interface CartProps {
  url: string;
  title: string;
  nameTeacher: string;
  time: string;
  day: string;
  alt?: string;
}

export function ClassCard({
  url,
  alt,
  title,
  nameTeacher,
  time,
  day,
}: CartProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="m-auto mt-10 h-[450px] w-[400px] rounded-md shadow-lg hover:shadow-xl">
        <div className="opacity-2 m-0 h-[50%] w-[100%]">
          <span className="cursor-pointer opacity-60 hover:opacity-100">
            <img
              src={url}
              className="h-[100%] w-[100%] rounded-t-md"
              alt={alt}
            ></img>
          </span>
          <span>
            <a
              onClick={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              className="relative -top-[90%] -right-[85%]  "
              type="button"
            >
              <MdMoreVert
                size={35}
                className="cursor-pointer rounded-full hover:bg-slate-300"
              />
              {open ? (
                <div className="absolute top-8 -right-44 z-10 h-[200px] w-[200px] bg-white shadow-xl">
                  <ul>
                    <li className="flex h-[40px] w-full items-center transition-all hover:bg-slate-300">
                      <a href="#" className="ml-5">
                        Edit
                      </a>
                    </li>
                    <li className="flex h-[40px] w-full items-center transition-all hover:bg-slate-300">
                      <a href="#" className="ml-5">
                        Copy invite link
                      </a>
                    </li>
                    <li className="flex h-[40px] w-full items-center transition-all hover:bg-slate-300">
                      <a href="#" className="ml-5">
                        Class code
                      </a>
                    </li>
                    <li className="flex h-[40px] w-full items-center transition-all hover:bg-slate-300">
                      <a href="#" className="ml-5">
                        Remove
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <div></div>
              )}
            </a>
          </span>
        </div>
        <div className="flex justify-between">
          <div className="">
            <h2 className="pl-7 pt-5 text-xl font-bold">{title}</h2>
          </div>
          <div>
            <img
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              className="relative -top-10 right-[70%] h-[70px] w-[70px] rounded-full"
              alt="avatar"
            ></img>
          </div>
        </div>
        <div>
          <h3 className="pl-7 text-xl font-bold" style={{ color: "#FFC107" }}>
            {nameTeacher}
          </h3>
          <h3 className="mt-4 pl-7 text-xl font-bold">{day}</h3>
          <div className="flex pl-7 pt-5">
            <GiBackwardTime size={25} />
            <h5 className=" ml-4 text-base font-bold">{time}</h5>
          </div>
        </div>
      </div>
    </>
  );
}
