import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Spinner from "./index";
import style from "./stories.module.scss";

const { wrap } = style;


export default {
  title: "Spinner",
  component: Spinner,

} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <div className={wrap}>
    <Spinner {...args} size="xs"/>
    <Spinner {...args} size="s"/>
    <Spinner {...args} size="m"/>
    <Spinner {...args} size="l"/>
  </div>

);

export const Default = Template.bind({});
