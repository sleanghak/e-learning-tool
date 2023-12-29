import {ComponentStory, ComponentMeta} from '@storybook/react';
import { EnrollCard } from './EnrollCard';
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";
export default{
    title: `${appConfig.appName}/molecules/card/EnrollCard `,
    component: EnrollCard ,
  } as ComponentMeta<typeof EnrollCard >;
  export const Template: ComponentStory<typeof EnrollCard > = (args) =><EnrollCard  {...args} />;
  
  export const Primary = Template.bind({});
  Primary.args={
    href: "#",
    src: "https://th.bing.com/th/id/OIP.-IvsDqyVTOlE1PaDbHXzOQHaFj?w=263&h=197&c=7&r=0&o=5&pid=1.7",
    alt: "image",
    title: "Invite your friends to",
    desc: "ReanCode101"
  };