import { ComponentStory, ComponentMeta } from "@storybook/react";
import RCTextField from "../../../components/atoms/rc-text-field/RCTextField";

export default {
    title: "components/atoms/rc-text-field/RCTextField",
    component: RCTextField,
} as ComponentMeta<typeof RCTextField>;
export const Template: ComponentStory<typeof RCTextField> = (args) => <RCTextField  {...args} />;

export const Primary = Template.bind({});

Primary.args = {
   
};


