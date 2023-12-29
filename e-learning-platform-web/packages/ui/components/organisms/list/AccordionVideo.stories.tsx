import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../styles/style.css";

import { appConfig } from "../../../app.config";
import { AccordionVideo } from "./AccordionVideo";

export default {
  title: `${appConfig.appName}/organisms/list/ListitemLesson`,
  component: AccordionVideo,
} as ComponentMeta<typeof AccordionVideo>;

const Template: ComponentStory<typeof AccordionVideo> = (args) => (
  <AccordionVideo {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Introduction to HTML Web Development",
  video:"3",
};
