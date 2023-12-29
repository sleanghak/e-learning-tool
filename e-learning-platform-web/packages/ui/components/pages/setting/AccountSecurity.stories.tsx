import {ComponentStory, ComponentMeta} from '@storybook/react';
import  AccountSecurity  from './AccountSecurity';
import { appConfig } from '../../../app.config';
import './../../../styles/style.css';
export default{
  title: `${appConfig.appName}/pages/setting/AccountSecurity`,
  component: AccountSecurity,
} as ComponentMeta<typeof AccountSecurity>;
export const Template: ComponentStory<typeof AccountSecurity> = (args) =><AccountSecurity {...args} />;

export const Primary = Template.bind({});
Primary.args={
  title: "Account Security",
  desc: "Edit your account settings and change your password here.",
  email: "Email",
  old_password: "Old Password",
  new_password: "New Password",
  confirm_password: "Confirm Password",
  button: "Change"
};