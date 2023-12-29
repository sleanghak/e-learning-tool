import { ComponentMeta, ComponentStory } from "@storybook/react";
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";
import { Listimage } from "./ListImage";

export default {
  title: `${appConfig.appName}/molecules/list/ListImage`,
  component: Listimage,
} as ComponentMeta<typeof Listimage>;

export const ListImage: ComponentStory<typeof Listimage> = () => <Listimage />;
