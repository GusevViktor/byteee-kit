import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./InputConteiner";


export default {
  title: "Input",
  component: Input,

} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <div>
    <Input {...args} size="s" />
    <div style={{ marginBottom: "20px" }} />
    <Input {...args} size="m" />
    <div style={{ marginBottom: "20px" }} />
    <Input {...args} size="l" />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  placeholder: "Enter text...",
};
export const Error = Template.bind({});
Error.args = {
  placeholder: "Enter text...",
  error: "Error message",
};

export const InputWithIcon = Template.bind({});
InputWithIcon.args = {
  startIcon: "Activity",
  label: "123123",
  size: "l"
};

export const Label = Template.bind({});
Label.args = {
  label: "This is Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};