import {ComponentStory, ComponentMeta} from '@storybook/react';
import { StudentDetail } from './StudentDetail'; 
import { appConfig } from '../../../app.config';
import './../../../styles/style.css';

export default{
  title: `${appConfig.appName}/organisms/detail/StudentDetail`,
  component: StudentDetail,
} as ComponentMeta<typeof StudentDetail>;
export const Template: ComponentStory<typeof StudentDetail> = (args) =><StudentDetail {...args} />;

export const Primary = Template.bind({});
Primary.args={
  src: "https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg",
  alt: "img",
  name: "vit phnumvann",
  dob: "01/June/2000",
  job: "Student",
  course: "Basic Web Development",
  tech: "Trello HTML CSS and JavaScript",
  twr: "I have a lot of new experience in codind and teachers always help explain when we have a problem and the teacher are friendly.",
  ms: "Work hard and study hard. listen to your teacher and Don'give up",
  project: "Go to website",
  desc: "Alberto M. Carvalho has served as Superintendent of Los Angeles Unified School District, the nations second-largest school district, since February 2022. He was selected by the Los Angeles Unified Board of Education in a unanimous vote following a comprehensive community engagement process and a nationwide search.",
};