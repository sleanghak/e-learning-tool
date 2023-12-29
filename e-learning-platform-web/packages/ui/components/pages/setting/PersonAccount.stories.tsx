
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../../styles/style.css';
import PersonAccount from './PersonAccount';
import { appConfig } from '../../../app.config';

export default {
    title: `${appConfig.appName}/pages/setting/PersonAccount`,
    component: PersonAccount,
} as ComponentMeta<typeof PersonAccount>;

const Template: ComponentStory<typeof PersonAccount> = (args) => <PersonAccount {...args} />;
export const Primary = Template.bind({});

Primary.args = {
   
};


