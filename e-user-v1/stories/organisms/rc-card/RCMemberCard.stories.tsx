import { ComponentStory, ComponentMeta } from "@storybook/react";
import RCMemberCard from "../../../components/organisms/rc-card/RCMemberCard";

export default {
    title: "components/organisms/rc-card/RCMemberCard",
    component: RCMemberCard,
} as ComponentMeta <typeof RCMemberCard>;
export const Template: ComponentStory<typeof RCMemberCard> = (args) => <RCMemberCard {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
    image: "/Bngy.jpg",
    title: "Mrr: SEIREY Chhunheng",
    desc: "Co-Founder and Director",
};