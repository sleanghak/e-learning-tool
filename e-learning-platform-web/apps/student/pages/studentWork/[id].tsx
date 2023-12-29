import React from "react";
import { useRouter } from "next/router";
import { listdata } from "ui/utils/constant/data";
import "../../../../packages/ui/styles/slidercard.css";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { AiOutlineShareAlt } from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  HeaderTitle,
  Divider,
  Footer,
  CourseCard,
  GuestAppBar,
  ProjectCard,
  StudentTeamProfile,
} from "ui";

export default function DetailData() {
  const { data, title } = listdata;
  const [CurrentIndex, setCurrentIndex] = React.useState(0);
  const router = useRouter();
  const { id } = router.query;
  const gotoback = () => {
    const isFirstSlide = CurrentIndex === 0;
    const newIndex = isFirstSlide
      ? data[CurrentIndex].img.length - 1
      : CurrentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const gotonext = () => {
    const isLastSlide = CurrentIndex === data[CurrentIndex].img.length - 1;
    const newIndex = isLastSlide ? 0 : CurrentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToClick = (index) => {
    setCurrentIndex(index);
  };
  const Test = data.find((a) => a.id == id);
  if (Test) {
    return (
      <div>
        {data.map((item, index) => {
          if (item.id == id) {
            return (
              <div>

                <GuestAppBar />
                {/* content */}
                <HeaderTitle
                  title="Learn Today’s Most in-Demand Skills With our Online Courses"
                />
                {/* divider */}
                <div style={{ paddingLeft: '20%', paddingRight: '20%' }}>
                  <Divider />
                </div>
                <div>

                  <div className="m-auto flex w-[77%] items-center">
                    <div className="mt-[30px] grid w-[100%] grid-cols-1 gap-6">
                      <h1 className="text-center font-bold">
                        STUDENTS PROJECTS
                      </h1>
                      <p className="text-center text-base font-normal">
                        Our students build real-world projects to put theories
                        into practice.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:justify-betwee mt-[40px] flex w-[100%] items-center max-sm:flex-col max-sm:justify-center sm:flex-col sm:justify-center md:flex-col md:justify-center lg:flex-row">
                  <div className="flex h-[400px] flex-col items-center justify-center max-sm:mb-[40px] max-sm:w-[100%] sm:mb-[40px] sm:w-[80%] md:mb-[60px] md:w-[80%] lg:w-[50%]">
                    <img
                      className="h-[90%] w-[80%] rounded-md lg:mt-[40px]"
                      src={item.img[CurrentIndex]}
                      alt={item.alt}
                    />
                    <div className="mt-[20px] flex items-center gap-4">
                      <div>
                        <button onClick={() => gotoback()}>
                          <IoArrowBackSharp size={25} />
                        </button>
                      </div>
                      <div className="flex">
                        {Array(item.img.length)
                          .fill(0)
                          .map((iteam, index) => {
                            return (
                              <div>
                                <div

                                  onClick={() => {
                                    goToClick(index);
                                    console.log(index);
                                  }}
                                  className={`h-[4px] w-[40px] ${CurrentIndex == index
                                    ? "bg-[#118AEF]"
                                    : "bg-[#7D7878]"
                                    }`}
                                ></div>
                              </div>
                            );
                          })}
                      </div>
                      <div>
                        <button onClick={() => gotonext()}>
                          <IoArrowForwardSharp size={25} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-full flex-col max-sm:ml-[10px] max-sm:gap-y-10 sm:ml-[10px] sm:gap-y-12 md:ml-[10px] md:gap-y-12 lg:w-[50%] lg:gap-y-16">
                    <h1 className="text-xl font-bold text-[#FFC107]">
                      {item.title2}
                    </h1>
                    <p>{item.desc2}</p>
                    <p>{item.date}</p>
                    <div className="flex gap-16">
                      <button
                        className="flex h-[40px] w-[100px] items-center justify-center gap-4 rounded-lg"
                        style={{ border: "1px solid #0D99FF" }}
                      >
                        <AiOutlineShareAlt /> Share
                      </button>
                      <button className="h-[40px] w-[150px] rounded-lg bg-[#0D99FF] text-lg text-white">
                        Visit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-[30px]">
                  <h1 className="text-center text-lg font-bold">
                    THEIRS TEAM
                  </h1>
                  <div className="m-auto h-full max-sm:w-[90%] sm:w-[50%] md:w-[40%] lg:w-[30%]">
                    <StudentTeamProfile
                      title="Mrr:Mouy"
                      desc="Back End"
                    />
                  </div>
                </div>

                {/*ProjectCard slider 1 */}
                <div className="p-5">
                  <div className="">
                    <h1 className="font-bold">Basic Web Development</h1>
                  </div><br />
                  <div className="">
                    <Swiper
                      breakpoints={{
                        640: { slidesPerView: 2, pagination: false },
                        768: { slidesPerView: 3, pagination: false },
                        1024: { slidesPerView: 4 },
                      }}
                      spaceBetween={20}
                      modules={[Pagination, Navigation]}
                      className="runoutstudentwork"
                      slidesPerGroup={1}
                      loop={true}
                      loopFillGroupWithBlank={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                    >
                      {data.map((item, index) => {
                        return (
                          <div>
                            <SwiperSlide key={index}>
                              <ProjectCard
                                src={item.img[0]}
                                alt={item.alt}
                                title={item.title}
                                desc={item.desc}
                                href={`/studentWork/${item.id}`}
                              />
                            </SwiperSlide>
                          </div>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>


                {/*ProjectCard slider 2 */}
                <div className="p-5">
                  <div className="">
                    <h1 className="font-bold">Front End Development</h1>
                  </div><br />
                  <div className="">
                    <Swiper
                      breakpoints={{
                        640: { slidesPerView: 2, pagination: false },
                        768: { slidesPerView: 3, pagination: false },
                        1024: { slidesPerView: 4 },
                      }}
                      spaceBetween={20}
                      modules={[Pagination, Navigation]}
                      className="runoutstudentwork"
                      slidesPerGroup={1}
                      loop={true}
                      loopFillGroupWithBlank={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                    >
                      {data.map((item, index) => {
                        return (
                          <div>
                            <SwiperSlide key={index}>
                              <ProjectCard
                                src={item.img[0]}
                                alt={item.alt}
                                title={item.title}
                                desc={item.desc}
                                href={`/studentWork/${item.id}`}
                              />
                            </SwiperSlide>
                          </div>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>


                {/*ProjectCard slider 2 */}
                <div className="p-5">
                  <div className="">
                    <h1 className="font-bold">Back End Development</h1>
                  </div><br />
                  <div className="">
                    <Swiper
                      breakpoints={{
                        640: { slidesPerView: 2, pagination: false },
                        768: { slidesPerView: 3, pagination: false },
                        1024: { slidesPerView: 4 },
                      }}
                      spaceBetween={20}
                      modules={[Pagination, Navigation]}
                      className="runoutstudentwork"
                      slidesPerGroup={1}
                      loop={true}
                      loopFillGroupWithBlank={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                    >
                      {data.map((item, index) => {
                        return (
                          <div>
                            <SwiperSlide key={index}>
                              <ProjectCard
                                src={item.img[0]}
                                alt={item.alt}
                                title={item.title}
                                desc={item.desc}
                                href={`/studentWork/${item.id}`}
                              />
                            </SwiperSlide>
                          </div>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>

                <div>
                  <Footer />
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dont has data</h1>
      </div>
    );
  }
}
