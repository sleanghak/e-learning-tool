
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../styles/style.css';
import { Divider } from './Divider';
import { appConfig } from './../../app.config';

export default {
    title: `${appConfig.appName}/atoms/Divider`,
    component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    
};

