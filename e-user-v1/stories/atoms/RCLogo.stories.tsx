import { ComponentStory, ComponentMeta } from "@storybook/react";
import RCLogo from "../../components/atoms/RCLogo";

export default {
    title: "components/atoms/RCLogo",
    component: RCLogo,
} as ComponentMeta<typeof RCLogo>;
export const Template: ComponentStory<typeof RCLogo> = (args) => <RCLogo  {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  
};


