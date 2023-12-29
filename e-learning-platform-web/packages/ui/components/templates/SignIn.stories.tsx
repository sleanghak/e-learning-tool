import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../styles/style.css";
import { appConfig } from "../../app.config";
import { SignIn } from "./SignIn";

export default {
  title: `${appConfig.appName}/templates/SignIn`,
  component: SignIn,
} as ComponentMeta<typeof SignIn>;

const Template: ComponentStory<typeof SignIn> = (args) => <SignIn {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: "https://yt3.ggpht.com/T3aH4jLpXB1cRIlbxuecFD2j0coaLpQ_E_u7aAF4296B0O0uam5mKUC3WAxXn3In55lN9hcvJDMhSg=s500-c-fcrop64=1,00000000ffffffff-nd-v1",
  title: "  Log in to your ReanCode101 account !",
  desc: "You can browse the various lessons and levels without an account, but you will need to sign in to save your progress and projects.",
};
