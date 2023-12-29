
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../../styles/style.css';
import Resume from './Resume';
import { appConfig } from '../../../app.config';

export default {
    title: `${appConfig.appName}/pages/setting/Resume`,
    component: Resume,
} as ComponentMeta<typeof Resume>;

const Template: ComponentStory<typeof Resume> = (args) => <Resume {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUp7JTYB2Pk20BDxVsmHlGsLYmqrcF9QYtmjiBsU9i5xiYomSlrDeCYUT1R3bPwitC7wE&usqp=CAU',
    alt: 'profile',
};


