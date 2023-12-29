import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";
import {Ourstory} from "./OurStoryCard";

export default {
  title: `${appConfig.appName}/molecules/card/OurStoryCard`,
  component: Ourstory,
} as ComponentMeta<typeof Ourstory>;

const Template: ComponentStory<typeof Ourstory> = (args) => (
  <Ourstory {...args} />
);

export const OurstoryCard = Template.bind({});
OurstoryCard.args = {
  name: "VISION",
  title:
    " To develop the next generation of Cambodians to love the field of technology and want Cambodia to grow in the field of technology as well.",
};
