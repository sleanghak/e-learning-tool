import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";
import { CommentCard } from "./CommentCard";

export default {
  title: `${appConfig.appName}/molecules/card/CommentCard`,
  component: CommentCard,
} as ComponentMeta<typeof CommentCard>;
const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: "Nak",
  time: "10:39 AM",
  title: "Hello Teacher.",
};
