import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./../../../styles/style.css";
import { appConfig } from "../../../app.config";
import { LessonMenu } from "./LessonMenu";

export default {
  title: `${appConfig.appName}/molecules/menu/LessonMenu`,
  component: LessonMenu,
} as ComponentMeta<typeof LessonMenu>;

const Template: ComponentStory<typeof LessonMenu> = (args) => (
  <LessonMenu {...args} />
);
export const Primary = Template.bind({});

Primary.args = {};
