import React from "react";
interface HeadertitleProps {
  title: string;
}

export function HeaderTitle({ title }: HeadertitleProps) {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('https://millercenter.rutgers.edu/wp-content/uploads/2021/05/Home-Four-Banner-Background-Image.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[335px] w-[100%]"
      >
        <div className="p-[70px]">
          <div>
            <h1 className="text-2xl font-bold text-white max-sm:w-[70%] sm:w-[60%] md:w-[50%] lg:w-[30%]">
              {title}
            </h1>
          </div>
          <div className="mt-[40px]">
            <button  className="rounded-md bg-[#118AEF] p-[10px] text-base font-bold text-white shadow-md hover:shadow-md">
              Explore Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
