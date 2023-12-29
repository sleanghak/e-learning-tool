import SignUp from './../../../pages/auth/signup';

export default {
    title: 'pages/auth/signup',
    component: SignUp,
};

const Template = (args) => <SignUp {...args} />;
export const Primary = Template.bind({});