import React from "react";
import {
  GuestAppBar,
  HeaderLesson,
  VideoIntroCard,
  ListItemQA,
  CardReview,
  CourseCard,
  Footer,
  Listitem,
  RequirementsCard,
  SalaryCard,
  InviteYourFriend,
} from "./../../../packages/ui";
import { data, datafaqs, listlesson } from "ui/utils/constant/data";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "ui/styles/slidercard.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CoursePage() {
  const { title1, title2, title3, listdata } = data;
  const { title } = listlesson;
  const { titlefaqs, datalist } = datafaqs;
  return (
    <div>
      <div>
        <GuestAppBar />
      </div>
      <div >
        <HeaderLesson
          title="ReactJS for Beginners"
          titlelesson="Course to Learn React JS Basics"
          star={5}
          pointlesson="4.5"
          description="This free ReactJS Basics course will help you learn the fundamentals of ReactJS. This course will take you through Redux, reducers, actions, JSX, props, state, events, and the state tree. This course will enable you to build user-friendly ReactJS applications using React router, data flow and usage with React, Bootstrap and CSS, and React middleware."
        />
      </div>


      {/* Skills you will learn */}
      <div className="container p-4">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className=" md:mb-0">
            <div className="">
              <div className="pb-4 text-xl font-bold">
                <p>{title1}</p>
              </div>
              <div className="grid h-[100px] grid-cols-2 gap-4">
                {listdata.map((item, index) => {
                  if (item.type == 1) {
                    return (
                      <div className="flex">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/875/875636.png"
                          alt=""
                          className="mr-[5px] h-[25px] w-[25px]"
                        />
                        <p>{item.title}</p>
                      </div>
                    );
                  }
                })}
              </div>
            </div><br />

            {/* Who should learn */}
            <div className="">
              <div className="pb-4 text-xl font-bold">
                <p>{title2}</p>
              </div>
              <div className="grid h-[100px] grid-cols-2 gap-4">
                {listdata.map((item, index) => {
                  if (item.type == 2) {
                    return (
                      <div className="flex">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/875/875636.png"
                          alt=""
                          className="mr-[5px] h-[25px] w-[25px]"
                        />
                        <p>{item.title}</p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            {/* </div> */}
          </div>

          <div className=" sm:w-full md:w-full lg:w-[70%] ">
            {/* VideoIntroCard */}
            <div>
              <div className="relative max-sm:mt-[30px] sm:mt-[30px] sm:w-[100%] md:mt-[30px] md:w-[100%] lg:-top-[30vh]">
                <VideoIntroCard
                  src="https://eduinpro.com/blog/wp-content/uploads/2020/03/web-development.jpg"
                  time="10 Hours"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/*  Listitem*/}
      <div className="pl-4 pr-4">
        <div>
          <h1 className=" text-xl font-bold">{title}</h1>
        </div><br />
        <div className="">
          <Listitem title={title} />
        </div>
      </div><br />

      {/* Why you should learn */}
      <div className="">
        <div>
          <h1 className="pl-4 pr-4 text-xl font-bold">
            Why you should learn
          </h1>
        </div><br />
        <div className="pl-4 pr-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div>
            <RequirementsCard
              title="Most In-demand Framework"
              desc="Top jobs in Full Stack development demand ReactJS as a skill."
            />
          </div>
          <div>
            <SalaryCard
              salary={15000}
              desc="Annual median salary of a ReactJS Developer."
            />
          </div>
        </div>
      </div><br />

      {/* InviteYourFriend */}
      <div>
        <InviteYourFriend
          href={`/inviteFriend`}
          src="https://cdn-icons-png.flaticon.com/512/3656/3656855.png"
          alt="img"
          title="  Invite your friends"
          desc=" Enroll for as many courses as you like for FREE with ReanCode101."
        />
      </div><br />


      {/* ListItemQA */}
      <div className="pl-4 pr-4">
        <div>
          <h1 className=" text-xl font-bold">{titlefaqs}</h1>
        </div><br />
        <div className="">
          {datalist.map((item, index) => {
            return (
              <div>
                <ListItemQA title={item.title} desc={item.asw} />
              </div>
            );
          })}
        </div>
      </div>

      {/*  Learners Reviews*/}
      <div className="">
        <div>
          <h1 className="p-4 text-lg font-bold text-[#7D7878]">
            Learners Reviews
          </h1>
        </div>
        <div className="mx-auto  px-5">
          <Swiper
            spaceBetween={20}
            modules={[Pagination, Navigation]}
            className="runOuts"
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            breakpoints={{
              640: { slidesPerView: 1, pagination: false },
              768: { slidesPerView: 1, pagination: false },
              1024: { slidesPerView: 2 },
            }}
            pagination={true}
            navigation={true}
          >
            {Array(3)
              .fill(0)
              .map((item, index) => {
                return (
                  <SwiperSlide>
                    <CardReview
                      imgprofile="https://www.shareicon.net/data/2016/05/24/770137_man_512x512.png"
                      altprofile="Image Profile"
                      studentname="Student Name"
                      subject="Full stack developer"
                      decription="The courses in ReanCode101 are very informative for a newbie to digital skills like me. They have a wide coverage of all topics."
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>


      {/* Related Courses */}
      <div>
        <h1 className="p-4 text-xl font-bold">Related Courses</h1>
      </div>
      <div className="mx-auto  px-5 ">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array(4)
            .fill(0)
            .map((index) => {
              return (
                <div>
                  <CourseCard
                    key={index}
                    href={`/course`}
                    src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000"
                    alt="imgPoster"
                    level="Beginner"
                    title=" Back End Development |"
                    star={"4.8"}
                    learner={"2K"}
                    lesson={"6"}
                  />
                </div>
              );
            })}
        </div>
      </div><br />

      <div>
        <Footer />
      </div>
    </div>
  );
}









