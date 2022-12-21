import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextEditor from "./index";

export default {
  title: "TextEditor",
  component: TextEditor,

} as ComponentMeta<typeof TextEditor>;

const Template: ComponentStory<typeof TextEditor> = (args) => (
  <TextEditor placeholder="Placeholder" {...args}/>
);

export const Default = Template.bind({});