import React from "react";

export const Listimage = () => {
  return (
    <section className="overflow-hidden bg-white shadow-md ... border border-slate-300 ">
      <div className="container px-4 py-4 mx-auto">
        <div className="flex flex-wrap -m-1 md:-m-2">
          {Array(12)
        .fill(0)
        .map((item, index) => {
          return (
            <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full cursor-pointer rounded-sm"
                src="https://slidebazaar.com/wp-content/uploads/2020/07/thank-you-powerpoint-template-1-jpg.webp" />
            </div>
          </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};
