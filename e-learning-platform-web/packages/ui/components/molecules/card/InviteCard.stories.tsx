import {ComponentStory, ComponentMeta} from '@storybook/react';
import { InviteCard } from './InviteCard'; 
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";

export default{
    title: `${appConfig.appName}/molecules/card/InviteCard `,
    component: InviteCard ,
  } as ComponentMeta<typeof InviteCard >;
  export const Template: ComponentStory<typeof InviteCard > = (args) =><InviteCard  {...args} />;
  
  export const Primary = Template.bind({});
  Primary.args={
    title: "Invite your friends",
    desc: "Enroll for as many SkillUp courses as you like for FREE"
  };