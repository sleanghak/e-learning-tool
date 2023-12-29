
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../../styles/style.css';
import { IconTypography } from './IconTypography';
import { appConfig } from '../../../app.config';

export default {
    title: `${appConfig.appName}/molecules/typography/IconTypography`,
    component: IconTypography,
} as ComponentMeta<typeof IconTypography>;

const Template: ComponentStory<typeof IconTypography> = (args) => <IconTypography {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111708.png',
    alt: 'icon',
    title: '@REANCODE_101',
};
 
