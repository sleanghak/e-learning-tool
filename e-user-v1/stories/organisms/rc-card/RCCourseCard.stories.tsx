import { ComponentStory, ComponentMeta } from "@storybook/react";
import RCCourseCard from "../../../components/organisms/rc-card/RCCourseCard";

export default {
    title: "components/organisms/rc-card/RCCourseCard",
    component: RCCourseCard,
} as ComponentMeta<typeof RCCourseCard>;
export const Template: ComponentStory<typeof RCCourseCard> = (args) => <RCCourseCard  {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    image: "https://www.1training.org/wp-content/uploads/2019/04/How-to-become-a-Web-Developer-2.png",
    level: "Beginner",
    title: " Back End Development |",
    star: "4.8",
    learner: "25",
    lesson: "6",
};


