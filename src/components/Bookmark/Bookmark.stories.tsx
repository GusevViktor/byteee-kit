import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Bookmark from "./Bookmark";

export default {
  title: "Bookmark",
  component: Bookmark,
} as ComponentMeta<typeof Bookmark>;


const Template: ComponentStory<typeof Bookmark> = (args) => <>
  <Bookmark {...args}/>
</>;


export const Default = Template.bind({});
export const Checked = Template.bind({});
Checked.args = {
  checked: true,
}
