
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../styles/style.css';
import { ReanCode101Logo } from './ReanCode101Logo';
import { appConfig } from './../../app.config';

export default {
    title: `${appConfig.appName}/atoms/ReanCode101Logo`,
    component: ReanCode101Logo,
} as ComponentMeta<typeof ReanCode101Logo>;

const Template: ComponentStory<typeof ReanCode101Logo> = (args) => <ReanCode101Logo {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    src: 'https://yt3.ggpht.com/diOsKoTHyxO6yA--inX73Ks9yDmUjtuKJBbOTIyJM2p9XALHw0w7C0_aYQevJhUn9PO88Md_M-kb=s500-c-fcrop64=1,00000000ffffffff-nd-v1',
    alt: 'ReanCode101Logo',
};

