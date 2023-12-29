import React from "react";

export const HorizontalTabs = () => {
  const [isNav, SetIsNav] = React.useState<"s" | "c" | "p" | "l">("s");
  return (
    <div>
      <div className="flex h-[10vh] w-full items-center justify-between">
        <div className="ml-[60px]">
          <h1 className="font-barlow text-[20px] font-bold">
            Fundamentals HTML
          </h1>
        </div>
        <div className="mr-[60px] flex items-center">
          <div>
            <button
              className={`${
                isNav === "s"
                  ? "bg-primary font-bold text-[#118AEF]"
                  : "bg-transparent text-black  font-normal"
              } h-[55px] w-[115px] rounded-md font-roboto text-[18px]`}
              onClick={() => SetIsNav("s")}
            >
              Stream
            </button>
          </div>
          <div>
            <button
              className={`${
                isNav === "c"
                  ? "bg-primary font-bold text-[#118AEF]"
                  : "bg-transparent text-black  font-normal"
              } h-[55px] w-[115px] rounded-md font-roboto text-[18px] `}
              onClick={() => SetIsNav("c")}
            >
              Classwork
            </button>
          </div>
          <div>
            <button
              className={`${
                isNav === "p"
                  ? "bg-primary font-bold text-[#118AEF]"
                  : "bg-transparent text-black  font-normal"
              } h-[55px] w-[115px] rounded-md font-roboto text-[18px]`}
              onClick={() => SetIsNav("p")}
            >
              People
            </button>
          </div>
          <div>
            <button
              className={`${
                isNav === "l"
                  ? "bg-primary font-bold text-[#118AEF]"
                  : "bg-transparent text-black  font-normal"
              } h-[55px] w-[115px] rounded-md font-roboto text-[18px]`}
              onClick={() => SetIsNav("l")}
            >
              Lessons
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
