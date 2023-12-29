import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StudentTeamProfile } from "./StudentTeamProfile";
import "../../../styles/style.css";
import { appConfig } from '../../../app.config';

export default {
  title: `${appConfig.appName}/molecules/StudentTeamProfile`,
  component: StudentTeamProfile,
} as ComponentMeta<typeof StudentTeamProfile>;
export const Template: ComponentStory<typeof StudentTeamProfile> = (args) => (
  <StudentTeamProfile {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "hak",
  desc: "disigner",
  title1: "vann",
  desc1: "front end",
  title2: "houy",
  desc2: "back end",
};
