import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";
import { NotiWorkCard } from "./NotiWorkCard";

export default {
  title: `${appConfig.appName}/molecules/card/NotiWorkCard`,
  component: NotiWorkCard,
} as ComponentMeta<typeof NotiWorkCard>;

const Template: ComponentStory<typeof NotiWorkCard> = (args) => (
  <NotiWorkCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  date: "Oct Monday",
  time: "11:59 PM – HTML",
  notification: "8",
};
