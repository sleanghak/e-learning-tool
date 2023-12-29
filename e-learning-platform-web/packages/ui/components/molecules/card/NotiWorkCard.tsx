import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

interface NotiWorkCardProps {
  date: string;
  notification: string;
  time: string;
}

export const NotiWorkCard = ({
  date,
  time,
  notification,
}: NotiWorkCardProps) => {
  return (
    <div className="h-[332px] w-[250px] rounded-[5px] border border-[#000000]">
      <div className="flex flex-col gap-y-[16px] p-[15px]">
        <div className="flex justify-between">
          <h1 className="font-roboto text-[15px] font-bold">Notification</h1>
          <div>
            <IoMdNotificationsOutline size={30} />
            <div className="relative -top-7 -right-4 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-[#F81818] text-[10px] text-[#fff]">
              {notification}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[16px]">
          <h1 className="font-roboto text-[15px] font-normal text-[#7D7878]">
            {date}
          </h1>
          <div className="flex flex-col gap-y-[16px]">
            <h1 className="font-roboto text-[15px] font-normal">{time}</h1>
            <h1 className="font-roboto text-[15px] font-normal">{time}</h1>
          </div>
        </div>
        <div className="border border-[#7D7878]"></div>
        <div className="flex flex-col gap-y-[16px]">
          <h1 className="font-roboto text-[15px] font-normal text-[#7D7878]">
            {date}
          </h1>
          <p className="font-roboto text-[15px] font-normal">{time}</p>
        </div>
        <div className="flex justify-end">
          <button className="font-inter text-[15px] text-[#0D99FF]">
            View all
          </button>
        </div>
      </div>
    </div>
  );
};
