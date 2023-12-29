import { ComponentStory, ComponentMeta } from "@storybook/react";
import RCValueCard from "../../../components/organisms/rc-card/RCValueCard";

export default {
    title: "components/organisms/rc-card/RCValueCard",
    component: RCValueCard,
} as ComponentMeta <typeof RCValueCard>;
export const Template: ComponentStory<typeof RCValueCard> = (args) => <RCValueCard {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
    image: "/idea.png",
    desc: "We believe Computer Science is foundational for all students",
};