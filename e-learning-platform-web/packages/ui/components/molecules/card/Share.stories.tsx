import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";
import { Share } from "./Share";

export default {
  title: `${appConfig.appName}/molecules/card/Share`,
  component: Share,
} as ComponentMeta<typeof Share>;

const Template: ComponentStory<typeof Share> = (args) => <Share />;
export const Primary = Template.bind({});
