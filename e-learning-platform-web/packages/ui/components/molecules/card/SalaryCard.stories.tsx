
import { ComponentStory, ComponentMeta } from '@storybook/react';
import "../../../styles/style.css";
import { appConfig } from '../../../app.config';
import { SalaryCard } from './SalaryCard';

export default {
    title: `${appConfig.appName}/molecules/card/SalaryCard`,
    component: SalaryCard,
} as ComponentMeta<typeof SalaryCard>;

const Template: ComponentStory<typeof SalaryCard> = (args) => <SalaryCard {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    salary: 15000,
    desc: "Annual median salary of a ReactJS Developer.",
};

