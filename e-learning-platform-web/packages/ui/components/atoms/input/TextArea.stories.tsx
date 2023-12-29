
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../../styles/style.css';
import { TextArea } from './TextArea';
import { appConfig } from "./../../../app.config"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: `${appConfig.appName}/atoms/input/TextArea`,
    component: TextArea,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof TextArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};


