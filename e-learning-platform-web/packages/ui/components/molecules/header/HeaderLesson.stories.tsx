import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";
import { HeaderLesson } from './HeaderLesson';
export default {
  title: `${appConfig.appName}/molecules/header/HeaderLesson`,
  component: HeaderLesson,
} as ComponentMeta<typeof HeaderLesson>;

const Template: ComponentStory<typeof HeaderLesson> = (args) => (
  <HeaderLesson {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "ReactJS for Beginners",
  titlelesson: "Course to Learn React JS Basics",
  star: 5,
  pointlesson: "4.5",
  description:
    "This free ReactJS Basics course will help you learn the fundamentals of ReactJS. This course will take you through Redux, reducers, actions, JSX, props, state, events, and the state tree. This course will enable you to build user-friendly ReactJS applications using React router, data flow and usage with React, Bootstrap and CSS, and React middleware.",
};
