import {ComponentStory, ComponentMeta} from '@storybook/react';
import { MemberDetail } from './MemberDetail';
import { appConfig } from '../../../app.config';
import './../../../styles/style.css';

export default{
  title: `${appConfig.appName}/organisms/detail/MemberDetail`,
  component: MemberDetail,
} as ComponentMeta<typeof MemberDetail>;
export const Template: ComponentStory<typeof MemberDetail> = (args) =><MemberDetail {...args} />;

export const Primary = Template.bind({});
Primary.args={
  src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg",
  alt: "img",
  title: "vit phnumvann",
  desc: "Co-Founder and Director",
  desc1: "Alberto M. Carvalho has served as Superintendent of Los Angeles Unified School District, the nation’s second-largest school district, since February 2022. He was selected by the Los Angeles Unified Board of Education in a unanimous vote following a comprehensive community engagement process and a nationwide search.",
};