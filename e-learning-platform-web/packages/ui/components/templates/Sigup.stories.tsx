import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./../../styles/style.css";
import { SignUp } from "./SignUp";
import { appConfig } from "../../app.config";

export default {
  title: `${appConfig.appName}/templates/SignUp`,
  component: SignUp,
} as ComponentMeta<typeof SignUp>;

const Template: ComponentStory<typeof SignUp> = (args) => <SignUp {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  src: "https://yt3.ggpht.com/T3aH4jLpXB1cRIlbxuecFD2j0coaLpQ_E_u7aAF4296B0O0uam5mKUC3WAxXn3In55lN9hcvJDMhSg=s500-c-fcrop64=1,00000000ffffffff-nd-v1",
  title: " Sign up for ReanCode101",
  desc: " Sign up for an account to track your progress or your child’s progress or manage your classroom.Your password must be at least 6 characterslong, containing at least one letter and one number.",
};
