import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PlayVideoCard } from './PlayVideoCard';
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";
export default {
  title: `${appConfig.appName}/molecules/card/PlayVideoCard`,
  component: PlayVideoCard,
} as ComponentMeta<typeof PlayVideoCard>;
export const Template: ComponentStory<typeof PlayVideoCard> = (args) => <PlayVideoCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  imagePoster: "https://i9.ytimg.com/vi/4Oieh5Qqog4/mqdefault.jpg?v=63cf5bdd&sqp=CMjrs58G&rs=AOn4CLCNqjPVI94FmmIKXQt_NsDV0hJ5lQ",
  URL: "https://youtu.be/4Oieh5Qqog4",
  title: "Basic web developer",
  date: "15-Feb-2023",
  desc: "Basic web developer",

};