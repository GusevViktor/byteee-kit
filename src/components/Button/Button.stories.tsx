import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import TemplateAllWrap from "./Templates/TemplateAll";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

const renderFourIcons = (args) => (
  <>
    <Button
      {...args}
    >
        Button
    </Button>
    <Button
      {...args}
      startIcon="UserPlus"
    >
        Button
    </Button>
    <Button
      {...args}
      endIcon="ArrowRight"
    >
        Button
    </Button>
    <Button
      {...args}
      startIcon="Loader"
    />
  </>
)

const TemplateAll: ComponentStory<typeof Button> = (args) => (
  <TemplateAllWrap>
    <>
      {renderFourIcons({ ...args, size: "xl" })}
      {renderFourIcons({ ...args, size: "l" })}
      {renderFourIcons({ ...args, size: "m" })}
      {renderFourIcons({ ...args, size: "s" })}
      {renderFourIcons({ ...args, size: "xs" })}
    </>
  </TemplateAllWrap>
);

export const All = TemplateAll.bind({});

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  size: "m",
  // Icon: '/img/broadcast_icon.svg' || '/img/broadcast_icon.svg'
};

export const With_StartIcon = Template.bind({});
With_StartIcon.args = {
  children: "Button",
  size: "m",
  startIcon: "Airplay",
};
export const With_IconEnd = Template.bind({});
With_IconEnd.args = {
  children: "Button",
  size: "m",
  endIcon: "Airplay",
};