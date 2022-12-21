import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Status from "./Status";


export default {
  title: "Status",
  component: Status,
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = (args) => (
  <Status {...args} >Text</Status>
);

export const Default = Template.bind({});


Default.args = {
  size: "m",
  color: "mint",
  text: "Text",
};
