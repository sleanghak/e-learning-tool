import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";
import { AnnounceCard } from "./AnnounceCard";
import { types } from "@babel/core";

export default {
  title: `${appConfig.appName}/organisms/card/AnnounceCard`,
  component: AnnounceCard,
} as ComponentMeta<typeof AnnounceCard>;

const Template: ComponentStory<typeof AnnounceCard> = () => <AnnounceCard />;

export const Primary = Template.bind({});
