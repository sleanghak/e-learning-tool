import React from "react";
import { RiDriveLine } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import { BsUpload, BsLink45Deg } from "react-icons/bs";

export const AnnounceCard = () => {
  return (
    <div
      className="flex h-[298px] w-[825px] items-center justify-center rounded-md"
      style={{
        boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <form>
        <textarea
          placeholder="Announce something to your class..."
          className="h-[150px] w-[743px] resize-none rounded-md pl-[15px] pt-[10px] text-[16px] focus:outline-none"
          style={{ backgroundColor: "rgba(217, 217, 217, 0.15)" }}
        ></textarea>
        <div className="mt-[10px] border-spacing-[1px] border border-[#0D99FF]"></div>
        <div className="mt-[25px] flex items-center justify-between">
          <div className="flex gap-x-5">
            <button
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full"
              style={{ border: "1px solid rgba(125, 120, 120, 0.25)" }}
            >
              <RiDriveLine size={30} color="#0D99FF" />
            </button>
            <button
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full"
              style={{ border: "1px solid rgba(125, 120, 120, 0.25)" }}
            >
              <AiFillYoutube size={25} color="#0D99FF" />
            </button>
            <button
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full"
              style={{ border: "1px solid rgba(125, 120, 120, 0.25)" }}
            >
              <BsUpload size={20} color="#0D99FF" />
            </button>
            <button
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full"
              style={{ border: "1px solid rgba(125, 120, 120, 0.25)" }}
            >
              <BsLink45Deg size={28} color="#0D99FF" />
            </button>
          </div>
          <div className="flex gap-x-5">
            <button
              className="h-[40px] w-[100px] rounded-md"
              style={{ border: "1px solid #0D99FF" }}
            >
              Cancel
            </button>
            <button className="h-[40px] w-[100px] rounded-md bg-[#0D99FF] text-white">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
