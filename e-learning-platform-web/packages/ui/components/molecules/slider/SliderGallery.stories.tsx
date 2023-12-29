import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";
import { SliderGallery } from "./SliderGallery";

export default {
  title: `${appConfig.appName}/molecules/slider/SliderGallery`,
  component: SliderGallery,
} as ComponentMeta<typeof SliderGallery>;

const Template: ComponentStory<typeof SliderGallery> = () => <SliderGallery />;

export const Primary = Template.bind({});
Primary.args = {

};
