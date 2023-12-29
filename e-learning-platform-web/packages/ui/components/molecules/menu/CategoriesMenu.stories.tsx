import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./../../../styles/style.css";
import { appConfig } from "../../../app.config";
import { CategoriesMenu } from "./CategoriesMenu";

export default {
  title: `${appConfig.appName}/molecules/menu/CategoriesMenu`,
  component: CategoriesMenu,
} as ComponentMeta<typeof CategoriesMenu>;

const Template: ComponentStory<typeof CategoriesMenu> = () => (
  <CategoriesMenu />
);
export const Primary = Template.bind({});
