import Header from "../../../components/templates/layout/Header";


export default {
    title: 'templates/layout/Header',
    component: Header,
};

const Template = (args) => <Header {...args} />;
export const Primary = Template.bind({});