import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
interface CommentCardProps {
  name: string;
  time: string;
  title: string;
}

export function CommentCard({ name, time, title }: CommentCardProps) {
  const [isOpen, SetIsOpen] = React.useState(false);
  return (
    <div>
      <div
        className="flex h-[124px] w-[825px] items-center justify-between rounded-md"
        style={{
          boxShadow:
            "0px 1px 1px rgba(9, 30, 66, 0.25), 0px 0px 1px 1px rgba(9, 30, 66, 0.13)",
        }}
      >
        <div className="flex items-center gap-x-14">
          <div className="ml-[35px]">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile image"
              className="h-[50px] w-[50px] rounded-full"
            />
          </div>
          <div>
            <h1>
              <span className="text-[15px] font-bold">{name}</span>
            </h1>
            <p className="text-[12px] text-[#7D7878]"> {time}</p>
            <h1 className="mt-[13px] text-[15px]"> {title}</h1>
          </div>
        </div>
        <div className="mr-[20px]">
          <button onClick={() => SetIsOpen(!isOpen)}>
            <FiMoreVertical size={40} />
          </button>
        </div>
      </div>
      {isOpen ? (
        <div
          className="relative -right-[600px] -top-[20px] flex h-[112px] w-[183px] flex-col items-center justify-center bg-white shadow-md"
          style={{ border: "1px solid rgba(125, 120, 120, 0.25)" }}
        >
          <button className="h-[60px] w-full">Edit</button>
          <button className="h-[60px] w-full">Delete</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
