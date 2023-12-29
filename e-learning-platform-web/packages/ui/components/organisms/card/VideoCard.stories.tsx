import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VideoCard } from "./VideoCard";
import { appConfig } from "../../../app.config";
import "./../../../styles/style.css";
export default {
  title: `${appConfig.appName}/organisms/card/VideoCard`,
  component: VideoCard,
} as ComponentMeta<typeof VideoCard>;
export const Template: ComponentStory<typeof VideoCard> = (args) => (
  <VideoCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  href: "#",
  src: "https://www.learninglight.com/wp-content/uploads/2016/08/elearning-content-development.jpg",
  alt: "img",
  title: "video title",
  desc: "Basic Web Development",
};
