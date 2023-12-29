import {ComponentStory, ComponentMeta} from '@storybook/react';
import {CoreValueCard} from './CoreValueCard'
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";
export default{
  title: `${appConfig.appName}/molecules/card/CoreValueCard`,
  component: CoreValueCard,
} as ComponentMeta<typeof CoreValueCard>;
export const Template: ComponentStory<typeof CoreValueCard> = (args) =><CoreValueCard {...args} />;

export const Primary = Template.bind({});
Primary.args={
  src: "https://cdn-icons-png.flaticon.com/128/747/747587.png",
  desc: "We beileve Computer Science is foundational for all students",
};