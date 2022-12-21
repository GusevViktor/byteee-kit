import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RadioButton from "./index";

export default {
  title: "RadioButton",
  component: RadioButton,

} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} label="Hello World !!!" value="hello_world" />
);

const TemplateWithoutText: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} label="Hello World !!!" value="hello_world" />
);

export const Checked= Template.bind({});
export const Unchecked = Template.bind({});
export const Error = Template.bind({});
export const Disabled = Template.bind({});
export const Reverse = Template.bind({});
export const Icon = Template.bind({});
export const WithoutText = TemplateWithoutText.bind({});

Checked.args = {
  defaultChecked: true,
};

Unchecked.args = {};

Error.args = {
  error: true,
};

Disabled.args = {
  disabled: true,
}

Icon.args = {
  icon: "AlertTriangle",
}

Reverse.args = {
  reverse: true,
}