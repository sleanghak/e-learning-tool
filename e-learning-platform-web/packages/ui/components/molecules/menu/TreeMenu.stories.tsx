import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./../../../styles/style.css";
import { appConfig } from "../../../app.config";
import {Treemenu} from "./TreeMenu";

export default {
  title: `${appConfig.appName}/molecules/menu/TreeMenu`,
  component: Treemenu,
} as ComponentMeta<typeof Treemenu>;

const Template: ComponentStory<typeof Treemenu> = () => <Treemenu />;

export const TreeMenu = Template.bind({});
