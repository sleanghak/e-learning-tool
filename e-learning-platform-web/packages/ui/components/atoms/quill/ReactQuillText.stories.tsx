
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../../styles/style.css';
import 'react-quill/dist/quill.snow.css';
import { ReactQuillText } from './ReactQuillText';
import { appConfig } from './../../../app.config';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: `${appConfig.appName}/Atoms/quill/ReactQuillText`,
    component: ReactQuillText,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ReactQuillText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ReactQuillText> = (args) => {
    const [value, setValue] = React.useState<string>(args.value ?? "");
    return (<ReactQuillText

        value={value}
        onChange={
            (e: string) => {
                args.onChange(...e);
                setValue(e);
            }
        }
        {...args}
    />);
}

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    placeholder: "Write your description here.",
    readonly: false,
    value: "<div>Hello</div>",
    theme: "snow",
};