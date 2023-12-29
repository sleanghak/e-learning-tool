
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../../styles/style.css';

import { Avatar } from './Avatar';
import { appConfig } from './../../../app.config';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: `${appConfig.appName}/atoms/avatar/Avatar`,
    component: Avatar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    src: "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp",
    alt: 'avatar',
};

