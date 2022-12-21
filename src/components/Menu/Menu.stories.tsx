import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Menu from "./Menu";

export default {
  title: "Menu",
  component: Menu,


} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = () => <>
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  }}>
    <Menu title="sdfdf" size='l' endIcon = 'more'>
      <li>dfgfdg</li>
      <li>sdgsd</li>
    </Menu>

    {/* </Menu> */}
  </div>
</>;
export const Primary = Template.bind({});

Primary.args = {
  children: "trolololo",

};
