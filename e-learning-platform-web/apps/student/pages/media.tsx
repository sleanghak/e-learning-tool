import React from "react";
import { GuestAppBar } from "ui/components/templates/layout/appBar/GuestAppBar";
import { HeaderTitle } from "ui/components/molecules/header/HeaderTitle";
import { Divider } from "ui/components/atoms/Divider";
import { Title } from "ui/components/atoms/typography/Title";
import { SliderGallery } from "ui/components/molecules/slider/SliderGallery";
import { Listimage } from "ui/components/molecules/list/ListImage";
import { PlayVideoCard } from "ui/components/molecules/card/PlayVideoCard";
import { VideoCard } from "ui/components/organisms/card/VideoCard";
import { gallery, title, videoTitle, video, listImage, videoCard } from "ui/utils/constant/media";
import { Footer } from "ui/components/templates/layout/Footer";

const Media = () => {
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
            <div className="text-center">
                {title.map((item, index) => {
                    return (
                        <Title
                            key={index}
                            children={item.children}
                        />
                    );
                })}
            </div>

            <div className="pl-5 pr-5 sm:pt-4 md:pt-4 lg:pt-4">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
                    <div className="">
                        <SliderGallery/>
                    </div>

                    <div>
                        <Listimage />
                    </div>
                </div>
            </div>
            <br />

            <div className="text-center">
                {videoTitle.map((item, index) => {
                    return (
                        <Title
                            key={index}
                            children={item.children}
                        />
                    );
                })}
            </div><br />

            <div className="pl-5 pr-5">
                <PlayVideoCard
                    imagePoster="https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Top-6-Front-End-Web-Development-Tools-to-Increase-Your-Productivity-in-2020-1.jpg"
                    URL="https://youtu.be/4Oieh5Qqog4"
                    title="Basic web developer"
                    date="15-Feb-2023"
                    desc="Desciption..."
                />
            </div>

            {/* divider */}
            <div style={{ paddingLeft: '20%', paddingRight: '20%' }}>
                <Divider />
            </div>
            <div className="mx-auto  px-5">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {videoCard.map((item, index) => {
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

            {/* Footer */}
            <Footer />
        </div>
    );
}
export default Media;