import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";
import {HeaderTitle} from "./HeaderTitle";

export default {
  title: `${appConfig.appName}/molecules/header/HeaderTitle`,
  component: HeaderTitle,
} as ComponentMeta<typeof HeaderTitle>;
const Template: ComponentStory<typeof HeaderTitle> = (args) => (
  <HeaderTitle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Learn Today’s Most in-Demand Skills With our Online Courses",
};
