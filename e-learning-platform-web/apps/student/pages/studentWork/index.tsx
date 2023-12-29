import { CourseCard, Footer, GuestAppBar, ProjectCard, HeaderTitle, Divider } from "ui";
import React from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { listdata } from "ui/utils/constant/data";
import "../../../../packages/ui/styles/slidercard.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function StudentWork() {
  const { title, data } = listdata;
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

      {/* intro project */}
      <div className="m-auto flex w-[77%] items-center">
        <div className="mt-[30px] grid w-[100%] grid-cols-1 gap-6">
          <h1 className="text-center font-bold">
            PROJECT CREATED BY OUR STUDENT
          </h1>
          <p className="text-base font-normal">
            Our students build real-world projects to put theories into
            practice. Our curriculum has dozens of projects and hundreds of
            smaller exercises.
          </p>
          <h1 className="text-center font-bold">Here are some examples</h1>
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
