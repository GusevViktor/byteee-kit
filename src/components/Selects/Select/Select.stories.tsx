import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "./SelectConteiner";

export default {
  title: "Select",
  component: Select,

} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <div>
    <Select {...args} size="s" />
    <div style={{ marginBottom: "20px" }} />
    <Select {...args} size="m" />
    <div style={{ marginBottom: "20px" }} />
    <Select {...args} size="l" />
    <div style={{ marginBottom: "20px" }} />
  </div>
);

export const Default = Template.bind({});
export const Label = Template.bind({});
export const Disabled = Template.bind({});

Default.args = {
  placeholder: "Enter text...",
};


Label.args = {
  label: "This is Select",
};

Disabled.args = {
  disabled: true,
  label: "This is Select",
};
