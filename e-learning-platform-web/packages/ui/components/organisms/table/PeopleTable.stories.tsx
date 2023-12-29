import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./../../../styles/style.css";
import { PeopleTable } from './PeopleTable';
import { appConfig } from "../../../app.config";

export default {
    title: `${appConfig.appName}/organisms/table/PeopleTable`,
    component: PeopleTable,
} as ComponentMeta<typeof PeopleTable>;

const Template: ComponentStory<typeof PeopleTable> = (args) => (
    <PeopleTable {...args} />
);
export const Primary = Template.bind({});

Primary.args = {

};
