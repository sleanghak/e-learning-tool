
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../../styles/style.css';
import { InviteYourFriend } from './InviteYourFriend';
import { appConfig } from '../../../app.config';

export default {
    title: `${appConfig.appName}/templates/layout/InviteYourFriend`,
    component: InviteYourFriend,
} as ComponentMeta<typeof InviteYourFriend>;

const Template: ComponentStory<typeof InviteYourFriend> = (args) => <InviteYourFriend {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    href:'#',
    src: "https://cdn-icons-png.flaticon.com/512/3656/3656855.png",
    alt: "img",
    title: "  Invite your friends",
    desc:" Enroll for as many courses as you like for FREE with ReanCode101.",
};

