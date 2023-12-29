
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './../../styles/style.css';
import { ForgotPassword } from './ForgotPassword';
import { appConfig } from '../../app.config';

export default {
    title: `${appConfig.appName}/templates/ForgotPassword`,
    component: ForgotPassword,
} as ComponentMeta<typeof ForgotPassword>;

const Template: ComponentStory<typeof ForgotPassword> = (args) => <ForgotPassword {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    src:"https://yt3.ggpht.com/T3aH4jLpXB1cRIlbxuecFD2j0coaLpQ_E_u7aAF4296B0O0uam5mKUC3WAxXn3In55lN9hcvJDMhSg=s500-c-fcrop64=1,00000000ffffffff-nd-v1",
    title:" Forgot your password?",
    desc:"Enter your email address associated with your account below and we'll send you password reset instructions.",
};



