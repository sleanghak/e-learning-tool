import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../../styles/style.css";
import { appConfig } from "../../../../app.config";
import { GuestAppBar } from "./GuestAppBar";

export default {
    title: `${appConfig.appName}/templates/layout/appBar/GuestAppBar`,
    component: GuestAppBar,
} as ComponentMeta<typeof GuestAppBar>;

const Template: ComponentStory<typeof GuestAppBar> = (args) => (
  <GuestAppBar {...args} />
);
export const Primary = Template.bind({});

Primary.args = {};
