import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./../../styles/style.css";
import { NotFound } from "./404";
import { appConfig } from "../../app.config";

export default {
  title: `${appConfig.appName}/pages/404`,
  component: NotFound,
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = (args) => (
  <NotFound {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  desc: "The server malfunctioned or has been shut down",
};
