import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StudentCard } from "./StudentCard";
import { appConfig } from "../../../app.config";
import "./../../../styles/style.css";
export default {
  title: `${appConfig.appName}/organisms/card/StudentCard`,
  component: StudentCard,
} as ComponentMeta<typeof StudentCard>;
const Template: ComponentStory<typeof StudentCard> = (args) => (
  <StudentCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {

  href: "#",
  backgroundImagePath: "https://centuryseven.com/wp-content/uploads/2017/09/twitter-facebook-header-templates.jpg",
  profileImagePath: "https://yt3.ggpht.com/OLuhaGN_2txsq-blg1AqTdsCzHw_Rv21CeGTQP2_IUEwQ-S_2ki8iguQPpY7Y9HCMSB4W6n5-ihRmJU=s640-c-fcrop64=1,00000000ffffffff-nd-v1",
  alt: "Avatar",
  StudentName: "Vit Phnumvann",
  title: "Web Development",
  desc: "Course: Basic Web Development",
};
