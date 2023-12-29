import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../styles/style.css";

import { appConfig } from "../../../app.config";
import { Listitem } from "./ListItemLesson";

export default {
  title: `${appConfig.appName}/organisms/list/ListitemLesson`,
  component: Listitem,
} as ComponentMeta<typeof Listitem>;

const Template: ComponentStory<typeof Listitem> = (args) => (
  <Listitem {...args} />
);

export const ListItemLesson = Template.bind({});
ListItemLesson.args = {
  title: "Test",
};
