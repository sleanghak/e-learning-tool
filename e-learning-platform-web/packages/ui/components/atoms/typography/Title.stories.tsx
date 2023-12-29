
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../../styles/style.css';
import { Title } from './Title';
import { appConfig } from "./../../../app.config"

export default {
    title: `${appConfig.appName}/atoms/typography/Title`,
    component: Title,

} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    children: "Hello Title"
};


