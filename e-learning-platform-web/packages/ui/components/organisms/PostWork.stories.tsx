import { ComponentMeta, ComponentStory } from "@storybook/react";
import { appConfig } from "../../app.config";
import "../../styles/style.css";
import { PostWork } from "./PostWork";

export default {
  title: `${appConfig.appName}/organisms/PostWork`,
  component: PostWork,
} as ComponentMeta<typeof PostWork>;

const Template: ComponentStory<typeof PostWork> = (args) => (
  <PostWork {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Home Work",
  duedate: "Due 04 Oct 2022",
  name: "Mr.Nak",
  date: "Due 04 Oct 2022",
  point: "100",
};
