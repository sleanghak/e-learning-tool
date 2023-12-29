import { ComponentStory, ComponentMeta } from "@storybook/react";
import RCAccountMenu  from "./../../../components/molecules/rc-menu/RCAccountMenu";

export default {
    title: "components/molecules/rc-menu/RCAccountMenu",
    component: RCAccountMenu,
} as ComponentMeta<typeof RCAccountMenu>;
export const Template: ComponentStory<typeof RCAccountMenu> = (args) => <RCAccountMenu  {...args} />;

export const Primary = Template.bind({});

Primary.args = {
   
};


