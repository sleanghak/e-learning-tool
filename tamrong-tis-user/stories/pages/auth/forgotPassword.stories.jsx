import ForgotPassword from './../../../pages/auth/forgotPassword';

export default {
    title: 'pages/auth/forgotPassword',
    component: ForgotPassword,
};

const Template = (args) => <ForgotPassword {...args} />;
export const Primary = Template.bind({});