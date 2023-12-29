import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../styles/style.css";
import { AttachFile } from "./AttachFile";
import { appConfig } from "../../../app.config";

export default {
  title: `${appConfig.appName}/organisms/card/AttachFile`,
  component: AttachFile,
} as ComponentMeta<typeof AttachFile>;

const Template: ComponentStory<typeof AttachFile> = () => <AttachFile />;

export const Primary = Template.bind({});
