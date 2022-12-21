import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectText from "./SelectTextConteiner";
import { Text } from "../../Typography";

export default {
  title: "SelectText",
  component: SelectText,

} as ComponentMeta<typeof SelectText>;

const Template: ComponentStory<typeof SelectText> = (args) => (
  <div>
    <SelectText {...args} size="s" />
    <div style={{ marginBottom: "20px" }} />
    <SelectText {...args} size="m" />
    <div style={{ marginBottom: "20px" }} />
    <SelectText {...args} size="l" />
    <div style={{ marginBottom: "20px" }} />
    <div style={{
      marginBottom: "20px", display: "flex", gap: 8, alignItems: "center"
    }} >
      <Text as="span" size="m">Сhoose the{" "}</Text>
      <span style={{ display: "inline-flex" }}>
        <SelectText {...args} size="l" />
      </span>
      <Text as="span" size="m">you want{" "}</Text>
    </div>
  </div>
);

export const Default = Template.bind({});
export const Disabled = Template.bind({});

Default.args = {
  placeholder: "Enter text...",
};


Disabled.args = {
  disabled: true,
};
