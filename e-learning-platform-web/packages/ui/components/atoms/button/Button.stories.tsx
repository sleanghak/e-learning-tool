import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./../../../styles/style.css";

import { Button } from "./Button";
import { appConfig } from "./../../../app.config";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `${appConfig.appName}/atoms/button/Button`,
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: "primary",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  label: "Button",
};
