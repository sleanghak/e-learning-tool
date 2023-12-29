import { ComponentStory, ComponentMeta } from "@storybook/react";
import RCTypograpy from "../../components/atoms/RCTypograpy";

export default {
    title: "components/atoms/RCTypograpy",
    component: RCTypograpy,
} as ComponentMeta<typeof RCTypograpy>;
export const Template: ComponentStory<typeof RCTypograpy> = (args) => <RCTypograpy  {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: "RCTypograpy",
};


