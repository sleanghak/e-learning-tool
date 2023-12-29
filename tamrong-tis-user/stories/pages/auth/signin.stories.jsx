import SignIn from './../../../pages/auth/signin';

export default {
    title: 'pages/auth/signin',
    component: SignIn,
};

const Template = (args) => <SignIn {...args} />;
export const Primary = Template.bind({});