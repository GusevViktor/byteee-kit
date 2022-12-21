import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Link from "./Link";


export default {
  title: "Link",
  component: Link,


} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <>
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  }}>
    <div><Link startIcon="Anchor" {...args}/></div>
    <div><Link {...args}/></div>
    <div><Link endIcon="Wifi" {...args}/></div>
    <div>
      <Link endIcon={"Database"} startIcon="ZoomOut" {...args}/>
    </div>
    <div><Link {...args} underline /></div>
  </div>
</>;
export const Primary = Template.bind({});

Primary.args = {
  children: "Link style",
};
