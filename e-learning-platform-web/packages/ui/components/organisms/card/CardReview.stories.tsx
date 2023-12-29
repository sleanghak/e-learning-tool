import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./../../../styles/style.css";
import { CardReview } from "./CardReview";
import { appConfig } from "../../../app.config";

export default {
  title: `${appConfig.appName}/organisms/card/CardReview`,
  component: CardReview,
} as ComponentMeta<typeof CardReview>;

const Template: ComponentStory<typeof CardReview> = (args) => <CardReview {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  imgprofile:
    "https://www.shareicon.net/data/2016/05/24/770137_man_512x512.png",
  altprofile: "Image Profile",
  studentname: "Student Name",
  subject: "Full stack developer",
  decription:
    "The courses in ReanCode101 are very informative for a newbie to digital skills like me. They have a wide coverage of all topics.",
};
