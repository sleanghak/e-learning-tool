
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../../styles/style.css';
import { Typography } from './Typography';
import { appConfig } from "./../../../app.config"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: `${appConfig.appName}/Atoms/typography/Typography`,
    component: Typography,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    children: "Hello Typography"
};


