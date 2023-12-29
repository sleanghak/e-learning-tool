import { UserAppBar } from "../../../components/templates/appbars";

export default {
    title: 'leanghak-coder/templates/appbars/UserAppBar',
    component: UserAppBar,
};

const Template = (args) => <UserAppBar {...args} />;
export const Primary = Template.bind({});