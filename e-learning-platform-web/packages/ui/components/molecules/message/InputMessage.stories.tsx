import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./../../../styles/style.css";
import { InputMessage } from "./InputMessage";
import { appConfig } from "../../../app.config";

export default {
  title: `${appConfig.appName}/molecules/message/InputMessage`,
  component: InputMessage,
} as ComponentMeta<typeof InputMessage>;

const Template: ComponentStory<typeof InputMessage> = (args) => (
  <InputMessage {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  
};
