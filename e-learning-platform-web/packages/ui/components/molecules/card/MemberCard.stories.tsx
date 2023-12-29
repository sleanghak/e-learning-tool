import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemberCard } from "./MemberCard";
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";
export default {
  title: `${appConfig.appName}/molecules/card/MemberCard`,
  component: MemberCard,
} as ComponentMeta<typeof MemberCard>;
export const Template: ComponentStory<typeof MemberCard> = (args) => <MemberCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: "#",
  src: "https://yt3.ggpht.com/OLuhaGN_2txsq-blg1AqTdsCzHw_Rv21CeGTQP2_IUEwQ-S_2ki8iguQPpY7Y9HCMSB4W6n5-ihRmJU=s640-c-fcrop64=1,00000000ffffffff-nd-v1S",
  alt: "profile ",
  title: "vit phnumvann",
  desc: "Co-Founder and Director",

};