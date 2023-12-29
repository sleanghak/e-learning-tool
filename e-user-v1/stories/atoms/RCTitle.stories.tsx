import { ComponentStory, ComponentMeta } from "@storybook/react";
import RCTitle from "../../components/atoms/RCTitle";

export default {
    title: "components/atoms/RCTitle",
    component: RCTitle,
} as ComponentMeta<typeof RCTitle>;
export const Template: ComponentStory<typeof RCTitle> = (args) => <RCTitle  {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: "RCTitle",
};


