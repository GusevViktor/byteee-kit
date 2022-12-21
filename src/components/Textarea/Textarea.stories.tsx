import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Textarea from "./Textarea";

export default {
  title: "Textarea",
  component: Textarea,

} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
  const [value, setValue] = useState("")
  return (
    <div style={{ width: 300 }}>
      <Textarea {...args}
        rows={5}
        value={value}
        onChange={(e) => setValue(e.target.value)}/>
    </div>
  );
}

export const Primary = Template.bind({});

Primary.args = {
  placeholder: "Enter text...",
  label: "Message",
};
export const Error = Template.bind({});
Error.args = {
  placeholder: "Enter text...",
  error: true,
  errorMessage: "Error message",
};