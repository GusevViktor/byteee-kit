import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Role from "./Role";


export default {
  title: "Role",
  component: Role,

} as ComponentMeta<typeof Role>;

const Template: ComponentStory<typeof Role> = (args) => ( <Role {...args} />

);

export const Default = Template.bind({});
