import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Popven from "./Popven";

export default {
  title: "Popven",
  component: Popven,
} as ComponentMeta<typeof Popven>;


const Template: ComponentStory<typeof Popven> = (args) => (
  <Popven {...args}/>
);

export const Default = Template.bind({});
Default.args = {
  children: "Required to use all platform features ",
}