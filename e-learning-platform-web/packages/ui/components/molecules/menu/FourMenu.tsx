import React from "react";

export const FourMenu = () => {
  const [isPos, SetIsPos] = React.useState<"a" | "b" | "c" | "d">("a");
  return (
    <div className=" flex w-[129px] flex-col gap-y-[5px]">
      <button
        className={`${
          isPos === "a" ? "bg-[#0D99FF2E]" : "bg-white"
        } h-[45px] w-[129px] rounded-md`}
        onClick={() => SetIsPos("a")}
      >
        All
      </button>
      <button
        className={`${
          isPos === "b" ? "bg-[#0D99FF2E]" : "bg-white"
        } h-[45px] w-[129px] rounded-md`}
        onClick={() => SetIsPos("b")}
      >
        Assigned
      </button>
      <button
        className={`${
          isPos === "c" ? "bg-[#0D99FF2E]" : "bg-white"
        } h-[45px] w-[129px] rounded-md`}
        onClick={() => SetIsPos("c")}
      >
        Returned
      </button>
      <button
        className={`${
          isPos === "d" ? "bg-[#0D99FF2E]" : "bg-white"
        } h-[45px] w-[129px] rounded-md`}
        onClick={() => SetIsPos("d")}
      >
        Missing
      </button>
    </div>
  );
};
