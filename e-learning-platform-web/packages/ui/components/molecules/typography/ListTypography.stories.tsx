
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../../styles/style.css';
import { ListTypography } from './ListTypography';
import { appConfig } from '../../../app.config';

export default {
    title: `${appConfig.appName}/molecules/typography/ListTypography`,
    component: ListTypography,
} as ComponentMeta<typeof ListTypography>;

const Template: ComponentStory<typeof ListTypography> = (args) => <ListTypography {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    icon: <svg style={{ color: ' #118AEF' }} className="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="4" /></svg>,
    desc: ' Khmer : Mother tongue',
};

