import React from "react";
import { GuestAppBar } from "ui/components/templates/layout/appBar/GuestAppBar";
import { HeaderTitle } from "ui/components/molecules/header/HeaderTitle";
import { Footer } from './../../../packages/ui/components/templates/layout/Footer';
import { Divider } from "ui/components/atoms/Divider";
import { Title } from "ui/components/atoms/typography/Title";
import { Typography } from "ui/components/atoms/typography/Typography";
import { StudentCard } from "ui/components/organisms/card/StudentCard";
import { alumni, title, typography } from "ui/utils/constant/alumni";
const Alumni = () => {
  
    return (
        <div>
            {/* navbar */}
            <GuestAppBar />
            {/* content */}
            <HeaderTitle
                title="Learn Today’s Most in-Demand Skills With our Online Courses"
            />
            {/* divider */}
            <div style={{ paddingLeft: '20%', paddingRight: '20%' }}>
                <Divider />
            </div>
            {/* Title */}
            <div style={{ textAlign: "center" }}>
                {title.map((item, index) => {
                    return (
                        <Title
                            key={index}
                            children={item.children}
                        />
                    );
                })}
                <br></br>
                {typography.map((item, index) => {
                    return (
                        <Typography
                            key={index}
                            children={item.children}
                        />
                    );
                })}
            </div><br></br>
            <div className="flex justify-between ... p-5 ">
                <p className="text-black-900 uppercase text-base font-medium">
                    alumni
                </p>
                {/* CLASS */}
                <div className="flex justify-between ...  ">
                    <div className="mr-4">
                        <select className="form-select appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                            <option selected>CLASS</option>
                            <option value="1">A1</option>
                            <option value="2">A2</option>
                            <option value="3">A3</option>
                        </select>
                    </div>
                    {/* YEAR */}
                    <div className="  ">
                        <select className="form-select appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                            <option selected>YEAR</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mx-auto  px-5">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {alumni.map((item, index) => {
                        return (
                            <StudentCard
                                key={index}
                                href={`/student`}
                                backgroundImagePath={item.backgroundImagePath}
                                profileImagePath={item.profileImagePath}
                                alt={item.alt}
                                StudentName={item.StudentName}
                                title={item.title}
                                desc={item.desc}
                            />
                        );
                    })}
                </div>
            </div><br />
            {/* Footer */}
            <Footer />
        </div>
    );
};
export default Alumni;