import React from 'react';
import { StudentappBar, Footer, HorizontalTabs, AssignmentCard } from 'ui';
import { assignmentCard } from './../../../../../packages/ui/utils/constant/assignmentCard';
export default function ClassWork() {
    return (
        <>
            <StudentappBar />
            <HorizontalTabs />
            <div className="flex justify-between ... ml-[5%] mr-[5%]">
                <div className="flex flex-row items-center justify-center lg:justify-start">
                    <a
                        className="... flex  items-center justify-center rounded-full px-5  py-3 text-sm"
                        href="#!"
                        role="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                    >
                        <img
                            className="mr-2 h-5 w-5"
                            src="https://cdn-icons-png.flaticon.com/512/2666/2666469.png"
                            alt="img"
                        />
                        <span className='text-[#118AEF]'>Continue With Google</span>
                    </a>
                </div>

                <div className="flex flex-row items-center justify-center lg:justify-start">
                    <a
                        style={{ border: "1px solid #0D99FF" }}
                        className="... flex  items-center justify-center rounded-full px-5  py-2 text-sm shadow-sm hover:shadow-md"
                        href="#!"
                        role="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                    >
                       
                        <img
                            className="mr-2 h-5 w-5"
                            src="https://cdn-icons-png.flaticon.com/512/5968/5968523.png"
                            alt="img"
                        />
                        <span>Class drive folder</span>
                    </a>
                </div>
            </div>
            <div className='mt-[2%] ml-[5%] mr-[5%]'>
                {assignmentCard.map((item, index) => {
                    return (
                        <AssignmentCard
                            key={index}
                            name={item.name}
                            title={item.title}
                            date={item.date}
                        />
                    );
                })}
            </div><br/>
            <Footer />
        </>
    );
};
