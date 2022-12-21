import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectInput from "./SelectInputConteiner";

export default {
  title: "SelectInput",
  component: SelectInput,

} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = (args) => (
  <div>
    <SelectInput
      {...args}
      size="s"
    />
    <div style={{ marginBottom: "20px" }} />
    <SelectInput
      {...args}
      size="m"
    />
    <div style={{ marginBottom: "20px" }} />
    <SelectInput
      {...args}
      size="l"
    />
    <div style={{ marginBottom: "20px" }} />
  </div>
);

export const Default = Template.bind({});
export const Label = Template.bind({});
export const Disabled = Template.bind({});

Default.args = {
  placeholder: "Enter text...",
};


Disabled.args = {
  disabled: true,
};
