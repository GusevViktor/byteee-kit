import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CreateEventButton from "./CreateEventButton";

export default {
  title: "CreateEventButton",
  component: CreateEventButton,
} as ComponentMeta<typeof CreateEventButton>;


const Template: ComponentStory<typeof CreateEventButton> = (args) => (
  <div style={{ background: "white", padding: 20 }}>
    <CreateEventButton {...args}/>
  </div>
);

export const Default = Template.bind({});
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
}
