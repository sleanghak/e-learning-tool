import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../../styles/style.css";
import { ClassCard } from "./ClassCard";
import { appConfig } from "../../../../app.config";

export default {
  title: `${appConfig.appName}/organisms/card/classCard/ClassCard`,
  component: ClassCard,
} as ComponentMeta<typeof ClassCard>;

const Template: ComponentStory<typeof ClassCard> = (args) => <ClassCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  url: "https://img.freepik.com/premium-vector/mobile-app-development-background_73903-295.jpg?w=2000",
  title: "Fundamentals HTML",
  nameTeacher: "name Teacher",
  time: "8:00 - 11:00 AM",
  day: "Tue-Thu-Sat",
};
