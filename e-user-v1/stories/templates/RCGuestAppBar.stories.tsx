import { ComponentStory, ComponentMeta } from "@storybook/react";
import RCGuestAppBar  from "./../../components/templates/RCGuestAppBar";

export default {
    title: "components/templates/RCGuestAppBar",
    component: RCGuestAppBar,
} as ComponentMeta<typeof RCGuestAppBar>;
export const Template: ComponentStory<typeof RCGuestAppBar> = (args) => <RCGuestAppBar  {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    
};


