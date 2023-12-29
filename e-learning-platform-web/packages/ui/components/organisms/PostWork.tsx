import React from "react";
import { FiMoreVertical } from "react-icons/fi";
interface PostWorkProps {
  title: string;
  duedate: string;
  date: string;
  point: string;
  name: string;
}

export const PostWork = ({
  title,
  duedate,
  date,
  point,
  name,
}: PostWorkProps) => {
  const [isOpen, SetIsOpen] = React.useState(false);
  return (
    <div className="flex w-[656px] flex-col gap-y-[36px]">
      <div className="flex justify-between">
        <div className="flex items-center gap-x-[50px]">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"
            alt="image logo"
            className="h-[55px] w-[55px] rounded-full"
          />
          <div>
            <h1 className="font-roboto text-[25px] font-bold">{title}</h1>
            <p className="mt-[15px] font-roboto text-[15px] font-normal text-[#7D7878]">
              {name} {duedate}
            </p>
          </div>
        </div>
        <div>
          <button onClick={() => SetIsOpen(!isOpen)}>
            <FiMoreVertical size={35} />
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <h1 className="ml-[105px] font-roboto text-[15px] font-bold">
          {point} points
        </h1>
        <p className="font-roboto text-[15px] font-normal">{date}</p>
      </div>
      {isOpen ? (
        <div
          className="relative -top-[120px] left-[480px] flex h-[69px] w-[183px] items-center justify-center bg-white"
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            border: "1px solid rgba(125, 120, 120, 0.25)",
          }}
        >
          <button className="h-[60px] w-[175px]">Copy Link</button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
