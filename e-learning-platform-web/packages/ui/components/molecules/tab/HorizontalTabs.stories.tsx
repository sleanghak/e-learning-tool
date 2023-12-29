import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";
import { HorizontalTabs } from "./HorizontalTabs";

export default {
  title: `${appConfig.appName}/molecules/tab/HorizontalTabs`,
  component: HorizontalTabs,
} as ComponentMeta<typeof HorizontalTabs>;

const Template: ComponentStory<typeof HorizontalTabs> = () => (
  <HorizontalTabs />
);

export const Primary = Template.bind({});
