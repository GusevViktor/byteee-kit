import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RadioGroup from "./index";

export default {
  title: "RadioGroup",
  component: RadioGroup,

} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = () => (
  <RadioGroup
    name="fruits"
    onChange={() => 1 + 1}
    items={[
      {
        label: "tomato",
        value: "tomato",
        defaultChecked: true,
      },
      {
        label: "Banana",
        value: "banana",
      },
      {
        label: "Carrot",
        value: "carrot",
      },
      {
        label: "Apple",
        value: "apple",
      },
      {
        label: "Red Apple",
        value: "red_apple",
        error: true,
      },
      {
        label: "Pineapple",
        value: "pineapple",
      },
      {
        label: "Melon",
        value: "melon",
        disabled: true,
      },
      {
        label: "Smile",
        value: "smile",
        icon: "Smile",
      },
    ]}
  />
);


export const All = Template.bind({});