import { ComponentMeta, ComponentStory } from "@storybook/react";
import "../../../styles/style.css";
import { appConfig } from "../../../app.config";
import { CertificateCard } from "./CertificateCard";

export default {
  title: `${appConfig.appName}/organisms/card/CertificateCard`,
  component: CertificateCard,
} as ComponentMeta<typeof CertificateCard>;

const Template: ComponentStory<typeof CertificateCard> = (args) => (
  <CertificateCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  url: "https://marketplace.canva.com/EAFJXTjgz1M/1/0/1600w/canva-blue-and-yellow-minimalist-employee-of-the-month-certificate-_A_NvKtzEzc.jpg",
  name: "Fundamentals HTML Course |",
};
