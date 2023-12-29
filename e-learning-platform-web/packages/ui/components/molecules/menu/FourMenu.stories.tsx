import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";
import { FourMenu } from "./FourMenu";

export default {
  title: `${appConfig.appName}/molecules/menu/FourMenu`,
  component: FourMenu,
} as ComponentMeta<typeof FourMenu>;

const Template: ComponentStory<typeof FourMenu> = () => <FourMenu />;

export const Primary = Template.bind({});
