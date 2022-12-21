import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BookmarkedButton from "./BookmarkedButton";

export default {
  title: "Bookmarked",
  component: BookmarkedButton,
} as ComponentMeta<typeof BookmarkedButton>;


const Template: ComponentStory<typeof BookmarkedButton> = (args) => <>
  <BookmarkedButton {...args}/>
</>;


export const Default = Template.bind({});
export const Checked = Template.bind({});
Checked.args = {
  checked: true,
}
