
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../../styles/style.css';
import { Skeleton } from './Skeleton';
import { appConfig } from "./../../../app.config"

export default {
    title: `${appConfig.appName}/atoms/skeleton/Skeleton`,
    component: Skeleton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof Skeleton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};


