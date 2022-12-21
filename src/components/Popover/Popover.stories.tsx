import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Popover from "./Popover";
import Avatar from "../Avatar/Avatar";
import avatar from "../../../public/avatar.svg";

export default {
  title: "Popover",
  component: Popover,

} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <div><Popover {...args} /></div>
);

export const Primary = Template.bind({});

Primary.args = {
  avatar: <Avatar status={"online"} size={"s"} src={avatar} alt={""}/>,
  name: "Ralph Edwards",
  message: "Hey, are you coming to the event my company is organizing?"
};