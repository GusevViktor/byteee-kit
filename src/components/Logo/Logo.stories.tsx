import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Logo from "../Logo";


export default {
  title: "Logo",
  component: Logo,


} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = () => <>
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  }}>
    <Logo theme="dark" />
    <div
      style={{
        background: "black",
      }}
    >
      <Logo theme="light" />
    </div>
  </div>
</>;
export const All = Template.bind({});
