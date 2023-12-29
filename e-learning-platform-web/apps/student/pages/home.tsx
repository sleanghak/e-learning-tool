
import {
  UserAppBar,
  InviteYourFriend,
  HeaderTitle,
  CategoriesMenu,
  UpcomingCourseCard,
  CourseCard,
  Footer,
  CardReview,
  ListItemQA,
  Divider,
} from "ui";
import React, { useState } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../packages/ui/styles/slidercard.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoMdClose, IoMdMenu } from "react-icons/io";

export default function PageIndex() {
  const [isMoblie, setIsMoblie] = useState(false);
  return (
    <div>
      {/* component import from UserAppBar */}
      <UserAppBar />
      {/* component import from HeaderTitle */}
      <HeaderTitle
        title="Learn Today’s Most in-Demand Skills With our Online Courses"
      />
      {/* component import from Divider */}
      <div style={{ paddingLeft: '20%', paddingRight: '20%' }}>
        <Divider />
      </div>

      {/* UpcomingCourseCard */}
      <h1 className="p-4 text-xl font-normal">UPCOMING COURSES</h1>
      <div className="mx-auto  px-5">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array(4)
            .fill(0)
            .map((item, index) => {
              return (
                <div>
                  <UpcomingCourseCard
                    key={index}
                    href={`/course`}
                    src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000"
                    alt="imgPoster"
                    level="Beginner"
                    title=" Back End Development |"
                    start="28-Sep-2022"
                    hour={5}
                  />
                </div>
              );
            })}
        </div>
      </div>

      {/* Digital Skills Training for the 21st Century */}
      <div
        style={{
          backgroundColor: "rgba(17, 138, 239, 0.03)",
        }}
        className="flex flex-col mx-auto  px-5"
      >
        <div className="text-center">
          <h1 className="p-[15px] text-lg font-bold">
            The ​Learning Digital
          </h1>
          <p className="p-[15px] text-base font-normal">
            Premium digital skills training for the future of work.
          </p>
        </div>
        <div className="flex w-full items-center justify-center gap-x-40 max-sm:flex-col sm:flex-col md:flex-col lg:flex-row">
          <div className="flex h-[100%] flex-col justify-center p-7 sm:w-[100%] md:w-[100%] lg:w-[50%] lg:p-0">
            <h1 className="mb-[40px] text-center text-lg font-bold">
              Digital Skills Training for the 21st Century
            </h1>
            <p className="mb-[40px] text-base font-normal">
              ReanCode 101 is a world leader in digital skills training,
              empowering businesses and brands to succeed in the digital age.
            </p>
            <p>
              Founded in 2022, ReanCode 101 has worked with teachers from the
              most innovative companies developing real-world digital
              education, empowering many professionals and some of the largest
              corporations in the world.
            </p>
          </div>
          <div className="flex justify-center sm:w-[100%] md:w-[100%] lg:w-[30%]">
            <img
              src="https://www.zauberware.com/assets/graphics/digital-strategy.svg"
              className="h-[35vh] w-[35vh]"
              alt=""
            />
          </div>
        </div>
      </div>


      {/* CORE VALUE IN OUR SCHOOL */}
      <div className="mt-[40px] mb-[40px] flex items-center justify-center max-sm:flex-col sm:flex-col md:flex-col lg:flex-row">
        <div className="flex justify-center max-sm:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[50%]">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQk5FSuM6fOjoIp2i_QdRdOtcdVS0zucGNhHOi9ExgBKrn3DuHl"
            className="h-[44vh] w-[45vh]"
            alt="img"
          />
        </div>

        <div className="flex flex-col justify-center max-sm:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[50%]">
          <div className="w-[90%] ">
            <h1 className="mb-[30px] mt-[10px] text-center text-lg font-bold ">
              CORE VALUE IN OUR SCHOOL
            </h1>
            {Array(3)
              .fill(0)
              .map((index) => {
                return (
                  <div>
                    <div className="flex ">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/875/875636.png"
                        alt=""
                        className="h-[25px] w-[25px]"
                      />
                      <h1 className="text-base font-bold">
                        World-class instructors
                      </h1>
                    </div>
                    <p className="ml-[15px] p-[10px]">
                      Our cutting-edge curriculum is developed and taught by
                      the world's best digital experts and professionals.
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>


      {/*Courses focused on building strong foundational skills for career growth  */}

      <div
        className="mb-[40px] flex items-center justify-center gap-x-56 max-sm:flex-col sm:flex-col md:flex-col lg:flex-row"
        style={{
          backgroundColor: "rgba(17, 138, 239, 0.03)",
        }}
      >
        <div>
          <h1 className="mb-[40px] w-[84%] text-center text-lg font-bold">
            Courses focused on building strong foundational skills for career
            growth
          </h1>
          {Array(4)
            .fill(0)
            .map((index) => {
              return (
                <div className="max-sm:ml-[5px] sm:ml-[5px] md:ml-[5px] lg:ml-0">
                  <div className="flex">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/875/875636.png"
                      alt=""
                      className="h-[25px] w-[25px]"
                    />
                    <h1 className="mb-[15px] text-base font-bold">
                      Learn from Industry Experts
                    </h1>
                  </div>
                  <p className="ml-[28px] mb-[15px] text-base">
                    Comprehensive self-paced courses created with top
                    practitioners
                  </p>
                </div>
              );
            })}
        </div>


        {/*Completion certificate awarded on every course completion  */}
        <div className="mt-[30px]">
          <div
            style={{
              border: "1px solid #118AEF",
              borderRadius: "5px",
            }}
          >
            <img
              src="https://thumbs.dreamstime.com/b/certificate-template-elegant-black-blue-colors-golden-medal-certificate-appreciation-award-diploma-design-template-104879017.jpg"
              className="h-[50vh] w-[60vh] shadow-lg"
              style={{ borderRadius: "5px" }}
              alt="img"
            />
          </div>
          <div className="mt-[20px] flex">
            <img
              src="https://cdn-icons-png.flaticon.com/512/875/875636.png"
              alt=""
              className="h-[25px] w-[25px]"
            />
            <h1 className="text-base">
              Completion certificate awarded on every course completion
            </h1>
          </div>
        </div>
      </div>

      {/* Recommended Courses */}
      <div >
        <div>
          <h1 className="ml-[30px] mb-[30px] mt-[40px] text-lg font-bold">
            Recommended Courses
          </h1>
        </div>
        <div
          className="mx-auto  px-5"
          style={{
            backgroundColor: "rgba(17, 138, 239, 0.03)",

          }}
        >
          <Swiper
            spaceBetween={20}
            modules={[Pagination, Navigation]}
            className="runOut "
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1, pagination: false },
              768: { slidesPerView: 2, pagination: false },
              1024: { slidesPerView: 4 },
            }}
            slidesPerGroup={2}
            navigation={true}
          >
            {Array(6)
              .fill(0)
              .map((index) => {
                return (
                  <SwiperSlide>
                    <CourseCard
                      href={`/course`}
                      src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000"
                      alt="imgPoster"
                      level="Beginner"
                      title=" Back End Development |"
                      star={"4.8"}
                      learner={"2K"}
                      lesson={"6"}
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>


      {/* Explore Online Courses */}

      <div className="">
        <h1 className="ml-[20px] mt-[10px] mb-[30px] text-lg font-bold">
          Explore Online Courses
        </h1>
        <div className="mt-[10px] flex">
          <div className="h-[100%] w-[20%] max-sm:hidden sm:hidden md:hidden lg:flex">
            <CategoriesMenu />
          </div>

          <div className="">
            <div>
              <h1 className="ml-4 text-lg font-bold sm:text-center md:ml-[35px] md:text-left lg:ml-0 lg:text-left">
                Courses in {"Web Development"}
              </h1>
            </div><br />
            <div className="mx-auto  px-5 ">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array(3)
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
            </div>
          </div>
        </div>
      </div>


      {/* InviteYourFriend */}
      <div className="mt-2 mb-2">
        <InviteYourFriend
          href={`/inviteFriend`}
          src="https://cdn-icons-png.flaticon.com/512/3656/3656855.png"
          alt="img"
          title="  Invite your friends"
          desc=" Enroll for as many courses as you like for FREE with ReanCode101."
        />
      </div>


      {/* Learners Reviews */}

      <div>
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

      {/* Frequently Asked Questions */}
      <div className="mb-[50px]">
        <div className="ml-[20px] mb-[40px] text-lg font-bold">
          <h1>Frequently Asked Questions</h1>
        </div>
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

      <div>
        <Footer />
      </div>
    </div>
  );
}
