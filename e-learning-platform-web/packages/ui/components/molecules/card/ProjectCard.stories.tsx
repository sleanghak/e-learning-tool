
import { ComponentStory, ComponentMeta } from '@storybook/react';
import "../../../styles/style.css";
import { appConfig } from '../../../app.config';
import { ProjectCard } from './ProjectCard';

export default {
    title: `${appConfig.appName}/molecules/card/ProjectCard`,
    component: ProjectCard,
} as ComponentMeta<typeof ProjectCard>;

const Template: ComponentStory<typeof ProjectCard> = (args) => <ProjectCard {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    src: "https://www.gbs.com.kh/wp-content/uploads/2020/07/3-2.jpg",
    alt: "img",
    title: "Coffee Shop",
    desc: "html , css , js",
    href:"https://www.figma.com/file/su8PuOiWiUyWBqvGuhwWIs/ReanCode101-Apps?node-id=1%3A12671&t=IZ84ycBIq6Ac0L9y-0",
};

