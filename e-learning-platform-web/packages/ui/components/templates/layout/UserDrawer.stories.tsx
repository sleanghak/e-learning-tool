import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";
import { Userdrawer } from "./UserDrawer";

export default {
  title: `${appConfig.appName}/templates/layout/UserDrawer`,
  component: Userdrawer,
} as ComponentMeta<typeof Userdrawer>;

const Templates: ComponentStory<typeof Userdrawer> = (args) => (
  <Userdrawer {...args} />
);

export const Primary = Templates.bind({});

Primary.args = {
  profile: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  name: "Test",
  altprofile: "image Profile",
  email: "test@gmail.com",
};
