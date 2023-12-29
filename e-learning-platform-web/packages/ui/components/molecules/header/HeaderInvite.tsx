import React from "react";
import { Divider } from "./../../atoms/Divider";

interface Headerinvite {
  title: string;
  desc: string;
}

export const HeaderInvite = ({ title, desc }: Headerinvite) => {
  return (
    <div >
      <div
        className="flex h-[386px] w-full sm:justify-start md:justify-start lg: justify-evenly ..."
        style={{ backgroundColor: "rgba(17, 138, 239, 0.03)" }}
      >
        <div className="md:z-30  lg:z-0 lg:p-[80px] ">
          <h1 style={{
            color: '#FFC107',
            textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
            fontFamily: 'Barlow',
            fontWeight: 700,
          }}
            className=" text-[26px] uppercase "
          >
            Invite Your Friends
          </h1>
          <div
            className="hidden sm:block"
            style={{
              width: '10%',
              marginLeft: 78,
            }}
          >
            <Divider />
          </div>
          <p
            style={{
              fontFamily: 'Barlow',
              fontWeight: 700,
            }}
            className=" max-sm:w-[100%] sm:w-[100%] md:w-80%] lg:w-[80%] text-[22px] text-[#7D7878]"
          >
            Get your friends to join ReanCode101 and enroll into as many FREE
            courses as you like.
          </p>
        </div>
        <div>
          <img
            className=" hidden sm:block  md:h-[100%]  md:w-[100%] lg:h-[328px] lg:w-[auto]"
            src="https://yt3.ggpht.com/apmf26lV5ktWSJawXJ2eKK01oihvImdPs4sYlXbcl1UxtPizRPG1feVyLMbcVBOUor53YlIa_GtHFQ=s640-c-fcrop64=1,129f0000ed60ffff-nd-v1"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};
