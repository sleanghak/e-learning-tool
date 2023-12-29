import { ComponentStory, ComponentMeta } from "@storybook/react";
import RCProjectCard from './../../../components/organisms/rc-card/RCProjectCard';

export default {
    title: "components/organisms/rc-card/RCProjectCard",
    component: RCProjectCard,
} as ComponentMeta<typeof RCProjectCard>;
export const Template: ComponentStory<typeof RCProjectCard> = (args) => <RCProjectCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    image: 'https://i.stack.imgur.com/AFLBb.jpg',
    title: 'Back End Development',
    desc: 'HTML CSS',
};