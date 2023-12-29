import React from "react";
import { FiLink, FiShare2 } from "react-icons/fi";
import { MdOutlineContentCopy } from "react-icons/md";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";
export const Share = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      style={{ boxShadow: "0px 0px 6px rgba(17, 138, 239, 0.5)" }}
      className="flex h-[185px] flex-col items-center justify-center rounded-md sm:w-full md:w-[100%] lg:w-[1183px]"
    >
      <h1 className="mb-[10px] text-[28px] font-bold">Share Your Invite</h1>
      <div className="flex items-center">
        <div className="flex h-[40px] w-[667px] items-center ">
          <div
            className="relative -right-9 flex h-[70%] w-[6%] items-center justify-center"
            style={{ borderRight: "1px solid #0D99FF" }}
          >
            <FiLink size={25} />
          </div>
          <input
            type="text"
            defaultValue={"https://www.figma.com/file/su8PuOiWiUyWBqvGuhwWIs/ReanCode101-V1-Apps"}
            // placeholder="Link to contiune"
            style={{
              fontFamily: 'Roboto',
              fontSize: 16,
              border: "1px solid rgba(13, 153, 255, 0.5)"
            }}
            className=" h-full w-[88%] rounded-md border border-r-white pl-[50px] pr-[50px] focus:outline-[#0D99FF]"
          />
          <button
            className="relative -left-10 flex h-full w-[6%] items-center justify-center rounded-md"
            style={{ border: "1px solid rgba(13, 153, 255, 0.5)" }}
          >
            <MdOutlineContentCopy size={25} />
          </button>
        </div>
        <div
          style={{
            border: "1px solid rgba(13, 153, 255, 0.5)",
            boxShadow: "0px 0px 4px rgba(17, 138, 239, 0.5)",
          }}
          className="ml-[20px] flex h-[50px] w-[50px] items-center justify-center rounded-full shadow-lg"
        >
          <button onClick={() => setIsOpen(!isOpen)}>
            <FiShare2 size={25} />
          </button>
          {isOpen ? (
            <div
              className="absolute top-[190px] z-20 flex h-[271px] w-[128px] flex-col items-center justify-center gap-y-7 rounded-md border border-gray-300 bg-[#FFFFFF]"
            // style={{ border: " 0.5px solid rgba(125, 120, 120, 0.3)" }}
            >
              <div
                className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full"
                style={{ boxShadow: "0px 0px 4px rgba(17, 138, 239, 0.4)" }}
              >
                <BsFacebook size={40} />
              </div>
              <div
                className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full"
                style={{ boxShadow: "0px 0px 4px rgba(17, 138, 239, 0.4)" }}
              >
                <BsLinkedin size={40} className="rounded-full" />
              </div>
              <div
                className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full"
                style={{ boxShadow: "0px 0px 4px rgba(17, 138, 239, 0.4)" }}
              >
                <BsInstagram size={30} />
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
