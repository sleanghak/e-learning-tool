
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../../styles/style.css';
import { Map } from './Map';
import { appConfig } from '../../../app.config';

export default {
    title: `${appConfig.appName}/atoms/iframe/Map`,
    component: Map,
} as ComponentMeta<typeof Map>;

const Template: ComponentStory<typeof Map> = (args) => <Map {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  
};
 
