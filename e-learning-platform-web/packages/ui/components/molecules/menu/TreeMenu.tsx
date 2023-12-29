import React from "react";
import { Title } from "./../../atoms/typography/Title";
import { Typography } from "./../../atoms/typography";
import { Ourstory } from "./../../molecules/card/OurStoryCard";
import { CoreValueCard } from "./../../molecules/card/CoreValueCard";
import { MemberCard } from "./../../molecules/card/MemberCard";
import {
  about,
  values1,
  values2,
  values3,
  values4,
  values5,
  values6,
  story,
  coreValues,
  Leaderships,
  LeadershipsTeam,
} from "./../../../utils/constant/about";

export function Treemenu() {
  const [value, setValue] = React.useState(1);
  const [background, setbackground] = React.useState<
    "about" | "value" | "fullteam"
  >("about");
  return (
    <div className="flex">
      <div
        className="h-[300px]"
        style={{
          width: "200px",
          borderRight: "3px solid #118AEF",
          borderRadius: "10px",
        }}
      >
        <div
          className="m-auto block h-[90%] w-[90%]"
        // style={{ width: "90%", height: "90%", margin: "auto" }}
        >
          <div className="flex justify-center" style={{ marginBottom: "10px" }}>
            <button
              style={{ width: "100%", padding: 6 }}
              className={`rounded-md font-bold transition-all hover:bg-[#118AEF] hover:text-white ${background === "about" ? "bg-[#118AEF] text-white" : ""
                }`}
              onClick={() => {
                setValue(1);
                setbackground("about");
              }}
            >
              About
            </button>
          </div>
          <div className="flex justify-center" style={{ marginBottom: "10px" }}>
            <button
              style={{ width: "100%", padding: 6 }}
              className={`rounded-md font-bold transition-all hover:bg-[#118AEF] hover:text-white ${background === "value" ? "bg-[#118AEF] text-white" : ""
                }`}
              onClick={() => {
                setValue(2);
                setbackground("value");
              }}
            >
              Value
            </button>
          </div>
          <div className="flex justify-center" style={{ marginBottom: "10px" }}>
            <button
              style={{ width: "100%", padding: 6 }}
              className={`rounded-md font-bold transition-all hover:bg-[#118AEF] hover:text-white ${background === "fullteam" ? "bg-[#118AEF] text-white" : ""
                }`}
              onClick={() => {
                setValue(3);
                setbackground("fullteam");
              }}
            >
              Full Team
            </button>
          </div>
        </div>
      </div>
      <div className="ml-4 w-[100%]">
        {value == 1 ? (
          <div>
            {/* about reancode101 */}
            <div className="text-center">
              <Title children="About ReanCode101" />
            </div>
            <div>
              {about.map((item, index) => {
                return <Typography key={index} children={item.children} />;
              })}
            </div><br />
            {/* Ourstory */}
            <div className="max-w-6xl mx-auto px-5">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {story.map((item, index) => {
                  return (
                    <Ourstory
                      key={index}
                      imgPath={item.imgPath}
                      title={item.name}
                      desc={item.title}
                    />
                  );
                })}
              </div>
            </div><br />
          </div>
        ) : value == 2 ? (
          <div>
            {/* Our core values */}
            <div className="text-center">
              <Title children="Our core values" />
            </div><br />
            {/* CoreValueCard */}
            <div className="mx-auto max-w-6xl px-5">
              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {coreValues.map((item, index) => {
                  return (
                    <CoreValueCard
                      key={index}
                      src={item.src}
                      desc={item.desc}
                    />
                  );
                })}
              </div>
            </div><br />
            <div>
              <div className="text-center">
                <Title children="We believe computer science is foundational for all students" />
              </div>
              {values1.map((item, index) => {
                return <Typography key={index} children={item.children} />;
              })}
            </div>
            <div>
              <div className="text-center">
                <Title children="We are committed to equity, access, and opportunity" />
              </div>
              {values2.map((item, index) => {
                return <Typography key={index} children={item.children} />;
              })}
            </div>
            <div>
              <div className="text-center">
                <Title children="We believe in the power of a collaborative education community" />
              </div>
              {values3.map((item, index) => {
                return <Typography key={index} children={item.children} />;
              })}
            </div>
            <div>
              <div className="text-center">
                <Title children="We’re agile and responsive to feedback" />
              </div>
              {values4.map((item, index) => {
                return <Typography key={index} children={item.children} />;
              })}
            </div>
            <div>
              <div className="text-center">
                <Title children="We act with integrity and transparency" />
              </div>
              {values5.map((item, index) => {
                return <Typography key={index} children={item.children} />;
              })}
            </div>
            <div>
              <div className="text-center">
                <Title children="We believe broad impact requires thinking big and acting holistically" />
              </div>
              {values6.map((item, index) => {
                return <Typography key={index} children={item.children} />;
              })}
            </div>
          </div>
        ) : (
          <div>
            {/* Leaderships */}
            <div className="text-center">
              <Title children="Leaderships" />
            </div>
            <div className="text-center">
              <Typography children="Board of Directors" />
            </div><br />
            <div className="max-w-6xl mx-auto px-5">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Leaderships.map((item, index) => {
                  return (
                    <MemberCard
                      key={index}
                      href={`/member`}
                      src={item.src}
                      title={item.title}
                      desc={item.desc}
                    />
                  );
                })}
              </div>
            </div>
            <div className="text-center">
              <Title children="Leadership Teams" />
            </div><br />
            <div className="max-w-6xl mx-auto px-5">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {LeadershipsTeam.map((item, index) => {
                  return (
                    <MemberCard
                      key={index}
                      href={`/member`}
                      src={item.src}
                      title={item.title}
                      desc={item.desc}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
