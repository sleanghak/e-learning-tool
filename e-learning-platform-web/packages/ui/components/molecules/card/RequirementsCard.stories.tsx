
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RequirementsCard } from './RequirementsCard';
import "../../../styles/style.css";
import { appConfig } from '../../../app.config';

export default {
    title: `${appConfig.appName}/molecules/card/RequirementsCard`,
    component: RequirementsCard,
} as ComponentMeta<typeof RequirementsCard>;

const Template: ComponentStory<typeof RequirementsCard> = (args) => <RequirementsCard {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    title: "Most In-demand Framework",
    desc: "Top jobs in Full Stack development demand ReactJS as a skill.",
};

