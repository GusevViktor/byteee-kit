import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Toggle from "./index";

export default {
  title: "Toggle",
  component: Toggle,

} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
    <Toggle
      color="blue"/>
    <Toggle
      color="green"/>
    <Toggle
      color="violet"/>
    <Toggle
      color="orange"/>
    <Toggle
      color="orange" disabled={true}/>
  </div>
)

export const Default = Template.bind({});
