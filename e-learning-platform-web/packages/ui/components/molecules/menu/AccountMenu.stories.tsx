import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./../../../styles/style.css";
import { AccountMenu } from "./AccountMenu";
import { appConfig } from "../../../app.config";

export default {
  title: `${appConfig.appName}/molecules/menu/AccountMenu`,
  component: AccountMenu,
} as ComponentMeta<typeof AccountMenu>;

const Template: ComponentStory<typeof AccountMenu> = (args) => (
  <AccountMenu {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  src: "https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
  alt: "Avatar",
  name: "SEIREY Leanghak",
  email: "hak.edu.kh@gmail.com",
};
