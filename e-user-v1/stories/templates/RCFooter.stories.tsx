import { ComponentStory, ComponentMeta } from "@storybook/react";
import RCFooter  from "./../../components/templates/RCFooter";

export default {
    title: "components/templates/RCFooter",
    component: RCFooter,
} as ComponentMeta<typeof RCFooter>;
export const Template: ComponentStory<typeof RCFooter> = (args) => <RCFooter  {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    
};


