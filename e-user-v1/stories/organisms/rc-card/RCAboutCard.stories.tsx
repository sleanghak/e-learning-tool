import { ComponentStory, ComponentMeta } from "@storybook/react";
import RCAboutCard from "../../../components/organisms/rc-card/RCAboutCard";

export default {
    title: "components/organisms/rc-card/RCAboutCard",
    component: RCAboutCard,
} as ComponentMeta<typeof RCAboutCard>;
export const Template: ComponentStory<typeof RCAboutCard> = (args) => <RCAboutCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    image: "/binocular.png",
    title: "VISION",
    desc: "To develop the next generation of Cambodians to love the field of technology and want Cambodia to grow in the field of technology as well.",
};