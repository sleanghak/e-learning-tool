
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../../styles/style.css';
import { Footer } from './Footer';
import { appConfig } from '../../../app.config';

export default {
    title: `${appConfig.appName}/templates/layout/Footer`,
    component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;
export const Primary = Template.bind({});

Primary.args = {


};

