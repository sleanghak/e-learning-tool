import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../../styles/style.css";
import { appConfig } from "../../../../app.config";
import { StudentappBar } from "./StudentAppBar";

export default {
  title: `${appConfig.appName}/templates/layout/appBar/StudentappBar`,
  component: StudentappBar,
} as ComponentMeta<typeof StudentappBar>;

const Template: ComponentStory<typeof StudentappBar> = (args) => (
  <StudentappBar {...args} />
);
export const Primary = Template.bind({});

Primary.args = {};
