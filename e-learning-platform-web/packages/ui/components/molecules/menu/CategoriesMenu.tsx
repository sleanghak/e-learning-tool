import React from "react";
import { listMenu } from "../../../utils/constant/listMenu";

export function CategoriesMenu() {
  const [background, setbackground] = React.useState(0);
  return (
    <div>
      <div
        style={{
          width: 250,
          height: "auto",
          backgroundColor: "rgba(17, 138, 239, 0.03)",
          borderRight: "3px solid #118AEF",
          borderRadius: "10px",
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <h2
            className="font-bold"
            style={{
              marginBottom: "15px",
              fontSize: "18px",
            }}
          >
            Categories
          </h2>
        </div>
        {listMenu.map((item, index) => {
          return (
            <div className="m-2">
              <button
                style={{
                  marginBottom: "13px",
                  padding: "6px",
                }}
                className={` flex w-[100%] items-center justify-start rounded-md text-base font-bold transition-all hover:bg-[#118AEF] hover:text-white ${
                  index === background ? "bg-[#118AEF] text-white" : ""
                }`}
                key={index}
                onClick={() => setbackground(index)}
              >
                {item.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
