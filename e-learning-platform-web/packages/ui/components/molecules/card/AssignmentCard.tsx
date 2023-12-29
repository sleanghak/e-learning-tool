import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
interface AssignmentCardProps {
  name: string;
  title: string;
  date: string;
}

export function AssignmentCard({ name, title, date }: AssignmentCardProps) {
  const [isOpen, SetIsOpen] = React.useState(false);
  return (
    <div className="p-1">
      <div
        className="flex p-2 w-full items-center justify-between rounded-md shadow-sm border border-slate-300 hover:border-slate-400 ..."
      >
        <div className="flex items-center gap-x-14">
          <div className="ml-[35px] flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[#7D7878]">
            <HiOutlineDocumentText size={25} color="white" />
          </div>
          <div>
            <h1>
              <span className="font-bold">{name}</span>
              <span className="ml-1">{title}</span>
            </h1>
            <p className="text-[12px] text-[#7D7878]"> {date}</p>
          </div>
        </div>
        <div className="mr-[20px]">
          <button onClick={() => SetIsOpen(!isOpen)}>
            <FiMoreVertical size={25} />
          </button>
        </div>
      </div>
      {isOpen ? (
        <div
          className="relative -right-[640px] -top-[6px] flex h-[69px] w-[183px] items-center justify-center bg-white"
          style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          <button className="h-[60px] w-full">Copy link</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
