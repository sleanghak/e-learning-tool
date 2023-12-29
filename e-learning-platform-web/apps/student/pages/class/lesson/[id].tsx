import React from 'react';
import { StudentappBar, Footer, HorizontalTabs, AccordionVideo, VideoCard } from 'ui';
import { lessonContent, resource } from './../../../../../packages/ui/utils/constant/lessonContent';

export default function Lesson() {
    return (
        <>
            <StudentappBar />
            <HorizontalTabs />
            <div className="flex justify-between ... p-5 ">
                <p className="text-black-900 uppercase text-base font-medium">
                    Course content
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
                            <option selected>All Class</option>
                            <option value="1">Web  Development</option>
                            <option value="2">Mobile  Development</option>
                        </select>
                    </div>

                </div>
            </div>

            <div className='p-5'>
                {lessonContent.map((item, index) => {
                    return (
                        <>
                            <AccordionVideo
                                key={index}
                                title={item.title}
                                video={item.video}
                            />
                        </>
                    );
                })}
            </div>



            <div className="flex justify-between ... p-5 ">
                <p className="text-black-900 uppercase text-base font-medium">
                    Resource Lesson
                </p>
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
                            <option selected>All Course</option>
                            <option value="1">Web  Development</option>
                            <option value="2">Mobile  Development</option>
                        </select>
                    </div>

                </div>
            </div>

            <div className="mx-auto  px-5">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {resource.map((item, index) => {
                        return (
                            <div>
                                <VideoCard
                                    key={index}
                                    href={``}
                                    src={item.src}
                                    alt={item.alt}
                                    title={item.title}
                                />
                            </div>
                        );
                    })}
                </div>
            </div><br />
            <Footer />
        </>
    );
};
