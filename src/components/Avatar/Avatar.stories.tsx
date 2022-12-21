import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from "./Avatar";
import avatar from "../../../public/avatar.svg";

export default {
  title: "Avatar",
  component: Avatar,

} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <>
  <Avatar {...args} size={"s"} src={avatar} alt={""}/>
  <Avatar {...args} size={"m"} src={avatar} alt={""}/>
  <Avatar {...args} size={"l"} src={avatar} alt={""}/>
  <Avatar {...args} size={"xl"} src={avatar} alt={""}/>
</>

export const Offline = Template.bind({});

Offline.args = {
  src: avatar,
  size: "l",
  status: "offline"
};
export const Online = Template.bind({});
Online.args = {
  src: avatar,
  size: "l",
  status: "online"
};
