import { ComponentMeta, ComponentStory } from "@storybook/react";
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";
import { HeaderInvite } from "./HeaderInvite";

export default {
  title: `${appConfig.appName}/molecules/header/HeaderInvite`,
  component: HeaderInvite,
} as ComponentMeta<typeof HeaderInvite>;

const Template: ComponentStory<typeof HeaderInvite> = (args) => (
  <HeaderInvite {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  title: "Invite Your Friends",
  desc: "Get your friends to join ReanCode101 and enroll into as many FREE courses as you like.",
};
