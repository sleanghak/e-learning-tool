import React from "react";
import { GrAdd } from "react-icons/gr";
import { RiDriveLine } from "react-icons/ri";
import { BsLink } from "react-icons/bs";
import { MdInsertLink } from "react-icons/md";

export const AttachFile = () => {
  const [isOpen, SetIsOpen] = React.useState(false);
  return (
    <div>
      <div
        className="flex h-[251px] w-[380px] flex-col gap-y-[40px] rounded-md p-[15px]"
        style={{ border: "0.5px solid #000000" }}
      >
        <div className="flex justify-between">
          <h1>Your Work</h1>
          <p className="text-[#0D99FF]">Assigned</p>
        </div>
        <button
          style={{ border: "0.5px solid #000000" }}
          onClick={() => SetIsOpen(!isOpen)}
          className="flex h-[40px] w-[330px] items-center justify-center gap-x-[40px] rounded-md"
        >
          <GrAdd size={20} />
          Add or Create
        </button>
        <button className="text-white h-[40px] w-[330px] rounded-[50px] bg-[#0D99FF] font-roboto text-[18px] font-bold">
          Submit
        </button>
      </div>
      {isOpen ? (
        <div
          style={{
            backgroundColor: "white",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            border: "1px solid rgba(196, 196, 196, 0.8)",
          }}
          className="relative -top-[128px] -right-[155px] h-[177px] w-[191px] rounded-md"
        >
          <div className="flex flex-col gap-y-[15px] p-[23px]">
            <div className="flex items-center gap-x-[20px]">
              <RiDriveLine size={30} className="text-[#0D99FF]" />
              <h1>Google Drive</h1>
            </div>
            <div className="flex items-center gap-x-[20px]">
              <BsLink size={35} className="text-[#0D99FF]" />
              <h1>Link</h1>
            </div>
            <div className="flex items-center gap-x-[20px]">
              <MdInsertLink size={35} className="text-[#0D99FF]" />
              <h1>Link</h1>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
