import { ComponentStory, ComponentMeta } from "@storybook/react";
import RCStudentTeamProfileCard from "../../../components/organisms/rc-card/RCStudentTeamProfileCard";

export default {
    title: "components/organisms/rc-card/RCStudentTeamProfileCard",
    component: RCStudentTeamProfileCard,
} as ComponentMeta <typeof RCStudentTeamProfileCard>;
export const Template: ComponentStory<typeof RCStudentTeamProfileCard> = (args) => <RCStudentTeamProfileCard {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
    name: "Vann",
    position: "Developer",
};