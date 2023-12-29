import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CourseCard } from "./CourseCard";
import { appConfig } from "./../../../../app.config";
import "./../../../../styles/style.css";
export default {
  title: `${appConfig.appName}/organisms/card/CourseCard`,
  component: CourseCard,
} as ComponentMeta<typeof CourseCard>;
export const Template: ComponentStory<typeof CourseCard> = (args) => (
  <CourseCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  href: "#",
  src: "https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000",
  alt: "img",
  level: "Beginner",
  title: " Back End Development |",
  star: "4.8",
  learner: "2K",
  lesson: "6",
};
