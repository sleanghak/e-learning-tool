import { ComponentStory, ComponentMeta } from "@storybook/react";
import RCUserAppBar  from "./../../components/templates/RCUserAppBar";

export default {
    title: "components/templates/RCUserAppBar",
    component: RCUserAppBar,
} as ComponentMeta<typeof RCUserAppBar>;
export const Template: ComponentStory<typeof RCUserAppBar> = (args) => <RCUserAppBar  {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    
};


