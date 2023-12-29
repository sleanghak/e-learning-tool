import { ComponentStory, ComponentMeta } from "@storybook/react";
import RCNotFounded  from "./../../components/templates/RCNotFounded";

export default {
    title: "components/templates/RCNotFounded",
    component: RCNotFounded,
} as ComponentMeta<typeof RCNotFounded>;
export const Template: ComponentStory<typeof RCNotFounded> = (args) => <RCNotFounded  {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    
};


