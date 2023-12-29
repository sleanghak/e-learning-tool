import { ComponentStory, ComponentMeta } from "@storybook/react";
import RCOpeningCourseCard from "../../../components/organisms/rc-card/RCOpeningCourseCard";

export default {
    title: "components/organisms/rc-card/RCOpeningCourseCard",
    component: RCOpeningCourseCard,
} as ComponentMeta <typeof RCOpeningCourseCard>;
export const Template: ComponentStory<typeof RCOpeningCourseCard> = (args) => <RCOpeningCourseCard {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
    level: "Beginner",
    title: "Back End Development I",
    startDate: "28-Sep-2022",
    schedule: "5",
};