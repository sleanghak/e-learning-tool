
import {ComponentStory, ComponentMeta} from '@storybook/react';
import  PersonProfile  from "./PersonProfile";
import { appConfig } from '../../../app.config';
import './../../../styles/style.css';
export default{
  title: `${appConfig.appName}/pages/setting/PersonProfile`,
  component: PersonProfile,
} as ComponentMeta<typeof PersonProfile>;
export const Template: ComponentStory<typeof PersonProfile> = (args) =><PersonProfile {...args} />;

export const Primary = Template.bind({});
Primary.args={
  title: "Personal Profile",
  desc: "Add information about yourself",
  src: "https://mdbcdn.b-cdn.net/img/new/avatars/8.webp",
  alt: "Avatar",
  name: "Your Name",
  email: "Email",
  tel: "Phone Number",
  bio: "add bio",
  button: "save"
};