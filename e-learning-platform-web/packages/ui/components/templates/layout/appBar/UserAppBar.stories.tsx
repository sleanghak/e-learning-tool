import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../../styles/style.css";
import { appConfig } from "../../../../app.config";
import { UserAppBar } from "./UserAppBar";

export default {
  title: `${appConfig.appName}/templates/layout/appBar/UserAppBar`,
  component: UserAppBar,
} as ComponentMeta<typeof UserAppBar>;
const Template: ComponentStory<typeof UserAppBar> = (args) => (
  <UserAppBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
