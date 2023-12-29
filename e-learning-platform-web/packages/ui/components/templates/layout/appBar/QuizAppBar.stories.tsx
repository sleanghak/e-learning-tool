import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../../styles/style.css";
import { appConfig } from "../../../../app.config";
import { QuizAppBar } from "./QuizAppBar";

export default {
    title: `${appConfig.appName}/templates/layout/appBar/QuizAppBar`,
    component: QuizAppBar,
} as ComponentMeta<typeof QuizAppBar>;

const Template: ComponentStory<typeof QuizAppBar> = (args) => (
  <QuizAppBar {...args} />
);
export const Primary = Template.bind({});

Primary.args = {};
