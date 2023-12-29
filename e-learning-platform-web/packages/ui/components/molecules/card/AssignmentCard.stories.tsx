import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";
import { AssignmentCard } from "./AssignmentCard";

export default {
  title: `${appConfig.appName}/molecules/card/AssignmentCard`,
  component: AssignmentCard,
} as ComponentMeta<typeof AssignmentCard>;
const Template: ComponentStory<typeof AssignmentCard> = (args) => (
  <AssignmentCard {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  name: "Mr.Nak",
  title: "posted a new assigment : Homework",
  date: "04 Oct 2022",
};
