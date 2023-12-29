import CourseCard from "../../../components/organisms/cards/CourseCard";

export default {
    title: 'organisms/cards/CourseCard',
    component: CourseCard,
};

const Template = (args) => <CourseCard {...args} />;
export const Primary = Template.bind({});