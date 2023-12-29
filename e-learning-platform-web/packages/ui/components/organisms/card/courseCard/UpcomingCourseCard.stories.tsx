import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./../../../../styles/style.css";
import { UpcomingCourseCard } from "./UpcomingCourseCard";
import { appConfig } from "./../../../../app.config";

export default {
  title: `${appConfig.appName}/organisms/card/UpcomingCourseCard`,
  component: UpcomingCourseCard,
} as ComponentMeta<typeof UpcomingCourseCard>;

const Template: ComponentStory<typeof UpcomingCourseCard> = (args) => (
  <UpcomingCourseCard {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  href: "#",
  src: "https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000",
  alt: "imgPoster",
  level: "Beginner",
  title: " Back End Development |",
  start: "28-Sep-2022",
  hour: 5,
};
