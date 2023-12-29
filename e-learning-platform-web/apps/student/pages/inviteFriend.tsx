import React from 'react';
import { StudentappBar } from 'ui/components/templates/layout/appBar/StudentAppBar';
import { HeaderInvite } from 'ui/components/molecules/header/HeaderInvite';
import { Share } from 'ui/components/molecules/card/Share';
import { EnrollCard } from 'ui/components/molecules/card/EnrollCard';
import { enroll } from 'ui/utils/constant/invite';
import { Footer } from 'ui/components/templates/layout/Footer';
import { ListItemQA } from "ui";
export default function InviteFriend() {
    return (
        <div>
            <StudentappBar />

            <HeaderInvite /><br /><br />

            <div className='flex justify-center'>
                <Share />
            </div><br /><br />

            <h1 className='text-center text-black-900 uppercase text-base font-bold p-4'>How it works?</h1><br/>
            
          <div  style={{
            backgroundColor: "rgba(17, 138, 239, 0.03)",

          }}>
          <div className="max-w-6xl mx-auto px-5">
                <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {enroll.map((item, index) => {
                        return (
                            < EnrollCard
                                key={index}
                                src={item.src}
                                alt={item.alt}
                                title={item.title}
                            />
                        );
                    })}
                </div>
            </div>
          </div>

            <h1 className='text-center text-black-900 uppercase text-base font-bold p-4'>Frequently Asked Questions</h1>

            {/* Frequently Asked Questions */}
            <div className="mb-[50px]">
                <div className="m-auto w-[98%]">
                    {Array(8)
                        .fill(0)
                        .map((index) => {
                            return (
                                <div>
                                    <ListItemQA
                                        title="What is ReanCode101?"
                                        desc="ReanCode101 is a ReanCode101 learning platform where students can study online. All self-paced courses are affordable so you can explore and learn the skills you need on your schedule. This free online course content is organized by top experts and practitioners."
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>


            <Footer />
        </div>
    );
};





