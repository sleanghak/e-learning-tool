import { ComponentStory, ComponentMeta } from "@storybook/react";
import RCButton from "../../../components/atoms/rc-button/RCButton";

export default {
    title: "components/atoms/rc-button/RCButton",
    component: RCButton,
} as ComponentMeta <typeof RCButton>;
export const Template: ComponentStory<typeof RCButton> = (args) => <RCButton {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
    children: "Sign up",
    children1: "Continue With Google",
    children2: "Save"
};