import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./../../../styles/style.css";
import { ListItemQA } from "./ListItemQA";
import { appConfig } from "../../../app.config";

export default {
  title: `${appConfig.appName}/organisms/list/ListItemQA`,
  component: ListItemQA,
} as ComponentMeta<typeof ListItemQA>;

const Template: ComponentStory<typeof ListItemQA> = (args) => (
  <ListItemQA {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  title: "What is ReanCode101?",
  desc: "ReanCode101 is a ReanCode101 learning platform where students can study online. All self-paced courses are affordable so you can explore and learn the skills you need on your schedule. This free online course content is organized by top experts and practitioners.",
};
