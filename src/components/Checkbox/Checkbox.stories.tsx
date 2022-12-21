import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,

} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <div style={{ display: "inline-flex", flexDirection: "column", gap: 8 }}>
    <Checkbox {...args} size="s"/>
    <Checkbox {...args} size="s" label="text"/>
    <Checkbox {...args} size="m"/>
    <Checkbox {...args} size="m" label="text"/>
  </div>
);

export const Default = Template.bind({});

Default.args = {

};
export const Error = Template.bind({});

Error.args = {
  error: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};
