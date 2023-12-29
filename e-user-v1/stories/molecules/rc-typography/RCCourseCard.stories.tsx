import { ComponentStory, ComponentMeta } from "@storybook/react";
import RCIconTypography  from "./../../../components/molecules/rc-typography/RCIconTypography";

export default {
    title: "components/molecules/rc-typography/RCIconTypography",
    component: RCIconTypography,
} as ComponentMeta<typeof RCIconTypography>;
export const Template: ComponentStory<typeof RCIconTypography> = (args) => <RCIconTypography  {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title:"",
    icon: "",
};


